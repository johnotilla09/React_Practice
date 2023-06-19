import userCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = userCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
