'use strict'

const app = require('../store.js')
const hide = require('./hide.js')

const onSignUpSuccess = (data) => {
  hide.signUp()
  console.log('You successfully created an account')
  app.user = data.user
}

const onSignUpFailure = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  // hide.signIn()
  // hide.hideGame()
  console.log('You successfully sign in')
  app.user = data.user
}

const onSignInFailure = function (response) {
  console.error(response)
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
}

const onChangePasswordFailure = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
}

const onSignOutFailure = function (response) {
  console.log(response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
