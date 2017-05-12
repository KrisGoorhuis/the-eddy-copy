(function() {
   var app = angular.module('myApp', ['photoGallery', 'myDirectives']);
   
})();


$(document).ready(function() {

   function resizeNavMargin() {
      var windowHeight = $(window).height();
      var newMarginTop = windowHeight-120;
      $('#topNav').css('margin-top', newMarginTop + "px");
   }
   
   resizeNavMargin();
   
   $(window).on('resize', function() {
      resizeNavMargin();
   });
   
   
   // Nav controls
   var scrollSpeed = 500;
   
   $('#hoursLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#schedule').offset().top
      }, scrollSpeed);
   });
   $('#reservationsLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#reservations').offset().top
      }, scrollSpeed);
   });
   $('#menusLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#menus').offset().top
      }, scrollSpeed);
   });
  
   $('#aboutLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#theRestaurant').offset().top
      });
   });
   $('#contactLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#contact').offset().top
      });
   });
    
   $('#AboutLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $().offset().top
      });
   });
   $('#pressLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#press').offset().top
      });
   });
   $('#galleryLink').on('click', function() {
      $('html, body').animate({
         scrollTop: $('#photoGallery').offset().top
      });
   });
   
   
   // Menu popup controls
   $('#dinner').on('click', function() {
      $('body').css('overflow', 'hidden');
      $('#menusPopout').css('display', 'flex');
      $('#foodButton').css('border-bottom', '1px solid black');
      $('#entireDinnerMenu').css('display', 'flex');
      $('#entireDrinksMenu').css('display', 'none');
   });
   $('#drinks').on('click', function() {
      $('body').css('overflow', 'hidden');
      $('#menusPopout').css('display', 'flex');
      $('#drinksButton').css('border-bottom', '1px solid black');
      $('#foodSubmenus').css('display', 'none');
      $('#drinksSubmenus').css('display', 'flex');
      $('#entireDinnerMenu').css('display', 'none');
      $('#entireDrinksMenu').css('display', 'flex');
   });
   
   $('#closeMenus').on('click', function() {
      $('body').css('overflow', 'auto');
      $('#menusPopout').css('display', 'none');
      $('#foodButton').css('border-bottom', 'none');
      $('#drinksButton').css('border-bottom', 'none');
   });
   
   $('#foodButton').on('click', function() {
      $('#foodButton').css('border-bottom', '1px solid black');
      $('#drinksButton').css('border-bottom', 'none');
      $('#foodSubmenus').css('display', 'flex');
      $('#drinksSubmenus').css('display', 'none');
      $('#entireDinnerMenu').css('display', 'flex');
      $('#entireDrinksMenu').css('display', 'none');
   });
   $('#drinksButton').on('click', function() {
      $('#foodButton').css('border-bottom', 'none');
      $('#drinksButton').css('border-bottom', '1px solid black');
      $('#foodSubmenus').css('display', 'none');
      $('#drinksSubmenus').css('display', 'flex');
      $('#entireDinnerMenu').css('display', 'none');
      $('#entireDrinksMenu').css('display', 'flex');
   });
   
   $('#aLaCarte').on('click', function() {
      $('#aLaCarte').css('border-bottom', '1px solid black');
      $('#tastingMenu').css('border-bottom', 'none');
      $('#aLaCarteMenuPage').css('display', 'flex');
      $('#tastingMenuPage').css('display', 'none');
   });
   $('#tastingMenu').on('click', function() {
      $('#aLaCarte').css('border-bottom', 'none');
      $('#tastingMenu').css('border-bottom', '1px solid black');
      $('#aLaCarteMenuPage').css('display', 'none');
      $('#tastingMenuPage').css('display', 'flex');
   });
   
   $('#cocktails').on('click', function() {
      $('#cocktails').css('border-bottom', '1px solid black');
      $('#wine').css('border-bottom', 'none');
      $('#cocktailsMenuPage').css('display', 'flex');
      $('#wineMenuPage').css('display', 'none');
   });
   $('#wine').on('click', function() {
      $('#cocktails').css('border-bottom', 'none');
      $('#wine').css('border-bottom', '1px solid black');
      $('#cocktailsMenuPage').css('display', 'none');
      $('#wineMenuPage').css('display', 'flex');
   });
   
   // Photo browser
   $('#photoBrowser').on('click', function() {
      
   });
   
   
});