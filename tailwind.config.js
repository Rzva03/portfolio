module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          colors: {
            blue: {
              1000: '#149eca',
            },
          }
        },
      },
    variants: {},
    plugins: [],
}
