const i18n = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18n
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'header'],
      caches: ['cookie']
    }
  });

module.exports = i18n;
