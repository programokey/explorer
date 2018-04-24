import axios from 'axios'

const state = {
  url: 'http://116.62.62.39:46657',
  status: {
    listen_addr: '',
    sync_info: {
      latest_block_height: 0,
      latest_block_hash: ''
    }
  },
  validators: []
}

const mutations = {
  setUrl (state, value) {
    state.url = value
  },
  async getStatus (state) {
    let json = await axios.get(`${state.url}/status`)
    // console.log('blockchain', json.data)
    state.status = json.data.result
  },
  async getValidators (state) {
    let json = await axios.get(`${state.url}/net_info`)
    // console.log('validators', json.data)
    state.validators = json.data.result.peers
  }
}

export default {
  state,
  mutations
}
