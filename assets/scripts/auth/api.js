'use strict'

const app = require('../store.js')

const create = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'ad': {
        'user_id': data.user_id,
        'product_name': data.product_name,
        'quantity': data.quantity
      }
    }
  })
}

const getAds = function (data) {
  return $.ajax({
    url: app.host + '/ads/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteAds = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'ad': {
        'user_id': data.user_id,
        'product_name': data.product_name,
        'quantity': data.quantity
      }
    }
  })
}

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

module.exports = {
  create,
  signIn,
  changePassword,
  signOut,
  createAd,
  getAds,
  showAd,
  deleteAds,
  updateAd,
  createMessage
}
