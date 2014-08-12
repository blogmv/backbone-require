define(
    'collection/article',
    [
        'backbone',
        'model/article'
    ],
    function (Backbone, ArticleModel) {
        'use strict';

        var ArticleCollection = Backbone.Collection.extend({
            model: ArticleModel,
            url:   'http://blogmv.apiary-mock.com/api/articles'
        });

        return ArticleCollection;
    }
);
