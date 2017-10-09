'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authevents = require('./auth/events.js')
const adevents = require('./ads/events.js')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#signUp').on('submit', authevents.onSignUp)

  $('#signIn').on('submit', authevents.onSignIn)
  $('#changePassword').on('submit', authevents.onChangePassword)
  $('#signOut').on('submit', authevents.onSignOut)
  $('#create').on('submit', adevents.onCreateAd)
  $('#get').on('submit', adevents.onGetAds)
  $('#show').on('submit', adevents.onShowAd)
  $('#delete').on('submit', adevents.onDeleteAds)
  $('#update').on('submit', adevents.onUpdateAd)

  // $('.hidename').children().hide()
  // $('#postButton').on('click', event.onGetService)
  // $('#deleteButton').on('submit', accountEvents.onDeletePost)//
})
