import React from 'react'
import RepoListItem from './repo_list_item'


const RepoList = (props) => {
  let counter = 0
  const result = props.repositories.filter((repository) =>  {
    repository.name === term //stuck on loading because input is null need a default 
  })
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
