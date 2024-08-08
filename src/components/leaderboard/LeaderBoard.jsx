import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Navbar';
import { Sidebar } from '../../Sidebar';
import { BetSlip } from '../../BetSlip';


const simulatedLeaderBoardData = [
  { game: 'Coin Flip', name: 'LOHITH KUMAR', money: '10000' },
  { game: 'Trader', name: 'OLIVER', money: '+7,34,000' },
  // Add more leaderboard objects as needed
];

export const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchLeaderBoardData = () => {
      setTimeout(() => {
        setLeaderBoardData(simulatedLeaderBoardData);
      }, 1000);
    };

    fetchLeaderBoardData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container historyBox mt-2">
        <div>
          <button className='historybtn'>
            Leader Board
          </button>
        </div>
        <div className='d-flex justify-content-evenly mt-3'>
          <div className="history1 ">
            <button className='game1 p-2 m-2'>
              Coin FLIP
            </button>
            <div className="d-flex justify-content-evenly">
              <div>
                NAME
                <div>
                  {leaderBoardData
                    .filter(item => item.game === 'Coin Flip')
                    .map((item, index) => (
                      <div key={index}>{index + 1}. {item.name}</div>
                    ))}
                </div>
              </div>
              <div>
                MONEY
                <div>
                  {leaderBoardData
                    .filter(item => item.game === 'Coin Flip')
                    .map((item, index) => (
                      <div key={index}>{item.money}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="history2">
            <button className='game2 p-2 m-2'>Trader</button>
            <div className="d-flex justify-content-evenly">
              <div>
                NAME
                <div>
                  {leaderBoardData
                    .filter(item => item.game === 'Trader')
                    .map((item, index) => (
                      <div key={index}>{index + 1}. {item.name}</div>
                    ))}
                </div>
              </div>
              <div>
                MONEY
                <div>
                  {leaderBoardData
                    .filter(item => item.game === 'Trader')
                    .map((item, index) => (
                      <div key={index}>{item.money}</div>
                    ))}
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
