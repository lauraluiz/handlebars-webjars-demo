module.exports = {

  // 'i18n': supports internationalization in Handlebars

  options: {
    preload: "<%= languages %>",
    lng: "<%= lng %>",
    fallbackLng: 'en',
    ns: {
      namespaces: [
        'main'
      ],
      defaultNs: 'main'
    }
  }

}