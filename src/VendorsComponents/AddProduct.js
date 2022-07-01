import React from 'react';
import '../VendorsStyle/AddProduct.css';
import {Link} from 'react-router-dom';
const AddProduct = () => {
  return (
    <div className='VContainer1'>
      <div className='Vhead'>WANT TO ADD YOUR PRODUCTS</div>
      <div>
        <form>
          <div>
            <input type='text' placeholder='Title' className='VinputBox' />
          </div>
          <div>
            <input type='text' placeholder='Brand Name' className='VinputBox' />
          </div>
          <div>
            <input
              type='text'
              placeholder='Product Name'
              className='VinputBox'
            />
          </div>
          <div>
            <input type='text' placeholder='Price' className='VinputBox' />
          </div>
          <div>
            <div className='VsmallInputCon'>
              <input
                type='text'
                placeholder='Add Video'
                className='VsmallInputBox'
              />
              <input
                type='text'
                placeholder='Add Video'
                className='VsmallInputBox'
              />
              <input
                type='text'
                placeholder='Add Video'
                className='VsmallInputBox'
              />
              <input
                type='text'
                placeholder='Add Video'
                className='VsmallInputBox'
              />
              <input
                type='text'
                placeholder='Add Video'
                className='VsmallInputBox'
              />
            </div>
            <input type='text' placeholder='Add Video' className='VinputBox' />
          </div>
          <div>
            <input
              type='text'
              placeholder='Product Description'
              className='VinputBox'
            />
          </div>
          <div id='VsubCont'>
            <Link
              to='/VmyProduct'
              style={{color: 'inherit', textDecoration: 'none'}}
            >
              <button id='Vsubmit'>Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
