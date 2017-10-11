const app = require('../app')

const addUser = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const userLogin = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    // headers: {
      // Authorization: 'Token token=' + app.user.token // store.user.token
  // },
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const userLogout = function (id) {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

module.exports = {
  addUser,
  userLogin,
  userLogout,
  passwordReset
}
