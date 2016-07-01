app.angular.component('pagInfiniteScroll', {

  templateUrl: 'app/components/f7Pages/pagInfiniteScroll/pagInfiniteScroll.html',

  controller: function ($scope) {
    var originalList = [];
    var helperList = [];
    var showInitialItems = 20;
    var itemIndex = 0;

    // Simulate original list
    for (var i = 0; i < 100; i++){
      originalList[i] = {name: 'Item '+i, desc: 'desc item '+i};
    }
    // Create helper list to show on screen
    for (var j = 0; j < showInitialItems; j++){
      helperList[j] = originalList[j];
    }
    // Bind helper list to controller scope
    this.helperList = helperList;
    itemIndex = helperList.length;

    // Attach infinite scroll event handler to dom element
    app.f7.attachInfiniteScroll('.infinite-scroll');

    // Handle onInfiniteScroll event
    var self = this;
    $$('.infinite-scroll').on('infinite', function () {
      if(self.helperList.length < originalList.length){
        console.log('itemIndex', itemIndex);
        for (var i = itemIndex; i < itemIndex+showInitialItems; i++){
          self.helperList.push({name: 'Item '+i, desc: 'desc item '+i});
        }
        itemIndex = itemIndex + showInitialItems;
        console.log('item index acutalizado', itemIndex);
        $scope.$apply();
      } else {
        console.log('detach infinite scroll');
        app.f7.detachInfiniteScroll('.infinite-scroll');
      }
    });

  }

});