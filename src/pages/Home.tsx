import React, { useState, useEffect } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return count;
};

const Home: React.FC = () => {
  const count = useCounter();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>
    </div>
  );
};

export default Home;
