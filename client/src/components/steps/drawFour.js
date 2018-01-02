import React from 'react';
import { CardBody, Card, Table } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

import Hint from '../hint';

const DrawFour = () => {

  const codeString = 'if(petNearFood()){\n' +
    ' // do something if pet is near food\n' +
    '}';

  return (
    <div>
      <ul>
        <li>Using <b>petNearFood()</b> make the pet eat the bamboo when it’s close enough</li>
        <li>The bamboo should disappear when eaten</li>
        <li><b>life</b> should increase (you can decide by how much)</li>
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
                <td>petNearFood()</td>
                <td>Check if the pet is near the food and return <b>true</b> if it is.</td>
                <td><SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ padding: '2em' }}>{codeString}</SyntaxHighlighter></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Hint content="To make bamboo disappear you will have to use foodAvailable" />
    </div>
  );
};

export default DrawFour;
