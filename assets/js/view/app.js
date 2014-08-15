define(
    'view/app',
    [
        'jquery',
        'backbone',
        'collection/article'
    ],
    function ($, Backbone, ArticleCollection) {
        'use strict';

        var AppView = Backbone.View.extend({
            template: _.template( $('#tmp-article-list').html() ),

            el: '.main',

            initialize: function (activeModel) {
                this.collection = new ArticleCollection();
                this.collection.fetch();

                this.activeModel = activeModel;

                this.listenTo(this.collection, 'sync', this.render);
                this.listenTo(this.collection, 'sync', this.setFirstModelAsActive);
            },

            render: function() {
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

                index = index.toJSON();
                this.activeModel.set(index);
            }
        });

        return AppView;
    }
);
