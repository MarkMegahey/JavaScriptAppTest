import React, { Component } from 'react'
import { connect } from 'react-redux'

class RepoList extends Component {
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.searchrepo.map((itemData) => {
            {itemData.items.map((data) => {
              return(
                console.log(data.name)
              )
            })}
          })}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({searchrepo}) {
  return { searchrepo }
}

export default connect(mapStateToProps)(RepoList)
