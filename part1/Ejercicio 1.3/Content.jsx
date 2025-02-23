import Part from './Part';

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part parte={part1.name} exercise={part1.exercises} />
      <Part parte={part2.name} exercise={part2.exercises} />
      <Part parte={part3.name} exercise={part3.exercises} />
    </div>
  );
};

export default Content;
