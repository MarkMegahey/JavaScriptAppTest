  import { SEARCH_REPOSITORIES } from '../actions/search_action'
  import { FETCH_REPOSITORIES } from '../actions/fetch_action'

  export default function(state = [], action) {
  switch (action.type) {
  case SEARCH_REPOSITORIES:
    return [ action.payload.data ]
  case FETCH_REPOSITORIES:
    return [ action.payload.data ]
  }
  return state
}
