import React from 'react'
import { Navbar } from './Navbar'
import './bet.css';

export const BetSlip = () => {
  return (
    <div >
        {/* <Navbar/>
     */}
     
        <div className="container betBox text-center mt-5 d-none d-lg-block ">
        <div>
          <button className='bet-sel mt-2'>
            BET SLIP
          </button>
        </div>
     
        <div className='betSelectionBox mt-3'>
          <span>YOUR BET SELECTION WILL APPEAR HERE</span>

        </div>

            

        </div>
    </div>

  
  )
}
