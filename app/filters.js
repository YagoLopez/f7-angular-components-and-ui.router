app.angular.filter('encodeString', function($window) {
  return $window.encodeURIComponent;
});
// =====================================================================================================================
app.angular.filter('FiltroHtml', ['$sce', function($sce) {
  return function(value, type) {
    return $sce.trustAs(type || 'html', value);
  }
}]);
// =====================================================================================================================
app.angular.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
  }
});
