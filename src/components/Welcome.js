import Player from './Player';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Welcome(props) {
  const { players } = props;
  
  players.sort(function (a, b) {
    return b.points - a.points;
  });

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