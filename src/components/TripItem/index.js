const TripItem = props => {
  const {tripdetails} = props
  const {name} = tripdetails
  return <h1>{name}</h1>
}

export default TripItem
