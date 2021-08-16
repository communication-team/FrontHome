import CarCard from '../DetailComponent/CarCard'
import React from 'react'

export default function MainDetail(props){
    return(
      <React.Fragment>
        <main class="PBT ">
          <div class="postViewContainer">
            <div class="container postMainColumns">
              <CarCard/> 
            </div>
          </div>
        </main>
      </React.Fragment>
    )
}