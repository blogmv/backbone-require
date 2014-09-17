define(
    'view/articleComment',
    [
        'jquery',
        'backbone'
    ],
    function ($, Backbone) {
        'use strict';

        var ArticleCommentsView = Backbone.View.extend({
            template: _.template( $('#tmp-article-comments').html() ),

            el: '.discussion',

            initialize: function (activeModel) {
                this.activeModel = activeModel;
                this.listenTo(this.activeModel, 'change', this.fetchComments);
                this.listenTo(this.activeModel.comments, 'sync', this.render);
                this.listenTo(this.activeModel.comments, 'add', this.render);
            },

            fetchComments: function(){
                this.activeModel.comments.reset();
                this.activeModel.comments.fetch();
            },

            render: function() {
                this.$el.html(this.template({
                    'collection' : this.activeModel.comments
                }));
            }
        });

        return ArticleCommentsView;
    }
);
