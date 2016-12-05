import React from 'react';
import RepoListItem from './repo_list_item';

const RepoList = (props) => {
  const repositoryItems = props.data.map((repository) => {
    return <RepoListItem repository={repository} />
  });

  return (
    <ul className="col-md-8 list-group">
      {repositoryItems}
    </ul>
  );
};

export default RepoList;
