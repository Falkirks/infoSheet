import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { CardBody, Card, Table } from 'reactstrap';

import Hint from '../hint';

const GoDraw = () => {
  const codeString = 'if(isSkyBlue){\n' +
    ' // do something when condition sky is blue\n' +
    '}\n' +
    'else{\n' +
    ' // do something when condition sky is not blue\n' +
    '}';
  return (
    <div>
      <p className="desc-text">Using the <b>foodAvailable</b>, <b>foodX</b>, <b>foodY</b>, <b>foodWidth</b>, <b>foodHeight</b> variables and the <b>image()</b> function, write a conditional that only draws food when food is available </p>
      <Card body outline color="info" style={{ marginBottom: '1rem' }}>
        <CardBody>
          <p>Remember that conditionals have the format:</p>
          <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ padding: '2em' }}>{codeString}</SyntaxHighlighter>
        </CardBody>
      </Card>
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
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Hint content="foodAvailable is a boolean and if you’re still struggling with conditionals, look at the “Helpful Examples” at the end or ask for some help!  " />
    </div>);
};

export default GoDraw;
