import * as React from 'react';
import useDebounce from '../hooks/useDebounce'

const UseDebounceDemo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [ isReady, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        <button onClick={() => {
          cancel()
          setState('Canceled debounce')
        }}>Cancel debounce</button>
      </div>
      <div>
        {isReady && <span>Debounced value: {debouncedValue}</span>}
      </div>
    </div>
  );
};

export default UseDebounceDemo;