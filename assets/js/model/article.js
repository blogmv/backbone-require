define(
    'model/article',
    [
        'backbone',
    ],
    function (Backbone) {
        'use strict';

        var ArticleModel = Backbone.Model.extend({
            getTitle: function() {
                return this.get('title');
            },

            getContent: function() {
                return this.get('content');
            }
        });

        return ArticleModel;
    }
);
