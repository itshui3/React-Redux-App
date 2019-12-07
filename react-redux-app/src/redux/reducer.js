import {
  START_GETTING_DATA,
  SUCCEED_GETTING_DATA,
  FAIL_GETTING_DATA
} from './actions'

const initialState = {
  data: '',
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case START_GETTING_DATA:
      return {
        ...state,
        isFetching: true
      }
    case SUCCEED_GETTING_DATA:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FAIL_GETTING_DATA:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}