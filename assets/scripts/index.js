'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#signUp').on('submit', event.onSignUp)
  $('#signIn').on('submit', event.onSignIn)
  $('#change-password').on('submit', event.onChangePassword)
  $('#signOut').on('submit', event.onSignOut)
  // $('#postButton').on('click', event.onCreatePost)
  // $('#postButton').on('click', event.onGetService)
  // $('#deleteButton').on('submit', accountEvents.onDeletePost)//
})
