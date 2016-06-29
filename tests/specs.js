//todo: test angular components (use $componentController)

/*
describe('Tests unitarios', function () {

    beforeEach(module('app'));
    //beforeEach(inject(function(Service_name) {
    //    service_name  = Service_name;
    //}));

    it('- Test f7List component list length', function () {
      expect(true).toBe(true);
    });


});
*/

describe('Project Test Suite', function () {

  var ctrl, scope;

  beforeEach(module('app'));

  describe('Component: pagInfiniteScroll', function () {
    beforeEach(inject(function ($rootScope, $componentController) {
      scope = $rootScope.$new();
      ctrl  = $componentController('pagInfiniteScroll', {$scope: scope});
    }));

    it('Array helperList is defined', function () {
      expect(ctrl.helperList).toBeDefined();
    });

    it('Length of helperList is 20', function(){
      expect(ctrl.helperList.length).toEqual(20);
    })
  });

});