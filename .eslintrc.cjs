module.exports = {
  extends: [
    'standard',
  ],
  rules: {
    // "import/order": ["error"], // Buggy, would be cool, but doesn't order things correctly currently
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'space-in-parens': ['off'],
    'space-before-function-paren': ['off'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-debugger': ['warn'],
  },
}
