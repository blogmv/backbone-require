define(
    'view/app',
    [
        'backbone',
        'model/article',
        'collection/article'
    ],
    function (Backbone, ArticleModel, ArticleCollection) {
        'use strict';

        var AppView = Backbone.View.extend({
            template: _.template( $('#tmp-article-list').html() ),

            el: '.main',

            initialize: function () {
                this.collection = new ArticleCollection();
                this.collection.fetch();

                this.activeModel = new ArticleModel();

                this.listenTo(this.collection, 'sync', this.createArticleList);
                this.listenTo(this.collection, 'sync', this.setFirstModelAsActive);
            },

            createArticleList: function() {
                this.$el.find('.list-group').html(this.template({
                    'collection' : this.collection
                }));
            },

            setFirstModelAsActive: function() {
                var index = this.collection.at(0);

                if (!index) {
                    this.activeModel.clear();
                    return
                }

                // console.log(index.id)
                // console.log("tem" + index.toJSON())
                index = index.toJSON();
                this.activeModel.set(index);

                console.log(index)
            }
        });

        return AppView;
    }
);
