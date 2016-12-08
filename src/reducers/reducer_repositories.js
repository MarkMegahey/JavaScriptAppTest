//Npm Installed
import Axios from 'axios'
// Created Containers/Conponents/Reducers

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
