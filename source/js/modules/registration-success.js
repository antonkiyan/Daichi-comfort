(function () {
  var desktopMessage = document.querySelector('.registration-success__desktop-message');
  var appLinkIos = document.querySelector('.registration-success__app-link--ios');
  var appLinkAndroid = document.querySelector('.registration-success__app-link--android');

  if (!appLinkIos) {
    return;
  }

  if (device.desktop()) {
    appLinkIos.style.display = 'none';
    appLinkAndroid.style.display = 'none';
  }

  if (device.ios() && !device.desktop()) {
    appLinkAndroid.style.display = 'none';
    desktopMessage.style.display = 'none';
  }

  if (device.android()) {
    appLinkIos.style.display = 'none';
    desktopMessage.style.display = 'none';
  }
})();
