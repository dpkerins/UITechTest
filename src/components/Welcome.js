import Player from './Player';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Welcome(props) {
  const { players } = props;
  const [sortMethod, setSortMethod] = useState('rank');
  
  const sortByRank = () => {
    players.sort(function (a, b) {
      return b.points - a.points;
    })
  };
  const sortByName = () => {
    players.sort(function (a, b) {
      const surnameCompare = a.surname.localeCompare(b.surname);
      const nameCompare = a.name.localeCompare(b.name);
      return surnameCompare === 0 ? nameCompare : surnameCompare;
    })
  };
  const sortByNationality = () => {
    players.sort(function (a, b) {
      return a.nationality.localeCompare(b.nationality);
    })
  };

  if (sortMethod === 'rank') { sortByRank() };
  if (sortMethod === 'name') { sortByName() };
  if (sortMethod === 'nationality') { sortByNationality() };

  let playerKey = 0;
  const playerDivList = players.map((player) => {
    playerKey++;
    return (
      <Player player={player} key={playerKey}/>
    )
  })

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <p>Here is a list of all our current members and their rankings!</p>
      <div>
        <div className="select-div">
          <select onChange={event => { setSortMethod(event.currentTarget.value) }}>
            <option value="rank">Rank</option>
            <option value="name">Name</option>
            <option value="nationality">Nationality</option>
          </select>
        </div>
        <Card>
          <Card.Header>
            <Row>
              <Col xs={4}><h4>Players</h4></Col>
              <Col xs={4}><h4>Scores</h4></Col>
              <Col xs={4}><h4>Nationality</h4></Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {playerDivList}
          </Card.Body>
        </Card> 
      </div>
    </div>
  )
}