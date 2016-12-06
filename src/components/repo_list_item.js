import React from 'react'

const RepoListItem = (props) => {
  return <li> {props.repository.full_name} </li>
}

export default RepoListItem
