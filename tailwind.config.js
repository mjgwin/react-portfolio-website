module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-blue': "url('/public/img/background_blue.jpg')",
        'background-nav': "url('/public/img/background_nav.jpg')",
        'background-pattern': "url('/public/img/background_pattern.jpg')",
        'my-image': "url('/public/img/my_image.jpg')",
      }
    },
  },
  plugins: [],
}
