module.exports = {
  redundancy: 'music',
  'non-string-number': 666,
  'non-string-array': [
    'sludge',
    'doom',
    'noise',
    'drone',
    'power electronics',
    'avant-garde',
    'free improvisation',
    [
      'grind',
      'metal ({{{non-string-number}}})',
      'no-{{{redundancy}}}'
    ],
    [
      'dub',
      'rap',
      [
        'hip hop',
        [
          'afro-jazz',
          'afro-grind',
          [
            'ethnic {{{redundancy}}}',
            'world {{{redundancy}}}',
            'chamber {{{redundancy}}}'
          ]
        ]
      ]
    ]
  ],
  'non-string-object': {
    depth: true,
    harshness: 10.5,
    noise: 7.6,
    vibration: 99.9,
    brutality: {
      speed: {
        omega: '\u03A9',
        sunn: 'O))) + {{{_this.omega}}}',
        ratio: '{{{_this.sunn}}} ---> enough is enough'
      },
      nonsense: '{{{non-string-array.0}}}: {{{_this.speed.omega}}} Massif'
    }
  },
  'non-string-function': function () {
    return (new Date());
  },
  root: '.',
  gulp: '{{{root}}}/gulp',
  tasks: '{{{gulp}}}/tasks',
  tests: '{{{_this.gulp}}}/tests || {{{gulp}}}/tests',
  deep: '"{{{non-string-number}}}" vs. "{{{non-string-object.vibration}}}" (...) "{{{non-string-object.brutality.speed.ratio}}}"',
  first: {
    pi: '\u03C0',
    sigma: '\u03A3',
    gamma: '\u03B3',
    lambda: '\u03bb',
    beta: '\u03B2',
    foo: {
      woot: '?!',
      bar: 'tasks: "{{{tasks}}}" | non-string-number: "{{{non-string-number}}}" | non-string-array.8.2.1.2.1: "{{{non-string-array.8.2.1.2.1}}}"',
      zaz: {
        ROFL: '_parent.woot: "{{{_parent.woot}}}" | _parent._parent.lambda: "{{{_parent._parent.lambda}}}" | gulp: "{{{gulp}}}"',
        deeper: {
          bojangles: 'wtf',
          lol: '_parent.ROFL: "{{{_parent.ROFL}}}" | _this.bojangles: "{{{_this.bojangles}}}" | root: "{{{root}}}" | non-string-function: "{{{non-string-function}}}"',
          menes: [
            '0wn3d',
            'pwnt',
            '{{{_this.0}}} && {{{_this.1}}}',
            'HAHA!~1 {{{_this.2}}}'
          ]
        }
      },
      zip: {
        a: {
          b: 'c',
          _b: '<3:{{#non-string-array}} ~{{{.}}}~{{/non-string-array}}'
        },
        d: {
          e: 'deep: {{{deep}}}'
        },
        g: {
          h: {
            i: {
              j: 'depth: "{{{non-string-object.depth}}}" | harshness: "{{{non-string-object.harshness}}}" | noise: "{{{non-string-object.noise}}}" | vibration: "{{{non-string-object.vibration}}}"'
            },
            k: 'pie a.k.a. "{{{_parent._parent._parent._parent.pi}}}"',
            m: 'SLG a.k.a. "{{{_parent._parent._parent._parent.sigma}}}{{{_parent._parent._parent._parent.lambda}}}{{{_parent._parent._parent._parent.gamma}}}" :: PI "{{{_this.k}}}"'
          }
        }
      }
    }
  },
  second: {
    surface: 'first.foo.zip.a._b: "{{{first.foo.zip.a._b}}}"'
  }
}
