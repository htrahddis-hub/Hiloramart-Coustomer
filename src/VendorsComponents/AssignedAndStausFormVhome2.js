import React from 'react'
import '../VendorsStyle/AssignedAndStausFormVhome2.css'

const AssignedAndStausFormVhome2 = () => {
  return (
    <div className='ASmainCont'>
      <div className='ASmainCont1'>
        <div className='AStext'>
          Assigned
        </div>
        <div style={{ background: 'white', width: '100%', borderRadius: '12px' }}>
          <form id="loginDiv3">

            <input
              name="Courier Company"
              className='inputBox'
              placeholder='Courier Company'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <input
              name="Post Code"
              className='inputBox'
              placeholder='Post Code'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <input
              name="Location"
              className='inputBox'
              placeholder='Location'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <input
              name="State"
              className='inputBox'
              placeholder='State'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <input
              name="Sender Name"
              className='inputBox'
              placeholder='Sender Name'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <input
              name="Sender Phone Number"
              className='inputBox'
              placeholder='Sender Phone Number'
            // value={"email"}
            // onChange={this.handleInputChange}
            />
            <div className='Asbutton'>
              <button className='Assigned' type="submit">Assigned</button>
            </div>

          </form>
        </div>
      </div>
      <div className='ASmainCont2'>
        <div className='AStext'>
          Status
        </div>
        <div style={{ background: 'white', width: '100%', height: '50vh', borderRadius: '12px' }}>
          <form>
            <div className="radio">
              <label className='lableStyle'>
                Assigned
                <input type="radio" value="option1" checked={true} />

              </label>
            </div>
            <div className="radio">
              <label className='lableStyle'>
                Shipped
                <input type="radio" value="option2" />

              </label>
            </div>
            <div className="radio">
              <label className='lableStyle'>
                Deliver
                <input type="radio" value="option3" />

              </label>
            </div>
            <div className='Asbutton' style={{textAlign:"center"}}>
              <button className='Done' type="submit">Done</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default AssignedAndStausFormVhome2