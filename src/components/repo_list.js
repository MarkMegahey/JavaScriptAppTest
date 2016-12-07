import React from 'react'
import RepoListItem from './repo_list_item'


const RepoList = (props) => {
  let counter = 0
  const result = probs.repositories.filter((repository) => ) {
    repository.name === //SearchBar Input
  }
  const repositoryItems =  result.map((repository) => { //result mapped to the repositoryItems 
    counter++
    return <RepoListItem key={counter} repository={repository} />
  })

  return (
    <ul className="col-md-12 list-group">
      {repositoryItems}
    </ul>
  )
}

export default RepoList
