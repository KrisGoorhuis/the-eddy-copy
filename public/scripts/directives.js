(function() {
   var app = angular.module('myDirectives', []);
   
   app.directive('photoBrowser', function() {
      return {
         restrict: 'E',
         templateUrl:'/public/html/photo-browser.html'
      };
   });
})();

