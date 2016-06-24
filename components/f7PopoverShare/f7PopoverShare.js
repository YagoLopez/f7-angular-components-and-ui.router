app.angular.component('f7PopoverShare', {

  templateUrl: 'components/f7PopoverShare/f7PopoverShare.html',

  controller: function ($location) {
    var appName = 'Mi App';
    var msgShare = 'Enlace de interés enviado desde ' + appName +': ';
    var urlApp = $location.absUrl();

    this.twitter = 'http://twitter.com/share?url='+ urlApp +'&text='+ msgShare;
    this.gPlus = 'https://plus.google.com/share?url='+ urlApp;
    this.facebook = 'http://www.facebook.com/sharer/sharer.php?u='+ urlApp;
    this.linkedin = 'http://www.linkedin.com/shareArticle?mini=true&url='+urlApp+'&title='+msgShare+'&source='+appName;
    this.mail = 'mailto:?subject=Enlace compartido&body='+ msgShare +urlApp;
  }

});