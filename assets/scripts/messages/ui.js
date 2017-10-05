'use strict'

const onCreateMessageSuccess = function (data) {
  console.log('You created an Message')
  console.log(data)
  // app.game = data.game
  // app.game.id = data.game.id
  // $('#password-success').hide()
}

const onCreateMessageFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onGetMessagesSuccess = function (data) {
  console.log('You got a Message')
  console.log(data)
}

const onGetMessagesFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onShowMessageSuccess = function (data) {
  console.log('You showing Message')
  console.log(data)
}

const onShowMessageFailure = function (response) {
  console.log(response)
  console.log('err')
}

const ondeleteMessagesSuccess = function (data) {
  console.log('You deleting an Adz')
  console.log(data)
}

const ondeleteMessagesFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onupdateMessageSuccess = function (data) {
  console.log('You deleting Messages')
  console.log(data)
}

const onupdateMessageFailure = function (response) {
  console.log(response)
  console.log('err')
}

module.exports = {
  onCreateMessageSuccess,
  onCreateMessageFailure,
  onGetMessagesSuccess,
  onGetMessagesFailure,
  onShowMessageSuccess,
  onShowMessageFailure,
  ondeleteMessagesSuccess,
  ondeleteMessagesFailure,
  onupdateMessageSuccess,
  onupdateMessageFailure
}
