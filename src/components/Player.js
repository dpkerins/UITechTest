export default function Player(props) {
  const { player } = props;
  return (
    <div>
      <p>{player.name} {player.surname}</p>
      <p>{player.points} points</p>
    </div>
  )
}