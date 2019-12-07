import Axios from 'axios'
const source = 'https://randomfox.ca/floof/'

export const START_GETTING_DATA = 'START_GETTING_DATA'
export const SUCCEED_GETTING_DATA = 'SUCCEED_GETTING_DATA'
export const FAIL_GETTING_DATA = 'FAIL_GETTING_DATA'

export const getData = () => dispatch => {
  dispatch({ type: START_GETTING_DATA })
  Axios.get(source)
    .then( res => {
      console.log(res.data)
      dispatch({ type: SUCCEED_GETTING_DATA, payload: res.data.image })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAIL_GETTING_DATA })
    })
}