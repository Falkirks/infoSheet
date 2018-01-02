import React from 'react';

import Hint from '../hint';

const DrawThree = () => (
  <div>
    <p className="desc-text">Using <b>life</b> make life decrease if game is not over yet. Since <b>draw()</b> is constantly called, you only need to decrease life by one.</p>
    <Hint content="You have already written a conditional with isGameOver() in TODO #6 and can put your code from TODO #7 in the same place " />
  </div>
);

export default DrawThree;
