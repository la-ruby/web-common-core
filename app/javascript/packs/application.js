// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import React from 'react'
import ReactDOM from 'react-dom'

// Make $ available on the window object
// for SJR views and jQuery plugins
// that may expect `$` to be globally available.
require('expose-loader?$!jquery')

// js
import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all";

//css
import '../stylesheets/application'

import ExampleTimer from '../components/example_todo'

// https://stackoverflow.com/a/44739914
// ...if this is included in your application.js, then any page with a #whatever element will get the component.
document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById("component-10aaaf7");
  if (element) {
    ReactDOM.render(<ExampleTodo name="example" />, element)
  }
})

