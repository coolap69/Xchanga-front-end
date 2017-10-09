'use strict'

const signIn = function () {
  $(() => {
    console.log('in the beginning')
    $('.hidename').children().hide()
    console.log('Log in')
  })
}

const signUp = function () {
  $(() => {
    console.log('in the beginning')
    $('.hidename').children().hide()
    console.log('Sucess')
  })
}

const hideGame = function () {
  $(() => {
    console.log('in the beginning')
    $('.game').children().show()
    console.log('Success')
  })
}

module.exports = {
  signIn,
  signUp,
  hideGame
}
