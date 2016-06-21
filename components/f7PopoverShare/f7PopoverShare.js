app.angular.component('f7PopoverShare', {

  templateUrl: 'components/f7PopoverShare/f7PopoverShare.html',

  controller: function ($location) {
    console.log('popover share ctrl');
    this.appName = 'Mi App';
    this.msgShare = 'Enlace de interés enviado desde ' + this.appName +': ';
    this.url = $location.absUrl();
  }

});