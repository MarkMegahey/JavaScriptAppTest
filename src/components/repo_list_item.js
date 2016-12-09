import React from 'react'

const RepoListItem = (props) => {
  const repositoryItems = props.repository.map((repositorydata) => {
    return (
      console.log(repositorydata.name)
    )
  })
}

export default RepoListItem
