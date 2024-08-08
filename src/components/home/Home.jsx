import React from 'react'
import { Navbar } from '../../Navbar'
import { Sidebar } from '../../Sidebar'
import { BetSlip } from '../../BetSlip';
import coinFlip from '../../images/coinFlipImg.png';
import traderImg from '../../images/traderImg.png';
import './home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="container homeBox mt-2 ">
        <button className='featuredGames-btn'>
          FEATURED GAMES
        </button>
        <div className='d-flex justify-content-evenly mt-4'>
          <div className="gameBox text-center">

            <div className='game1 m-2 '>
              <img src={coinFlip} alt="" />
            </div>

          </div>

          <div className="gameBox text-center">
            <div className='game2 m-2'>
              <img src={traderImg} alt="" />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-evenly'>

          <button className='game1-btn m-3' onClick={() => navigate('/coinSwitch')} >Coin flip</button>
          <button className='game2-btn m-3' onClick={() => navigate('/trader')} >Trader Game</button>
        </div>

      </div>

      <Sidebar />



      <BetSlip />




    </div>
  )
}
