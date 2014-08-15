define(
    'collection/comment',
    [
        'backbone',
        'model/comment'
    ],
    function (Backbone, CommentModel) {
        'use strict';

        var CommentCollection = Backbone.Collection.extend({
            model: CommentModel,
            url: function(){
                return "http://blogmv.apiary-mock.com/api/articles/"+this.article.id+"/comments"
            },
            initialize: function(models, options){
                this.article = options.article
            }
        });

        return CommentCollection;
    }
);
