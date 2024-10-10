import React from 'react'

const NewtripContext = React.createContext({
  tripsList: [],
  addNewTrip: () => {},
  deleteTrip: () => {},
})

export default NewtripContext
