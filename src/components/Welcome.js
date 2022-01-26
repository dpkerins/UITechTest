import Player from './Player';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome(props) {
  const { players } = props;
  
  players.sort(function (a, b) {
    return b.points - a.points;
  });

  const playerDivList = players.map((player) => {
    return (
      <Player player={player}/>
    )
  })

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <p>Here is a list of all our current members and their rankings!</p>
      <div>
        <Row>
          <Col><h3>Players</h3></Col>
          <Col><h3>Scores</h3></Col>
        </Row>
        {playerDivList}
      </div>
    </div>
  )
}