(function () {
  var form = document.querySelector('.registration-end__form');

  if (!form) {
    return;
  }

  var passLabel = document.querySelectorAll('.registration-end__form label')[0];
  var confirmPassLabel = document.querySelectorAll('.registration-end__form label')[1];
  var passInput = passLabel.querySelector('input');
  var confirmPassInput = confirmPassLabel.querySelector('input');
  var error = document.querySelector('.registration-end__error-message');
  var submit = form.querySelector('.registration-end__submit');

  var ERROR_MESSAGE = 'Введённые пароли не совпадают';

  var isCorrect = function () {
    return passInput.value !== ''
      && confirmPassInput.value !== ''
      && passInput.value === confirmPassInput.value;
  };

  var setError = function (item) {
    if (!item.classList.contains('js--wrong')) {
      item.classList.add('js--wrong');
    }
  };

  var removeError = function (item) {
    if (item.classList.contains('js--wrong')) {
      item.classList.remove('js--wrong');
    }
  };

  var renderMessage = function () {
    error.textContent = ERROR_MESSAGE;
    setError(confirmPassLabel);
  };

  var removeMessage = function () {
    error.textContent = '';
    removeError(confirmPassLabel);
  };

  var disableButton = function () {
    if (!submit.hasAttribute('disabled')) {
      submit.setAttribute('disabled', '');
    }
  };

  var enableButton = function () {
    if (submit.hasAttribute('disabled')) {
      submit.removeAttribute('disabled');
    }
  };

  var onSubmit = function (evt) {
    evt.preventDefault();

    if (passInput.value === '') {
      setError(passLabel);
      disableButton();
    }

    if (confirmPassInput.value === '') {
      setError(confirmPassLabel);
      disableButton();
    }

    if (passInput.value !== confirmPassInput.value) {
      renderMessage();
      disableButton();
    }

    if (isCorrect()) {
      form.submit();
    }
  };

  var onInput = function (evt) {
    var target = evt.target;

    if (error.textContent !== '') {
      removeMessage();
    }

    if (target.value !== '') {
      removeError(target.parentNode);
    }

    // if (passInput.value === confirmPassInput.value) {
    //   removeMessage();
    // }

    if (passInput.value !== '' && confirmPassInput.value !== '') {
      enableButton();
    }
  };

  passInput.addEventListener('input', onInput);
  confirmPassInput.addEventListener('input', onInput);
  form.addEventListener('submit', onSubmit);
})();

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
