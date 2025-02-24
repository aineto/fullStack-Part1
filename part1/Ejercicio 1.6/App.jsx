import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Total from './Total';
const App = () => {
  const title = 'Give Feedback';
  const stadistics = 'Stadistics';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log('value Good', good);
    setGood(good + 1);
  };

  const handleNeutral = () => {
    console.log('value Neutral', neutral);
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    console.log('value Bad', bad);
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title={title} />
      <Button title={'Good'} onSmash={handleGood} />
      <Button title={'Neutral'} onSmash={handleNeutral} />
      <Button title={'Bad'} onSmash={handleBad} />

      <Header title={stadistics} />

      <Total title={'Good'} count={good} />
      <Total title={'Neutral'} count={neutral} />
      <Total title={'Bad'} count={bad} />
    </div>
  );
};

export default App;
