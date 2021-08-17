import CarCard from '../DetailComponent/CarCard'
import React from 'react'
import axios from 'axios'
import react, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MainDetail(props){
  const [info, setInfo] = useState([]);

  const router = useRouter()
  console.log(router.query.post);
  useEffect(() => {
    getData()
   
   
}, [])


  async function  getData()
  {
     
   
  
       const res= await axios.get('https://carsgallary.herokuapp.com/api/v1/cars/carinfo/'+router.query.post)        
     
      .then( function (response) {
          // handle success
          console.log('fff',response);
        
          setInfo(response.data)
      })
      .catch(function (error) {
          // handle error
          console.log('ffff',error);
         
      })
      .then(function () {
          // always executed
      });
  }


    return(
      <React.Fragment>
        <main class="PBT ">
          <div class="postViewContainer">
            <div class="container postMainColumns">
              <CarCard info={info}/> 
            </div>
          </div>
        </main>
      </React.Fragment>
    )
}