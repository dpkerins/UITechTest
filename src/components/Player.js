import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function Player(props) {
  const { player } = props;
  return (
    <Row>
      <Col>
        <p>{player.name} {player.surname}</p>
      </Col>
      <Col>
        <p>{player.points} points</p>
      </Col>
    </Row>
  )
}