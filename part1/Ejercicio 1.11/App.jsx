import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Total from './Total';

const Statistics = ({ estadisticas }) => {
  const total =
    estadisticas.good.num + estadisticas.neutral.num + estadisticas.bad.num;
  const average =
    total > 0 ? (estadisticas.good.num - estadisticas.bad.num) / total : 0;
  const positivos = total > 0 ? (estadisticas.good.num * 100) / total : 0;

  return (
    <>
      <table>
        <tr>
          <Total
            title={estadisticas.good.title}
            count={estadisticas.good.num}
          />
        </tr>
        <tr>
          <Total
            title={estadisticas.neutral.title}
            count={estadisticas.neutral.num}
          />
        </tr>
        <tr>
          <Total title={estadisticas.bad.title} count={estadisticas.bad.num} />
        </tr>
        <tr>
          <Total title={'All'} count={total} />
        </tr>
        <tr>
          <Total title={'Average'} count={average} />
        </tr>
        <tr>
          {' '}
          <Total title={'Positive'} count={positivos} />
        </tr>
      </table>
    </>
  );
};

const App = () => {
  const title = 'Give Feedback';
  const stadistics = 'Stadistics';
  const noFeedBack = 'No Feedback given';
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

  const estadisticas = {
    good: {
      title: 'Good',
      num: good,
    },
    neutral: {
      title: 'Neutral',
      num: neutral,
    },
    bad: {
      title: 'Bad',
      num: bad,
    },
  };

  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <Header title={title} />
      <Button title={'Good'} onSmash={handleGood} />
      <Button title={'Neutral'} onSmash={handleNeutral} />
      <Button title={'Bad'} onSmash={handleBad} />

      <Header title={stadistics} />
      {totalFeedback === 0 ? (
        <Header title={noFeedBack} />
      ) : (
        <Statistics estadisticas={estadisticas} />
      )}
    </div>
  );
};

export default App;
