import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar'
import { Sidebar } from '../../Sidebar'
import { BetSlip } from '../../BetSlip';
import deposit from '../../images/deposit.png';
import withdraw from '../../images/withdraw.png';
import './wallet.css';

export const Wallet = () => {
  const navigate = useNavigate();
  return (
    <div>
<Navbar/>
<div className=" container notificationBox mt-2 col-12 ">

<button className='notificationBtn ms-3'>WALLET</button>
<div className="innerNotificationBox m-3 p-3 text-center">
<div>
  <h1>TOTAL BALANCE : 0</h1>
  <hr  className='w-30' style={{ border: '2px solid black' }}/>
</div>
<div className="d-flex justify-content-evenly">

  <div>
    <img src={deposit} alt="" />
    <div className='mt-3'>
    <button className='transaction-btn' onClick={() => navigate('/deposit')}>
      MY TRANSACTION
    </button>
    </div>

    
  </div>
  
  <div>
    <img src={withdraw} alt="" />
 <div className='mt-3'>
 <button className='transaction-btn' onClick={() => navigate('/withdraw')}>
      REFERRAL MONEY
    </button>
 </div>
  </div>
</div>


</div>
     </div>   
     <Sidebar/>

<BetSlip/> 
    </div>
  )
}
