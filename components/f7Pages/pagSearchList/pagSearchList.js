app.angular.component('pagSearchList', {

  templateUrl: 'components/f7Pages/pagSearchList/pagSearchList.html',

  controller: function () {

    // Searchbar initialization
    var mySearchbar = app.f7.searchbar('#mySearchbar', {
      searchList: '#my-list',
      searchIn: '.item-title, .item-text'
    });

    this.cars = [
      {name: 'Audi', hp: '200'},
      {name: 'BMW', hp: '201'},
      {name: 'Volvo', hp: '202'},
      {name: 'Mercedes', hp: '203'},
      {name: 'Renault', hp:'204'}
    ];
  }

});