'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log(data)
  userApi.signUp(data)
    .then(userUi.onSignUpSuccess)
    .catch(userUi.onSingUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.onChangePasswordSuccess)
    .catch(userUi.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
