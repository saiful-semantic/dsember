/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dsember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    namespace: 'rest',
    //host: 'http://localhost:4200',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    i18n: {
      defaultLocale: 'en'
    },
    contentSecurityPolicy: { // see http://content-security-policy.com/
      'img-src': "'self' data:", //data: needed for holder.js
      'style-src': "'self' 'unsafe-inline'"  //unsafe-inline needed for holder.js
    },
    flashMessageDefaults: {
      timeout: 5000,
      extendedTimeout: 300,
      priority: 100,
      sticky: false,
      showProgress: false,
      type: 'info',
      types: [
        'success',
        'info',
        'warning',
        'danger',
        'alert',
        'secondary'
      ],
      injectionFactories: [
        'route',
        'controller',
        'view',
        'component'
      ],
      preventDuplicates: true
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
