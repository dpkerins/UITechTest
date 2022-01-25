import Player from './Player';

export default function Welcome(props) {
  const { players } = props;
  
  players.sort(function (a, b) {
    return b.points - a.points;
  });

  const playerDivList = players.map((player) => {
    return (
      <div>
        <Player player={player}/>
      </div>
    )
  })

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <div>
        <h2>Player Rankings</h2>
        {playerDivList}
      </div>
    </div>    
  )
}