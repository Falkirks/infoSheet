import React from 'react';
import pixelCoordinates from '../../../res/images/pixel-coordinates.png';

import Hint from '../hint';

const GoDirections = () => (
  <div>
    <ul>
      <li>Using <b>petSpeed</b>, <b>petX</b> and <b>petY</b> variables complete goLeft(), goDown(), goRight()</li>
      <li>Don’t forget that coordinates work differently in programming: As your Y-axis goes down, the value goes up</li>
    </ul>
    <div className="step-image-holder">
      <img src={pixelCoordinates} alt="Coordinate plane" className="step-image" />
    </div>
    <Hint content="Look at how goUp() is written " />
  </div>
);

export default GoDirections;
