//url for public repositories
const PUBLIC_URL = `https://api.github.com/repositories`

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES'

export function fetchRepositories(name) {
  const url = `${PUBLIC_URL}`
  const request = axios.get(url)

  return {
    type: FETCH_REPOSITORIES,
    payload: request
  }
}
