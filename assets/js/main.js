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
        'model/article',
        'model/comment',
        'view/app',
        'view/articleContent',
        'view/articleComment'
    ],
    function (Backbone, ArticleModel, CommentModel, AppView, ArticleContentView, ArticleCommentsView) {
        var activeModel    = new ArticleModel();
        var app            = new AppView(activeModel);
        var articleContent = new ArticleContentView(activeModel);
        var articleComment = new ArticleCommentsView(activeModel);
    }
);
