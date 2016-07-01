app.angular.component('pagSwiper', {

  templateUrl: 'app/components/f7Pages/pagSwiper/pagSwiper.html',

  controller: function () {

    app.f7.swiper('.swiper-container', {
      preloadImages: false,
      lazyLoading: false,
      pagination: '.swiper-pagination',
      paginationHide: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });

  }

});