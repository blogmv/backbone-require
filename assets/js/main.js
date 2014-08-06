'use strict';

require.config({
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery     : '../vendor/jquery/dist/jquery',
        underscore : '../vendor/underscore/underscore',
        backbone   : '../vendor/backbone/backbone'
    }
});

require(
    [
        'backbone',
        'views/app',
    ],
    function (Backbone, AppView) {
        var app = new AppView();

        app.render();
    }
);
