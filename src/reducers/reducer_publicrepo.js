  import { FETCH_REPOSITORIES } from '../actions/fetch_action'

  export default function(state = [], action) {
  switch (action.type) {
  case FETCH_REPOSITORIES:
    return [ action.payload.data ]
  }
  return state
}
