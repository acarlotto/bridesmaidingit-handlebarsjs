'use strict'

const app = require('../app.js')

const onSignupSuccess = function () {
  console.log('Signup Successful!')
}

const onSignupFailure = (error) => {
  if (error.status === 401) {
    // console.log(error)
    console.log('There was problem signing up, please try again!')
  } else {
    console.log('There was problem signing up, please try again!***')
  }
}

const onSigninSuccess = function (data) {
  app.user = data.user
  console.log('sign in successful')
  console.log(app)
  $('#message').show()
}

// const onSigninFailure = function (error) {
  // console.log('Sign in failed')
// }

const onSigninFailure = (error) => {
  if (error.status === 401) {
    console.log('Invalid username or password.')
  } else {
    // displayErrorMessage()
  }
}

const onLogoutSuccess = function (app) {
  console.log('sign-out successful')
}

const onLogoutFailure = function () {
  console.log('error signing out')
}

const onSuccessGetEvent = function (data) {
  console.log(app.user.id)
  console.table(data.events)
}

const onSuccessGetUserEvent = function (data) {
  console.log(app.user.id)
  console.table(data.evnets)
}

const onFailureGetUserEvent = function (data) {
  console.log('failure')
}

const getAllEvents = function (data) {
  app.user.events = data.events
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onSuccessGetEvent,
  onSuccessGetUserEvent,
  onFailureGetUserEvent,
  getAllEvents
}
