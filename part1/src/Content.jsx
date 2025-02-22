import Part from './Part';

const Content = ({ parts}) => {
  return (
    <div>
      <Part parte={parts[0].name} exercise={parts[0].exercises} />
      <Part parte={parts[1].name} exercise={parts[1].exercises} />
      <Part parte={parts[2].name} exercise={parts[2].exercises} />
    </div>
  );
};

export default Content;
