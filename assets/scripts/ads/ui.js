'use strict'

const onCreateAdSuccess = function (data) {
  console.log('You created an Ad')
  console.log(data)
  // app.game = data.game
  // app.game.id = data.game.id
  // $('#password-success').hide()
}

const onCreateAdFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onGetAdsSuccess = function (data) {
  console.log('You got an Ad')
  console.log(data)
}

const onGetAdsFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onShowAdSuccess = function (data) {
  console.log('You showing an Ad')
  console.log(data)
}

const onShowAdFailure = function (response) {
  console.log(response)
  console.log('err')
}

const ondeleteAdsSuccess = function (data) {
  console.log('You deleting Ads')
  console.log(data)
}

const ondeleteAdsFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onupdateAdSuccess = function (data) {
  console.log('You deleting an Ad')
  console.log(data)
}

const onupdateAdFailure = function (response) {
  console.log(response)
  console.log('err')
}

module.exports = {
  onCreateAdSuccess,
  onCreateAdFailure,
  onGetAdsSuccess,
  onGetAdsFailure,
  onShowAdSuccess,
  onShowAdFailure,
  ondeleteAdsSuccess,
  ondeleteAdsFailure,
  onupdateAdSuccess,
  onupdateAdFailure
}
