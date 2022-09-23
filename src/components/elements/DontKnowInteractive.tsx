import React  from 'react';
import { IBtnsResult } from '../Interactive';



const DontKnowInteractive = ({next}: IBtnsResult) => {

  return (
        <div className='interative__btn' onClick={() => next(false)}>
            <div className='interative__btn--no'>
                <div className='interative__btn__icon--no'>

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 512.021 512.021"><g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" fill="#ffffff" data-original="#000000"/>
                  </g></g>
                  </svg>

                </div>
                <p>отложить</p>
            </div>
        </div>
    );
  }
  
  
export default DontKnowInteractive;