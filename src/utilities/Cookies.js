export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

export function setCookie(cname, cvalue, exdays = 0) {
    let expires = "";
    if (exdays != 0) {
        var d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        expires = `expires=${d.toUTCString()};`;
    }
    document.cookie = `${cname}=${cvalue};${expires}`;
  };

export function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}