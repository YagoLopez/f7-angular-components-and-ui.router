app.angular.component('pagVirtualList', {

  templateUrl: 'app/components/f7Pages/pagVirtualList/pagVirtualList.html',

  controller: function () {
    var items = [];

    // Simulate virtual list
    for (var i=0; i < 10000; i++){
      items[i] = {title: 'Item '+i, desc: 'description '+i};
    }

    // Virtual list initialization
    var myList = app.f7.virtualList('#virtuallist', {

      items: items,

      searchAll: function (query, items) {
        var foundItems = [];
        for (var i = 0; i < items.length; i++) {
          // Check if item title contains query string
          if ( items[i].title.toLowerCase().indexOf(query.trim().toLowerCase()) >= 0 ){
            foundItems.push(i);
          };
          // Check if item description contains query string
          if ( items[i].desc.toLowerCase().indexOf(query.trim().toLowerCase()) >= 0 ){
            foundItems.push(i);
          }

        }
        // Return array with indexes of matched items
        return foundItems;
      },

      template:
        '<li class="item-content">' +
        '<div class="item-media"><img src="/app/img/favicon.png" height="40px"></div>' +
        '<div class="item-inner">' +
        '<div class="item-title">' +
        '<div id="title">{{title}}<div>' +
        '<div id="desc" class="desc">{{desc}}</div>'+
        '</div>' +
        '</div>' +
        '</li>'
    });

    // Searchbar initialization
    var mySearchbar = app.f7.searchbar('#mysearchbar', {
      searchList: '#virtuallist',
      notFound: '#notfound',
      removeDiacritics: true
    });

  }

});