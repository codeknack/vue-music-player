import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Player from './Player.vue'

import {Howl, Howler} from 'howler'

Vue.use(Vuetify)

Vue.filter('numbers', (value) => {
  let number = value + 1
  if (number < 10) {
    return "0" + number + "."
  } 
  return number + "."
})

Vue.filter('minutes', (value) => {
  if (!value || typeof value !== "number") return "00:00"
  let min = parseInt(value / 60),
      sec = parseInt(value % 60)
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec
  value = min + ":" + sec
  return value
})

new Vue({
  el: '#app',
  render: h => h(Player)
})