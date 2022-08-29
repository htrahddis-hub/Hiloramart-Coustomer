import React from 'react'

const LastTransections = ({ads}) => {
    return (
        <>

            <div className='TopHead'>Last Transactions</div>
            <div id='AdmainCont'>
                <div id='LastTcont1' >
                    {
                        ads?.length > 0 ? (
                            ads?.map((item) => (
                                <div className='ADrow'>
                                    <div >1 Apr 2022 - 10:15 Am</div>
                                    <div>UPI</div>
                                    <div>RS 30,000</div>
                                </div>
                            ))
                        ) : (
                            <p style={{textAlign: 'center', margin: '40px 0'}}>No Transaction Found!</p>
                        )
                    }
                    {/* <div className='ADrow'>
                        <div >1 Apr 2022 - 10:15 Am</div>
                        <div>UPI</div>
                        <div>RS 30,000</div>
                    </div>
                    <div className='ADrow'>
                        <div >1 Apr 2022 - 10:15 Am</div>
                        <div>UPI</div>
                        <div>RS 30,000</div>
                    </div>
                    <div className='ADrow'>
                        <div >1 Apr 2022 - 10:15 Am</div>
                        <div>UPI</div>
                        <div>RS 30,000</div>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default LastTransections