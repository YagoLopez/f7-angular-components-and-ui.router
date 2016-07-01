app.angular.component('pagSearchList', {

  templateUrl: 'app/components/f7Pages/pagSearchList/pagSearchList.html',

  controller: function () {

    // The searchbar has to be initialisated by javascript using angular components
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