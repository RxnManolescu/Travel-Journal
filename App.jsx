
import data from './data.jsx'
import Destination from './Destination.jsx'
import Header from './Header.jsx'

function App() {
  // console.log(data)

  const destinationsArray = data.map(destination => {
    return (
      <Destination 
        key={destination.id}
        destination={destination}
      />
    )

  })

  return (
    <div className="container">
      <Header />
      {destinationsArray}
    </div>
    
  )
}

export default App
