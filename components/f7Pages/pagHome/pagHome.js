app.angular.component('pagHome', {

  templateUrl: 'components/f7Pages/pagHome/pagHome.html',

  controller: function ($rootScope) {
    console.log('pagHome ctrl');
    this.test = 'test';
    $rootScope.pageClass = 'page-home';
  }

});