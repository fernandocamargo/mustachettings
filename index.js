const _ = require('lodash')
const Mustache = require('mustache')
const example = require('./mock/example')

const helpers = {
  is: {
    recursive: (value) => (_.isPlainObject(value) || _.isArray(value)),
    replaceable: (value) => _.isString(value),
    executable: (value) => _.isFunction(value)
  },
  get: {
    collection: (input) => {
      const types = {
        [_.isArray(input)]: [],
        [_.isPlainObject(input)]: {}
      }
      return (types.true || input)
    }
  },
  noop: () => {},
  replace: (template, value) => {
    return Mustache.render.bind(Mustache, template, value)
  },
  execute: (callback, context, ...params) => callback.apply(context, params),
  clone: (value) => {
    return (value.valueOf ? value.valueOf.bind(value) : helpers.noop)
  },
  refer: function (from) {
    return _.assign({}, from, this)
  },
  test: function (status, type) {
    const result = helpers.is[type](this)
    return (result ? type : status)
  },
  check: (value) => {
    const test = helpers.test.bind(value)
    return _.keys(helpers.is).reduce(test, false)
  },
  scan: function (stack, item, key) {
    const {callee, params} = this
    const {output, parent, original} = params
    const {refer, check, execute, replace, clone} = helpers
    const current = (output || stack)
    const reference = refer.bind({_this: stack, _parent: parent})
    const type = (check(item) || 'cloneable')
    const handlers = {
      recursive: callee.bind(this, item, current, reference(stack), original),
      replaceable: replace(item, reference(current)),
      executable: execute.bind(this, item, reference(current), original),
      cloneable: clone(item)
    }
    const handler = handlers[type]
    const value = handler()
    const attribute = {[key]: value}
    return _.assign(stack, attribute)
  }
}

module.exports = API = function API (input, output, parent, original) {
  const current = (!_.isUndefined(original) ? original : input)
  const reference = {
    callee: API,
    params: {original: current, input, output, parent}
  }
  const scan = helpers.scan.bind(reference)
  const collection = helpers.get.collection(input)
  return _.reduce(input, scan, collection)
}

console.log(API(example))
