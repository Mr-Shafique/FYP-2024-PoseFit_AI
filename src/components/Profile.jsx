import React from 'react';
import Feedback from './Feedback';
import SessionHistoryTable from './SessionHistoryTable';

export default function Profile() {

    const profile = "./images/Rectangle 5933.png"

    return (
        <>
        <div className='flex flex-col'>

        <div className='flex gap-4 p-4 '>

            <div className=' w-1/5 h-svh   rounded-lg p-4 flex flex-col gap-2 '>
                <div className=" h-2/5  overflow-hidden flex justify-center items-center "> 
                <img src="./images/Rectangle 5933.png" alt="" className='rounded-lg w-4/5' />
                </div>
                <div className=' border h-3/5 rounded-md'> data </div>

            </div>
            <div className=' w-4/5 h-svh flex flex-col gap-4  border-none rounded-lg overflow-scroll'>
                <Feedback />
                <Feedback />
            </div>
        </div>
                <SessionHistoryTable />
        </div>
        </>
    );
}