module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset",
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "theme-chalk"
      }
    ],
    '@babel/plugin-proposal-optional-chaining'
  ]
}
