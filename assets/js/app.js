requirejs.config({
  baseUrl: 'assets/js',
  paths: {
    'json2'      : 'libs/json2',
    'jquery'     : 'libs/jquery',
    'underscore' : 'libs/underscore',
    'backbone'   : 'libs/backbone',
    'marionette' : 'libs/backbone.marionette',
    'webix'      : 'libs/webix'
  },
  shim: {
    'webix' : {
      exports : 'webix'
    }
  }
});

requirejs(['init'], function(){
  console.log('loaded');
});