import React, { useState } from 'react'
import '../VendorsStyle/AccountDetail.css'
import Graph from '../VendorsAssets/Graph.png'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        // text: 'Chart.js Line Chart',
      },
      labels: {
        display: false
      }
    },
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: ['20', '40', '3', '4', '60', "44", "30"],
        borderColor: '#0066FF',
        backgroundColor: '#0066FF',
      }
    ],
  };
  
  



const AccountDetail = () => {


    return (
        <>

        <div className='TopHead'>Account Details </div> 
        <div id='AdmainCont'>
            <div id='ADcont1'>
                <div className='ADrow'>
                    <div >Account Number</div>
                    <div>1564 8746 **** *376</div>
                </div>
                <div className='ADrow'>
                    <div >Account Holder Name</div>
                    <div>Mr Rohit</div>
                </div>
                <div className='ADrow'>
                    <div>IFSC Code</div>
                    <div>SBI765T8U</div>
                </div>
                <div className='ADrow'>
                    <div>Bank Name</div>
                    <div>State Bank Of India</div>
                </div>
            </div>
            <div style={{width: '50%'}} id='ADcont2'>
                 <Line style={{width: '100%'}} options={options} data={data} />
            </div>
        </div>
        </>
    )
}

export default AccountDetail