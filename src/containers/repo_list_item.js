import React from 'react'

const RepoListItem = (props) => {
 props.repository.map((repositorydata) => {
    return (
      console.log(repositorydata.name)
    )
  })
}

export default RepoListItem
