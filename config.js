SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    '.': {
      main: './app.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      babelOptions: { react: true }
    }
  },
  map: {
    'plugin-babel':          'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build':  'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react':                 'react@18.3.1/umd/react.development.js',
    'react-dom':             'react-dom@18.3.1/umd/react-dom.development.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app').catch(console.error.bind(console));
