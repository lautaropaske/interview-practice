import * as React from 'react';
import useInterval from '../hooks/useInterval'

const UseIntervalDemo = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, setIsRunning] = React.useState(true)

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <div>
        delay: <input value={delay} onChange={event => setDelay(Number(event.target.value))} />
      </div>
      <h1>count: {count}</h1>
      <div style={{display: 'flex'}}>
        <div style={{p: 10}}>
            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'stop' : 'start'}</button>
        </div>
        <div style={{p: 10}}>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default UseIntervalDemo;