// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("../stylesheets/application.scss")
import "jquery"
import '@doabit/semantic-ui-sass'
// import '@doabit/semantic-ui-sass/src/scss/semantic-ui.scss'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).ready(function () {
  console.log('hello world');
  $('h1').css('color', 'red');
});

$(document).on('turbolinks:load', function () {
  $('.ui.dropdown').dropdown();
})