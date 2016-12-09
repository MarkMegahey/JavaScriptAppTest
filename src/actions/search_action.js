import axios from 'axios'
//url for searching github
const SEARCH_URL =`https://api.github.com/search/repositories`

export const SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES'

export function searchRepositories(name) {
  const url = `${SEARCH_URL}?q=${name}&order=desc`
  const request = axios.get(url)

  return {
    type: SEARCH_REPOSITORIES,
    payload: request
  }
}
