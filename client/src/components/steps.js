import React, { Component } from 'react';

import { Collapse, CardBody, Card, CardHeader, Button, CardFooter } from 'reactstrap';

import GoDirections from './steps/goDirections';
import GoDraw from './steps/goDraw';
import MousePressed from './steps/mousePressed';
import DrawTwo from './steps/drawTwo';
import DrawThree from './steps/drawThree';
import DrawFour from './steps/drawFour';
import Customize from './steps/customize';

class StepsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: -1,
      steps: [
        ['TODO #0 - Customize your game', Customize],
        ['TODO #1-3 - goDown(), goLeft(), goRight()', GoDirections],
        ['TODO #4 - draw()', GoDraw],
        ['TODO #5 mousePressed()', MousePressed],
        ['TODO #6 - draw()', DrawTwo],
        ['TODO #7 - draw()', DrawThree],
        ['TODO #8 - draw()', DrawFour],
      ],
    };
    this.toggle = this.toggle.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  nextStep() {
    this.state.currentStep += 1;
    this.setState({ currentStep: this.state.currentStep });
  }
  toggle(e) {
    const event = e.target.dataset.event;
    this.setState({ currentStep: this.state.currentStep === Number(event) ? this.state.currentStep : Number(event) });
  }

  renderStep(step, index) {
    const maxStep = this.state.steps.length - 1;
    const GenericStep = step[1];
    return (
      <Card style={{ marginBottom: '1rem' }} key={index}>
        <CardHeader onClick={this.toggle} data-event={index}>{step[0]}</CardHeader>
        <Collapse isOpen={this.state.currentStep === index}>
          <CardBody>
            <GenericStep />
          </CardBody>
          <CardFooter>
            {index !== maxStep ?
              <Button onClick={this.nextStep} color="info">Next step</Button> :
              <i>This is the last step of the activity!</i>}
          </CardFooter>
        </Collapse>
      </Card>
    );
  }
  renderSteps() {
    return this.state.steps.map((step, index) => this.renderStep(step, index));
  }
  render() {
    const currentStep = this.state.currentStep;
    return (
      <div className="list_items">
        {currentStep < 0 &&
        <Button onClick={this.nextStep} color="success" size="lg" block className="start-button">Start activity</Button>}
        { this.renderSteps() }
      </div>
    );
  }
}

export default StepsView;
