import userCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = userCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
