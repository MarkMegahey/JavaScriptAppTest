export default function() {
  const url = 'https://api.github.com/repositories'
  Axios.get(url)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}
