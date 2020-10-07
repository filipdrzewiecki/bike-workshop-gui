export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return { token: localStorage.getItem("token") };
  }
}

export function getUserName() {
  return localStorage.getItem('userName');;
}


