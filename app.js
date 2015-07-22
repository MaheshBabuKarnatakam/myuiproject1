(function(){
    var app=angular.module('store',[]);
    app.controller('StoreController',function(){
        this.product=gem;
    });
    var gem={
    name:"kohinoor",
    price:2.95,
      description:'not a gem'  
    }
})();

