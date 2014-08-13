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
        'view/app',
        'view/articleContent'
    ],
    function (Backbone, AppView, ArticleContentView) {
        var app = new AppView();
        var articleContent = new ArticleContentView();

        app.render();
        articleContent.render();
    }
);
