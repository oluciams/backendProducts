module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  }, 
  extends: [
    'standard',
    'prettier',
    'plugins:prettier/recommended', 
    'plugins:react/recommended' 
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: [
    'prettier',
    'react'  
  ],
  rules: {}
}
