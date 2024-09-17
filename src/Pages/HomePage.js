import React from 'react'
import Banner from '../Components/Banner/Banner'
import CoinsTable from '../Components/CoinsTable'
import Header from '../Components/Header'

const HomePage = () => {
  return (
    <div>
       <Header/>
       <>
          <Banner />
          <CoinsTable/>
       </>
    </div>
    
  )
}

export default HomePage