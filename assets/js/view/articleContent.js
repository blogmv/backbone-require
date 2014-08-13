define(
    'view/articleContent',
    [
        'backbone',
        'model/article'
    ],
    function (Backbone, ArticleModel) {
        'use strict';

        var ArticleContentView = Backbone.View.extend({
            template: _.template( $('#tmp-article-content').html() ),

            el: '.main',

            initialize: function () {
                this.activeModel = new ArticleModel();

                this.listenTo(this.activeModel, 'change', this.createArticleContent)
            },

            createArticleContent: function() {
                this.$el.find('article').html(this.template({
                    'activeModel' : this.activeModel
                }));


            }
        });

        return ArticleContentView;
    }
);
