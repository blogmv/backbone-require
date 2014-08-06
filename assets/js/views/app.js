define(
    'views/app',
    [
        'backbone'
    ],
    function (Backbone) {
        'use strict';

        var AppView = Backbone.View.extend({
            el: '.header',

            events: {
            },

            initialize: function () {
                console.log('hello there');
            }
        });

        return AppView;
    }
);
