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
            gray: {
              1000: '#23272f'
            }
          }
        },
      },
    variants: {},
    plugins: [],
}
