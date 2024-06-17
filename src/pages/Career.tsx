import React from 'react';
import CardList from '../components/CardList';

const Career: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <CardList />
    </div>
  );
};

export default Career;
