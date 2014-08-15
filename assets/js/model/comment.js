define(
    'model/comment',
    [
        'backbone',
    ],
    function (Backbone) {
        'use strict';

        var CommentModel = Backbone.Model.extend({
            getAuthorName: function() {
                return this.get('author_name');
            },

            getAuthorEmail: function() {
                return this.get('author_email');
            },

            getContent: function() {
                return this.get('content');
            }
        });

        return CommentModel;
    }
);
