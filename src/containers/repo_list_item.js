//Npm Installed
import React from 'react'
// Created Containers/Conponents/Reducers

const RepoListItem = (props) => {
  return (
      <li className="list-group-item">
        <div className="repo_list">
          <div>
              <h2>{props.repository.name}</h2>
            <br />
              FullName: {props.repository.full_name}
            <br />
              Description: {props.repository.description}
          </div>
        </div>
      </li>
  )
}

export default RepoListItem
