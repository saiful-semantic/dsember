import Ember from 'ember';
import config from './config/environment';
import coreMap from './utils/route-setup';
import fallbackMap from './utils/fallback-route-setup';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  coreMap(this);

  //this map contains the fallback routes,
  //and should therefore be the last one
  fallbackMap(this);
});

export default Router;
