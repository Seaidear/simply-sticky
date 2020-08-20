function initCookieBanner() {
  const showCookieAlert = () => {
    const template = `
      <div id="cookie-info" class="cookie-banner animate__animated animate__fadeIn">
        <div class="cookie-banner__content">
          <div class="cookie-banner__text">This website uses cookies. If you continue to use the website, we assume your consent.</div>
          <div class="cookie-banner__buttons">
            <button id="accept-cookies" class="btn-small">Continue</button>
            <a class="btn-flat modal-trigger" href="#privacy-modal">Info</a>
          </div>
        </div>
      </div>`;

    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.padding = '0 1.5rem';
    wrapper.style.bottom = 0;
    wrapper.style.left = 0;
    wrapper.style.width = '100%';
    wrapper.style.zIndex = 998;
    wrapper.style.textAlign = 'center';
    wrapper.innerHTML = template;
    document.body.appendChild(wrapper);

    const setCookie = (cookieName, cookieValue, expirationDays) => {
      const date = new Date();
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
      document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
    };

    document.addEventListener('click', (e) => {
      if (e.target.id === 'accept-cookies') {
        setCookie('cookies-accepted', '1', 365 * 5);
        document.querySelector('#cookie-info').style.display = 'none';
      }
    });
  };

  const checkCookie = () => {
    const getCookie = (cookieName) => {
      const allStoredCookies = document.cookie.split('; ');
      const foundCookie = allStoredCookies.filter((cookie) =>
        cookie.split('=').includes(cookieName),
      )[0];
      return foundCookie;
    };

    !getCookie('cookies-accepted') && setTimeout(showCookieAlert, 1000);
  };

  window.addEventListener('load', checkCookie);
}

export default initCookieBanner;

export const getCookie = (cookieName) => {
  const allStoredCookies = document.cookie.split('; ');
  const foundCookie = allStoredCookies.filter((cookie) =>
    cookie.split('=').includes(cookieName),
  )[0];
  return foundCookie;
};

export const checkCookies = (cookieName) => {
  return getCookie(cookieName) ? true : false;
};

export const setCookie = (cookieName, cookieValue, expirationDays) => {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
};
