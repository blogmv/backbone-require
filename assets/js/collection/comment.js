define(
    'collection/comment',
    [
        'backbone',
        'model/comment'
    ],
    function (Backbone, CommentModel) {
        'use strict';

        var CommentCollection = Backbone.Collection.extend({
            url:   'http://blogmv.apiary-mock.com/api/articles/1/comments',
            model: CommentModel
        });

        return CommentCollection;
    }
);
