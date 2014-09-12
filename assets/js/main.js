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
        'route/app'
    ],
    function (Backbone, Router) {
        var router = new Router(function(){
            Backbone.history.start({'pushState': false, 'hashChange': true});
        });
    }
);
