'use strict'

const adsApi = require('./api.js')
const adsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAd = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  adsApi.createAd(data)
    .then(adsUi.onCreateAdSuccess)
    .catch(adsUi.onCreateAdFailure)
}

const onGetAds = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  adsApi.getAds(data)
    .then(adsUi.onGetAdsSuccess)
    .catch(adsUi.onGetAdsFailure)
}

const onShowAd = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  adsApi.showAd(data)
    .then(adsUi.onShowAdSuccess)
    .catch(adsUi.onShowAdFailure)
}

const onDeleteAds = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  adsApi.deleteAds(data)
    .then(adsUi.onDeleteAdsSuccess)
    .catch(adsUi.onDeleteAdsFailure)
}

const onUpdateAd = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  adsApi.updateAd(data)
    .then(adsUi.onUpdateAdSuccess)
    .catch(adsUi.onUpdateAdFailure)
}

module.exports = {
  onCreateAd,
  onGetAds,
  onShowAd,
  onDeleteAds,
  onUpdateAd
}
