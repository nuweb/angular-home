var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',
    paths: {
        'angular': '../src/js/libs/angular',
        'angularResource': '../src/js/libs/angular-resource',
        'app': '../src/js/app'
    },

    shim: {
        'app': {
            deps: ['angular', 'angularResource'],
            exports: 'app'
        },
        'angularResource': {
            deps: ['angular'],
            exports: 'angularResource'
        }
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});