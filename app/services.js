app.angular.service('Error', function(){

  this.mostrar = function(resp){
    app.f7.hidePreloader();
    msg = 'CODIGO: '+resp.status+'<br>'+resp.statusText;
    if(resp.status == -1)
      msg = msg + 'Posibles causas:<br>1) No conexion datos<br>2) Fallo servidor remoto<br>' +
        '3) Configuracion de seguridad restrictiva en IExplorer<br><br>';
    app.f7.alert(msg, 'Error');
    console.error(resp);
  };

  this.mostrar2 = function(txtExcepcion){
    app.f7.hidePreloader();
    app.f7.alert('<div style="overflow:auto">'+txtExcepcion+'<br><br></div>', 'Error');
  };

  this.mostrar3 = function(txtExcepcion){
    app.f7.hidePreloader();
    window.alert(txtExcepcion);
  };
});
// =====================================================================================================================
app.angular.constant('C', {
  CONSTANT1: 'constant1',
  CONSTANT2: 'constant2',
  STRINGS: {
    LOADING_ICON: '<img src="img/3.gif" style="vertical-align: middle"/>',
    TXT_LOADING_DETALLE: '<img src="img/3.gif" style="vertical-align: middle"/>' + ' Obteniendo datos... ',
    TXT_PRELOADER: '<span style="font-size:small">Cargando datos. Espere, por favor...</span>'
  }
});
