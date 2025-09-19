// import { useState } from 'react'

import { Suspense } from 'react';
import './App.css'
import Countries from './component/countries'



const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());


function App() {
  // const [count, setCount] = useState(0)



  return (
    <>
     
      <h1>React World On the gooooo...</h1>
     <Suspense fallback={ <p>loading....</p>} >
     <Countries countriesPromise={ countriesPromise } ></Countries>

     </Suspense>
      
     
    </>
  )
}

export default App
