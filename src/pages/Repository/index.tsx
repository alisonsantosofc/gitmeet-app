import React from 'react';
import { useParams } from 'react-router-dom';

const Repository: React.FunctionComponent = () => {
  const { user, repository } = useParams();

  return (
    <h1>
      Repository: {user}/{repository}
    </h1>
  );
};

export default Repository;
