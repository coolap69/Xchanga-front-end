'use strict'

const messagesApi = require('./api.js')
const messagesUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateMessage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  messagesApi.createMessage(data)
    .then(messagesUi.onCreateMessageSuccess)
    .catch(messagesUi.onCreateMessageFailure)
}

const onGetMessage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  messagesApi.getMessage(data)
    .then(messagesUi.onGetMessageSuccess)
    .catch(messagesUi.onGetMessageFailure)
}

const onShowMessage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  messagesApi.showMessage(data)
    .then(messagesUi.onShowMessageSuccess)
    .catch(messagesUi.onShowMessageFailure)
}

const onDeleteMessages = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  messagesApi.deleteMessages(data)
    .then(messagesUi.onDeleteMessagesSuccess)
    .catch(messagesUi.onDeleteMessagesFailure)
}

const onUpdateMessage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  messagesApi.updateMessage(data)
    .then(messagesUi.onUpdateMessagesSuccess)
    .catch(messagesUi.onUpdateMessagesFailure)
}

module.exports = {
  onCreateMessage,
  onGetMessage,
  onShowMessage,
  onDeleteMessages,
  onUpdateMessage
}
