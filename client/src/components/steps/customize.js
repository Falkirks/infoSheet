import React from 'react';
import { Card, CardTitle, Row, Col, CardImg } from 'reactstrap';

import alligator from '../../../res/images/animal/alligator.png';
import bear from '../../../res/images/animal/bear.png';
import bird from '../../../res/images/animal/bird.png';
import cat from '../../../res/images/animal/cat.png';
import cow from '../../../res/images/animal/cow.png';
import deer from '../../../res/images/animal/deer.png';

import dinosaur from '../../../res/images/animal/dinosaur.png';
import dolphin from '../../../res/images/animal/dolphin.png';
import dragon from '../../../res/images/animal/dragon.png';
import elephant from '../../../res/images/animal/elephant.png';
import fish from '../../../res/images/animal/fish.png';

import fox from '../../../res/images/animal/fox.png';
import giraffe from '../../../res/images/animal/giraffe.png';
import horse from '../../../res/images/animal/horse.png';
import lion from '../../../res/images/animal/lion.png';
import monkey from '../../../res/images/animal/monkey.png';

import mouse from '../../../res/images/animal/mouse.png';
import panda from '../../../res/images/animal/panda.png';
import penguin from '../../../res/images/animal/penguin.png';
import pig from '../../../res/images/animal/pig.png';
import rabbit from '../../../res/images/animal/rabbit.png';

import shark from '../../../res/images/animal/shark.png';
import sheep from '../../../res/images/animal/sheep.png';
import squirrel from '../../../res/images/animal/squirrel.png';
import tiger from '../../../res/images/animal/tiger.png';
import whale from '../../../res/images/animal/whale.png';

import wolf from '../../../res/images/animal/wolf.png';
import worm from '../../../res/images/animal/worm.png';
import zebra from '../../../res/images/animal/zebra.png';


import bamboo from '../../../res/images/food/bamboo.png';
import bananas from '../../../res/images/food/bananas.png';
import berries from '../../../res/images/food/berries.png';
import carrot from '../../../res/images/food/carrot.png';
import cheese from '../../../res/images/food/cheese.png';
import chestnut from '../../../res/images/food/chestnut.png';
import grass from '../../../res/images/food/grass.png';
import hay from '../../../res/images/food/hay.png';
import leaves from '../../../res/images/food/leaves.png';
import meat from '../../../res/images/food/meat.png';

import Hint from '../hint';

const Customize = () => (
  <div>
    <h4>Background color</h4>
    <p>Change the background of your game in <b>draw()</b>. Right now, it is set to "lightblue".</p>

    <h4>Animal</h4>
    <p>Change “panda” to an animal of your choice in <b>preload()</b>.</p>

    <Row>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>alligator</CardTitle>
          <CardImg top className="animal-image" src={alligator} alt="alligator" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>bear</CardTitle>
          <CardImg top className="animal-image" src={bear} alt="bear" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>bird</CardTitle>
          <CardImg top className="animal-image" src={bird} alt="bird" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>cat</CardTitle>
          <CardImg top className="animal-image" src={cat} alt="cat" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>cow</CardTitle>
          <CardImg top className="animal-image" src={cow} alt="cow" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>deer</CardTitle>
          <CardImg top className="animal-image" src={deer} alt="deer" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>dinosaur</CardTitle>
          <CardImg top className="animal-image" src={dinosaur} alt="dinosaur" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>dolphin</CardTitle>
          <CardImg top className="animal-image" src={dolphin} alt="dolphin" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>dragon</CardTitle>
          <CardImg top className="animal-image" src={dragon} alt="dragon" />
        </Card>
      </Col>

      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>elephant</CardTitle>
          <CardImg top className="animal-image" src={elephant} alt="elephant" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>fish</CardTitle>
          <CardImg top className="animal-image" src={fish} alt="fish" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>fox</CardTitle>
          <CardImg top className="animal-image" src={fox} alt="fox" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>giraffe</CardTitle>
          <CardImg top className="animal-image" src={giraffe} alt="giraffe" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>horse</CardTitle>
          <CardImg top className="animal-image" src={horse} alt="horse" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>lion</CardTitle>
          <CardImg top className="animal-image" src={lion} alt="lion" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>monkey</CardTitle>
          <CardImg top className="animal-image" src={monkey} alt="monkey" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>mouse</CardTitle>
          <CardImg top className="animal-image" src={mouse} alt="mouse" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>panda</CardTitle>
          <CardImg top className="animal-image" src={panda} alt="panda" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>penguin</CardTitle>
          <CardImg top className="animal-image" src={penguin} alt="penguin" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>pig</CardTitle>
          <CardImg top className="animal-image" src={pig} alt="pig" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>rabbit</CardTitle>
          <CardImg top className="animal-image" src={rabbit} alt="rabbit" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>shark</CardTitle>
          <CardImg top className="animal-image" src={shark} alt="shark" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>sheep</CardTitle>
          <CardImg top className="animal-image" src={sheep} alt="sheep" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>squirrel</CardTitle>
          <CardImg top className="animal-image" src={squirrel} alt="squirrel" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>tiger</CardTitle>
          <CardImg top className="animal-image" src={tiger} alt="tiger" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>whale</CardTitle>
          <CardImg top className="animal-image" src={whale} alt="whale" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>wolf</CardTitle>
          <CardImg top className="animal-image" src={wolf} alt="wolf" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>worm</CardTitle>
          <CardImg top className="animal-image" src={worm} alt="worm" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>zebra</CardTitle>
          <CardImg top className="animal-image" src={zebra} alt="zebra" />
        </Card>
      </Col>
    </Row>

    <h4>Food</h4>
    <p>Change “bamboo” to a food of your choice in <b>preload()</b>.</p>

    <Row>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>bamboo</CardTitle>
          <CardImg top className="animal-image" src={bamboo} alt="bamboo" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>bananas</CardTitle>
          <CardImg top className="animal-image" src={bananas} alt="bananas" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>berries</CardTitle>
          <CardImg top className="animal-image" src={berries} alt="berries" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>carrot</CardTitle>
          <CardImg top className="animal-image" src={carrot} alt="carrot" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>cheese</CardTitle>
          <CardImg top className="animal-image" src={cheese} alt="cheese" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>chestnut</CardTitle>
          <CardImg top className="animal-image" src={chestnut} alt="chestnut" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>grass</CardTitle>
          <CardImg top className="animal-image" src={grass} alt="grass" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>hay</CardTitle>
          <CardImg top className="animal-image" src={hay} alt="hay" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>leaves</CardTitle>
          <CardImg top className="animal-image" src={leaves} alt="leaves" />
        </Card>
      </Col>
      <Col sm="2" className="animalCol">
        <Card body>
          <CardTitle>meat</CardTitle>
          <CardImg top className="animal-image" src={meat} alt="meat" />
        </Card>
      </Col>
    </Row>
  </div>
);

export default Customize;
