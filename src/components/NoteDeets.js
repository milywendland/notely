const NoteDeets = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name}></img>
      <p>{props.description}</p>
    </div>
  )
}

export default NoteDeets
