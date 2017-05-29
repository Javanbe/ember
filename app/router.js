import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('login');
  this.route('userinfo',{path:'/user'});
  this.route('bankinfo',{path:'/bank'});
  this.route('about');
  this.route('favorites');
  this.route('logout');
  this.route('info', function() {
      this.route('index',{path:'/'});
      this.route('new');
  });

});

export default Router;
