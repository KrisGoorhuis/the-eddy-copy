(function() {
   var app = angular.module('photoGallery', []);
   
   app.controller('PhotoGalleryController', function() {
      this.browserIsOpen = false; // TODO: set to false when finished
      this.imageOffset = 29; // vw's
      this.imageIndex;
      
      this.images = [
         '/public/images/food1.jpeg',
         '/public/images/food2.jpeg',
         '/public/images/food3.jpg',
         '/public/images/food4.jpeg',
         '/public/images/food5.jpeg',
         '/public/images/food6.jpeg',
         '/public/images/food7.jpeg',
         '/public/images/food8.jpeg',
         '/public/images/food9.jpeg',
         '/public/images/food10.jpg',
         '/public/images/food11.jpg',
         '/public/images/food12.jpeg'
      ];
      
      this.openBrowserToSelection = function(index) {
         if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false ) { // Use desktop photo browser - haven't made it work on mobile.
            this.browserIsOpen = true;
            this.imageOffset = (29 - (44*index));
            this.imageIndex = index;
            
         } else {
            $('#image-' + index).css('height', '100%');
           // $('#image-' + index).css()
         }
         
         
         $('#photoBrowser').hide().fadeIn(300); // It doesn't fade in if it's not fading in from a hidden state. Which ng-show=false doesn't count as, I guess. So .hide()!
         $('#galleryContainer').css('pointer-events', 'none');
         $('#photoLineupContainer').css('left', this.imageOffset + "vw");
      };
      
      this.checkBrowserOpen = function() {
         return this.browserIsOpen;
      };
      
      this.moveLeft = function() { // TODO: make it smooth scrolling
         if (this.imageIndex > 0) {
            $('#photoLineupContainer').css('left', this.imageOffset + 44 + "vw");
            this.imageOffset += 44;
            this.imageIndex--;
         };
      };  
      this.moveRight = function() {
         if (this.imageIndex < this.images.length-1) {
            $('#photoLineupContainer').css('left', this.imageOffset - 44 + "vw");
            this.imageOffset -= 44;
            this.imageIndex++;
         };    
         console.log(this.imageOffset - 44 + "vw");
         console.log(this.imageIndex);
      };
      
      this.closeBrowser = function() {
         $('#galleryContainer').css('pointer-events', 'auto');
         $('#photoBrowser').fadeOut(300, function() {
            this.browserIsOpen = false;
         }); 
      };
      
   });
 
})();
