define(
    'model/article',
    [
        'backbone',
    ],
    function (Backbone) {
        'use strict';

        var ArticleModel = Backbone.Model.extend({
            //url: 'http://blogmv.apiary-mock.com/api/articles'
        });

        return ArticleModel;
    }
);
