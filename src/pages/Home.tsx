import { Button } from 'antd';
import { useState, useEffect } from 'react';

const MOCK_HTML_STRING = '<p>This is some <strong>HTML content</strong>.</p>';

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  }, []);

  const handleClick = () => {
    setCounter(0);
  };

  return (
    <div>
      <p>This is the home page.</p>

      <Button onClick={handleClick}>Reset Count</Button>
      <p>Count: {counter}</p>
      <div dangerouslySetInnerHTML={{ __html: MOCK_HTML_STRING }} />
    </div>
  );
};

export default HomePage;
