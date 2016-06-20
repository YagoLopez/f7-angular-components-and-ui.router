app.angular.component('f7PanelLeft', {

  templateUrl: 'components/f7PanelLeft/f7PanelLeft.html',

  controller: function () {

    // detects if browsing in mobile device or desktop
    this.device = app.f7.device.os;

    this.openMyModal = function(){
      app.f7.alert('Content', 'Title');
    };

  }

});