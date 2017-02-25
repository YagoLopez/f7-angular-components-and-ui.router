//todo: url router html5 mode

var app = {};
var $$ = Dom7;

app.f7 = new Framework7({
    router: false,
    animatePages: false,
    material: true,
    materialRipple: false,
    materialPageLoadDelay: 1110,
    swipePanel: 'left',
    swipePanelActiveArea: 500,
    swipePanelThreshold: 10,
    swipePanelNoFollow: true,
    activeState: true,
    fastClicks: true,
    pushState: false,
    sortable: false,
    cache: false,
    modalButtonCancel: 'Cancelar',
    dynamicNavbar: false,
    materialPreloaderHtml: '<div style="text-align:center"><img src="../img/9.gif" width="25"></div>',
    materialPreloaderSvg: '',
    materialRippleElements: '',
    scrollTopOnNavbarClick: true,
    uniqueHistory: false,
    preloadPreviousPage: false,
    swipeoutNoFollow: true
    //activeStateElements: '',
    //pushStateSeparator: '#!'
});

//Main view creation
//var mainView = app.f7.addView( '.view-main', {domCache: true} );

app.angular = angular.module('app', ['ngRoute', 'ui.router']);

app.angular.config( function($provide, $compileProvider, $httpProvider, $stateProvider, $routeProvider, $logProvider,
  $locationProvider) {

  $stateProvider.state(
    '/', {
      url:'/',
      template: '<pag-home></pag-home>'
    });
  $stateProvider.state(
    'listPage', {
      url:'/listPage',
      template: '<pag-search-list></pag-search-list>'
    });
  $stateProvider.state(
    'helpPage', {
      url:'/helpPage',
      template: '<pag-help></pag-help>'
    });
  $stateProvider.state(
    'tabsPage', {
      url:'/tabsPage',
      template: '<pag-tabs></pag-tabs>'
    });
  $stateProvider.state(
    'pagSwiper', {
      url:'/swiperPage',
      template: '<pag-swiper></pag-swiper>'
    });
  $stateProvider.state(
    'pagLazyLoad', {
      url:'/pagLazyLoad',
      template: '<pag-lazy-load></pag-lazy-load>'
    });
  $stateProvider.state(
    'pagVirtualList', {
      url:'/pagVirtualList',
      template: '<pag-virtual-list></pag-virtual-list>'
    });
  $stateProvider.state(
    'pagInfiniteScroll', {
      url:'/pagInfiniteScroll',
      template: '<pag-infinite-scroll></pag-infinite-scroll>'
    });
  $stateProvider.state(
    'pagPhotoBrowser', {
      url:'/pagPhotoBrowser',
      template: '<pag-photo-browser></pag-photo-browser>'
    });
  $stateProvider.state(
    'pagGrid', {
      url:'/pagGrid',
      template: '<pag-grid></pag-grid>'
    });

  $routeProvider.otherwise({redirectTo: '/'});

  $compileProvider.debugInfoEnabled(false);
  $httpProvider.useApplyAsync(true);
  $logProvider.debugEnabled(true);

  $provide.decorator('$exceptionHandler', function($log, $delegate, Error) {
    return function(exception, cause) {
      $log.debug('Manejador de excepciones de la aplicacion');
      $delegate(exception, cause);
      Error.mostrar2(exception);
    };
  });
});

app.angular.run(function() {
  // init code
});

