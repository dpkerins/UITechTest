import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function Player(props) {
  const { player } = props;
  return (
    <Row>
      <Col xs={4}>
        <p>{player.name} {player.surname}</p>
      </Col>
      <Col xs={4}>
        <p>{player.points} points</p>
      </Col>
      <Col xs={4}>
        <p>{player.nationality}</p>
      </Col>
    </Row>
  )
}