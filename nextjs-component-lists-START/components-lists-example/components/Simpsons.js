import SimpsonsCharacters2 from "./SimpsonCharacters2"

function Simpsons({color,children}) {
  return (
    <div style={{color:color}}>
        <SimpsonsCharacters2 data={children}></SimpsonsCharacters2>
    </div>
  )
}

export default Simpsons