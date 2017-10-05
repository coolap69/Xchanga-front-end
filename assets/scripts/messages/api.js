'use strict'

const app = require('../store.js')

const createMessage = function (data) {
  return $.ajax({
    url: app.host + '/messages/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'message': {
        'ad_id': data.ad_id,
        'sender_id': data.sender_id,
        'receiver_id': data.receiver_id,
        'title': data.title,
        'description': data.description
      }
    }
  })
}

const getMessages = function (data) {
  return $.ajax({
    url: app.host + '/messages/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showMessage = function (data) {
  return $.ajax({
    url: app.host + '/messages/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteMessages = function (data) {
  return $.ajax({
    url: app.host + '/messages/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateMessage = function (data) {
  return $.ajax({
    url: app.host + '/messages/',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'message': {
        'ad_id': data.ad_id,
        'sender_id': data.sender_id,
        'receiver_id': data.receiver_id,
        'title': data.title,
        'description': data.description
      }
    }
  })
}

module.exports = {
  createMessage,
  getMessages,
  showMessage,
  deleteMessages,
  updateMessage
}
