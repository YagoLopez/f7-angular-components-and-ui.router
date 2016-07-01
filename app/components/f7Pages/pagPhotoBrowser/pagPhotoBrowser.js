app.angular.component('pagPhotoBrowser', {

  templateUrl: 'app/components/f7Pages/pagPhotoBrowser/pagPhotoBrowser.html',

  controller: function ($scope) {
    var photoBrowserPhotos = [
      {
        url: '/app/img/beach.jpg',
        caption: 'Amazing beach in Goa, India'
      },
      'http://placekitten.com/1024/1024',
      '/app/img/lock.jpg',
      {
        url: '/app/img/monkey.jpg',
        caption: 'I met this monkey in Chinese mountains'
      },
      {
        url: '/app/img/mountains.jpg',
        caption: 'Beautiful mountains in Zhangjiajie, China'
      }
    ];

    var photoBrowserStandalone = app.f7.photoBrowser({
      photos: photoBrowserPhotos
    });
    var photoBrowserPopup = app.f7.photoBrowser({
      photos: photoBrowserPhotos,
      type: 'popup'
    });
    var photoBrowserPage = app.f7.photoBrowser({
      photos: photoBrowserPhotos,
      type: 'page'
    });
    var photoBrowserDark = app.f7.photoBrowser({
      photos: photoBrowserPhotos,
      theme: 'dark'
    });
    var photoBrowserPopupDark = app.f7.photoBrowser({
      photos: photoBrowserPhotos,
      theme: 'dark',
      type: 'popup'
    });
    var photoBrowserLazy = app.f7.photoBrowser({
      photos: photoBrowserPhotos,
      lazyLoading: true,
      theme: 'dark'
    });

    this.photoBrowserStandalone = function () {
      photoBrowserStandalone.open();
    }
    this.photoBrowserPopup = function () {
      photoBrowserPopup.open();
    }
    this.photoBrowserDark = function () {
      photoBrowserDark.open();
    }
    this.photoBrowserPopupDark = function () {
      photoBrowserPopupDark.open();
    }
    this.photoBrowserLazy = function () {
      photoBrowserLazy.open();
    }

  }

});