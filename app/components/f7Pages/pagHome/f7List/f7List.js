app.angular.component('f7List', {

  templateUrl: '../app/components/f7Pages/pagHome/f7List/f7List.html',

  controller: function () {

    this.list = [
      {ciudad: 'Madrid', pais: 'España', temperatura: 30},
      {ciudad: 'Bilbao', pais: 'España', temperatura: 20},
      {ciudad: 'Nueva York', pais: 'Estados Unidos', temperatura: 22},
      {ciudad: 'París', pais: 'Francia', temperatura: 21}
    ];

    this.dialog = function (city, temperatura) {
      var content = city + ' ' + temperatura + 'º';
      app.f7.alert(content, 'Title');
    }
  }

});