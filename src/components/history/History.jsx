import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Navbar';
import { Sidebar } from '../../Sidebar';
import { BetSlip } from '../../BetSlip';
import './history.css';

const simulatedHistory = [
    { game: 'Coin Flip', date: '2024-08-01', money: '$50' },
    { game: 'Trader', date: '2024-07-30', money: '150k' },
    // Add more history objects as needed
];

export const History = () => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchHistoryData = () => {
            setTimeout(() => {
                setHistoryData(simulatedHistory);
            }, 1000);
        };

        fetchHistoryData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container historyBox mt-2 ">
                <div>
                    <button className='historybtn'>
                        HISTORY
                    </button>
                </div>
                <div className='d-flex justify-content-evenly mt-3 me-2'>
                    <div className="history1 ">
                        <button className='game1 p-2 m-2'>
                            Coin FLIP
                        </button>
                        <div className="d-flex justify-content-evenly">
                            <div>Date</div>
                            <div>Money</div>
                        </div>
                        {historyData
                            .filter(item => item.game === 'Coin Flip')
                            .map((item, index) => (
                                <div className="d-flex justify-content-evenly" key={index}>
                                    <div>{item.date}</div>
                                    <div>{item.money}</div>
                                </div>
                            ))}
                    </div>
                    <div className="history2  ">
                        <button className='game2 p-2 m-2'>
                            Trader
                        </button>
                        <div className="d-flex justify-content-evenly">
                            <div>Date</div>
                            <div>Money</div>
                        </div>
                        {historyData
                            .filter(item => item.game === 'Trader')
                            .map((item, index) => (
                                <div className="d-flex justify-content-evenly" key={index}>
                                    <div>{item.date}</div>
                                    <div>{item.money}</div>
                                </div>
                            ))}
                        {historyData.filter(item => item.game === 'Trader').length === 0 && (
                            <div className="text-center">
                                NO RECORDS FOUND
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Sidebar />
            <BetSlip />
        </div>
    );
};
