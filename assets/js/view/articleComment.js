define(
    'view/articleComment',
    [
        'backbone',
        'collection/comment'
    ],
    function (Backbone, CommentCollection) {
        'use strict';

        var ArticleCommentsView = Backbone.View.extend({
            template: _.template( $('#tmp-article-comments').html() ),

            el: '.discussion',

            initialize: function (activeModel) {
                this.activeModel = activeModel;
                this.listenTo(this.activeModel, 'change', this.render);

                this.collection = new CommentCollection();
                this.collection.fetch();

                this.listenTo(this.collection, 'sync', this.render);
            },

            render: function() {
                this.$el.html(this.template({
                    'collection' : this.collection
                }));
            }
        });

        return ArticleCommentsView;
    }
);
