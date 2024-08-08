import React, { useEffect, useState } from 'react';
import profile from '../../images/pro.png';
import { Navbar } from '../../Navbar';
import { Sidebar } from '../../Sidebar';
import { BetSlip } from '../../BetSlip';
import { useNavigate } from 'react-router-dom';
import './profile.css'

// Simulated data for testing purposes
const simulatedData = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', uid: '123456' },
  { name: 'Jane Doe', phone: '987-654-3210', email: 'jane@example.com', uid: '654321' },
  // Add more simulated data objects as needed
];

export const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProfileData = () => {
      setLoading(true);
      // Simulate fetching data by using a timeout
      setTimeout(() => {
        const data = simulatedData.slice((currentPage - 1) * 1, currentPage * 1); // Adjust slice to control items per page
        setProfileData(prevData => [...prevData, ...data]);
        setLoading(false);
      }, 1000);
    };

    loadProfileData();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Navbar />

      <div className="container settingsBox mt-2 col-12">
        <button className='settingsBtn'>
          PROFILE
        </button>
        <div className='SettingsInnerBox mt-2'>
          <div className='d-flex justify-content-evenly '>
            <div className="row">
              <div className="col-12 col-md-5">
            <div className="details">
              <div className="name text-center mt-3">
                <div>
                  <input type="text" className='setting-input m-2' value={`NAME: ${profileData[0]?.name || ''}`} readOnly />
                 
                </div>
                <div>
                  <input type="text" className='setting-input m-2' value={`PHONE NUMBER: ${profileData[0]?.phone || ''}`} readOnly />
                  
                </div>
                <div>
                  <input type="text" className='setting-input m-2' value={`EMAIL: ${profileData[0]?.email || ''}`} readOnly />
                  
                </div>
              </div>
              </div>

              <div className="password text-center mt-3 d-none d-sm-block">
                <div className='support m-2'>
             <button>  <h4> FEEDBACK</h4>  </button>
                </div>
                <div className='support m-2'>
                <button><h4> BEGINNER'S GUID</h4></button>
                </div>
                <div className=' support m-2'>
               <button> <h6>24/7 CUSTOMER SUPPORT</h6></button>
                </div>
              </div>
            </div>
       <div className='col-12 col-md-7 '>
            <div className="pro text-center d-flex flex-column justify-content-between ">
              <div>
                <img src={profile} alt="" className='profile ms-3 mt-2' />
              </div>
              <div className='ms-4'>
                <input type="text" className='uid' value={`UID: ${profileData[0]?.uid || ''}`} readOnly />
              </div>
              <div>
                <button className='about-btn mt-2' onClick={() => navigate('/aboutUs')}>
                  ABOUT US
                </button>
                <div>
                  <button className='mt-3'  onClick={() => navigate('/settings')} >
                    Go to settings to edit
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
       
      </div>
      <Sidebar />
      <BetSlip />
    </div>
  );
};
