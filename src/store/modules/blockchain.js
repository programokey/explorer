import request from 'superagent'

const state = {
  url: 'http://116.62.62.39:46657',
  status: {
    listen_addr: '',
    sync_info: {
      latest_block_height: 0,
      latest_block_hash: ''
    }
  },
  validators: {}
}

const mutations = {
  setUrl (state, value) {
    state.url = value
  },
  getStatus (state) {
    request.get(state.url + '/status').end((err, res) => {
      if (err) {
        console.log('err', err)
      }
      state.status = res.body.result
    })
  },
  getValidators (state) {
    request.get(state.url + '/net_info').end((err, res) => {
      if (err) console.error(err)
      state.validators = res.body.result.peers
    })
  }
}

export default {
  state,
  mutations
}
