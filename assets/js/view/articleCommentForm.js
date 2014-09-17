define(
    'view/articleCommentForm',
    [
        'jquery',
        'backbone'
    ],
    function ($, Backbone) {
        'use strict';

        var ArticleCommentFormView = Backbone.View.extend({

            el: '.comments form',

            events: {
                "submit": "createComment"
            },

            initialize: function (activeModel) {
                this.activeModel = activeModel;
            },

            createComment: function(e){
                e.preventDefault();
                var fields = {
                    "author_name": this.$("#name").val(),
                    "author_email": this.$("#email").val(),
                    "content": this.$("#msg").val()
                }
                this.activeModel.comments.create(fields);
            }

        });

        return ArticleCommentFormView;
    }
);
