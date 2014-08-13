define(
    'collection/article',
    [
        'backbone',
        'model/article'
    ],
    function (Backbone, ArticleModel) {
        'use strict';

        var ArticleCollection = Backbone.Collection.extend({
            url:   'http://blogmv.apiary-mock.com/api/articles',
            model: ArticleModel
        });

        return ArticleCollection;
    }
);
