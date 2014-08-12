define(
    'view/app',
    [
        'backbone',
        'model/article',
        'collection/article'
    ],
    function (Backbone, ArticleModel, ArticleCollection) {
        'use strict';

        var AppView = Backbone.View.extend({
            el: '.header',

            events: {
            },

            initialize: function () {
                this.articleCollection = new ArticleCollection();
                this.articleCollection.fetch();

                console.log('...');
            }
        });

        return AppView;
    }
);
