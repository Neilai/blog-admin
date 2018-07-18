/**
 * Created by Neil
 * 2018-03-20 11:24
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'
Vue.use(Vuex);

const state = {
  token: window.sessionStorage.getItem('token'),
};

const mutations = {
  login (state,payload) {
    state.token=payload
    window.sessionStorage.setItem('token',state.token);
  },
  logout(state){
    state.token="";
    window.sessionStorage.removeItem('token');
  },
};


export default new Vuex.Store({
  state,
  mutations,
});
