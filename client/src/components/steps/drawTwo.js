import React from 'react';

import { CardBody, Card, Table } from 'reactstrap';

import Hint from '../hint';

const DrawTwo = () => {
  return (
    <div>
      <p className="desc-text">Using <b>petImage</b>, <b>petX</b>, <b>petY</b>, <b>petWidth</b>, <b>isGameOver()</b> and <b>image()</b>, write a conditional so that the pet is only drawn if the game is not over. </p>
      <Card body outline color="info" style={{ marginBottom: '1rem' }}>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Function</th>
                <th>Explanation</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>image()</td>
                <td><b>Draws an image</b> to the main canvas of the p5js sketch.</td>
                <td>image(img,x,y,width, height)<br /><br />

                img Image: the image to display<br />
                x Number: x-coordinate of rectangle<br />
                y Number: y-coordinate of rectangle<br />
                width Number: width of rectangle<br />
                height Number: height of rectangle</td>
              </tr>
              <tr>
                <td>isGameOver()</td>
                <td>Asks the question "Is the game over yet?" </td>
                <td>isGameOver()</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Hint content="isGameOver() results in a boolean, so you could use it in a conditional " />
    </div>);
};

export default DrawTwo;
