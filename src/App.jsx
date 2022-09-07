import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./index.css"
import Tour from "./tour"

function App() {
  const [tourData, setTourData] = useState([])
  const [zeroTours, setZeroTours] = useState(false)

  useEffect(()=> {
    fetch("https://course-api.com/react-tours-project")
    .then(res => res.json())
    .then(data => {
      setTourData(data)
    })
  }, [zeroTours])

  function removeTour (event) {
    const newTour = tourData.filter(tour => {
      if (event.target.id !== tour.id){
        return tour
      }
    })

    if(newTour.length === 0){
      setZeroTours(prev => !prev)
    }

    setTourData(newTour)

  }

  const tourElements = tourData.map(item => {
    return <Tour key={item.id}
                 id={item.id}
                 img={item.image}
                 name={item.name}
                 info={item.info}
                 price={item.price}
                 removeTour={removeTour}
            />
  })

  console.log(tourData)

  return (
    <div className="App container mx-auto py-5 px-2">

      {zeroTours ? <div className="space-y-8 tracking-widest font-bold flex flex-col justify-center items-center min-h-screen">
        <h1 className='text-2xl md:text-5xl'>No Tours Left</h1>
        <button onClick={() => setZeroTours(prev => !prev)} className="py-2 bg-white border-4 px-8 tracking-widest hover:bg-sky-200 hover:text-gray-400">
          Refresh
        </button>
      </div>
      :
      <div className="space-y-8">
          <div className="font-bold tracking-wider text-center space-y-1 md:space-y-2">
            <h1 className='md:text-4xl text-lg'>OUR TOURS</h1>
            <div className="md:border-4 border-2 border-sky-400 w-[5%] mx-auto px-4"></div>
          </div>

            <div className='space-y-6'>
                {tourElements}
            </div>
      </div>}
      
    </div>
  )
}

export default App
