define(
    'model/article',
    [
        'backbone',
        'collection/comment'
    ],
    function (Backbone, CommentCollection) {
        'use strict';
        
        var ArticleModel = Backbone.Model.extend({
            initialize: function(){
                this.comments = new CommentCollection([], {
                    "article": this
                });
            },

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
