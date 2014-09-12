define(
    'view/app',
    [
        'jquery',
        'backbone'
    ],
    function ($, Backbone) {
        'use strict';

        var AppView = Backbone.View.extend({
            template: _.template( $('#tmp-article-list').html() ),

            el: '.main',

            initialize: function (options) {
                this.activeModel = options.activeModel;
                this.listenTo(this.collection, 'sync', this.render);
            },

            render: function() {
                this.$el.find('.list-group').html(this.template({
                    'collection' : this.collection
                }));
            }
        });

        return AppView;
    }
);
