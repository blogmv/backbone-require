define(
    'route/app',
    [
        'jquery',
        'backbone',
        'model/article',
        'view/app',
        'view/articleContent',
        'view/articleComment',
        'collection/article'
    ],
    function
        (
            $,
            Backbone,
            ArticleModel,
            AppView,
            ArticleContentView,
            ArticleCommentsView,
            ArticleCollection
        ) {
        'use strict';

        var AppRoute = Backbone.Router.extend({
            routes: {
                '' : 'index',
                'article/:id' : 'article'
            },

            initialize: function(callback){
                this.collection = new ArticleCollection();
                this.activeModel = new ArticleModel();
                this.app = new AppView({
                    "collection":  this.collection,
                    "activeModel": this.activeModel
                });

                this.articleContent = new ArticleContentView(this.activeModel);
                this.articleComment = new ArticleCommentsView(this.activeModel);

                this.collection.once('sync', function(){
                    callback();
                }, this);
                this.collection.fetch();
            },

            index: function() {
                console.log('Index');
                this.showArticle(this.collection.at(0));
            },

            article: function(id) {
                console.log('article '+id);
                this.showArticle(this.collection.get(id));
            },

            showArticle: function(article) {
                if (!article) {
                    this.activeModel.clear();
                    return
                }

                article = article.toJSON();
                this.activeModel.set(article);
            }

        });

        return AppRoute;
    }
);
