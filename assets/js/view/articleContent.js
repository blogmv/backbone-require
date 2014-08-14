define(
    'view/articleContent',
    [
        'backbone'
    ],
    function (Backbone) {
        'use strict';

        var ArticleContentView = Backbone.View.extend({
            template: _.template( $('#tmp-article-content').html() ),

            el: '.main',

            initialize: function (activeModel) {
                this.activeModel = activeModel;
                this.listenTo(this.activeModel, 'change', this.render);
            },

            render: function() {
                this.$el.find('article').html(this.template({
                    'activeModel' : this.activeModel
                }));
            }
        });

        return ArticleContentView;
    }
);
