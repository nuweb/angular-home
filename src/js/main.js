require.config({
  paths: {
    angular: '/components/angular/angular',
    angularResource: '/components/angular-resource/angular-resource'
  },
  shim: {
    'controllers/homeCtrl': {
      deps: ['app']
    },
    'controllers/aboutCtrl': {
      deps: ['app']
    },
    'libs/angular-resource': {
      deps: ['libs/angular']
    },
    'app': {
      deps: ['libs/angular', 'libs/angular-resource']
    },
    'bootstrap': {
      deps: ['app']
    },
    'routes': {
      deps: ['app']
    }
  }
});

require(['controllers/homeCtrl', 'controllers/aboutCtrl', 'routes'], function(){
  return angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });
});