import React from 'react';
import { CardBody, Card, Table } from 'reactstrap';

import Hint from '../hint';

const MousePressed = () => (
  <div>
    <ul>
      <li>Using <b>foodX</b> and <b>foodY</b>, finish <b>mousePressed()</b> to make food appear where the mouse is clicked</li>
      <li><b>mouseX</b> and <b>mouseY</b> are the x and y coordinates of where the mouse is clicked</li>
    </ul>
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
              <td>mousePressed()</td>
              <td>Called once after every time a mouse button is pressed. </td>
              <td>mousePressed()</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>

    <Hint content="You want the coordinates of the food to be the coordinates of the mouse click  " />
  </div>
);

export default MousePressed;
