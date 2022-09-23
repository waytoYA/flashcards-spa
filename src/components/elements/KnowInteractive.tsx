import React  from 'react';
import { IBtnsResult } from '../Interactive';



const KnowInteractive = ({next}: IBtnsResult) => {

  return (
        <div className='interative__btn' onClick={() => next(true)}>
            <div className='interative__btn--yes'>
                <div className='interative__btn__icon--yes'>

                  <svg viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1446 0L6.46824 9.43881L2.85167 5.91238L0 8.6966L6.46453 15L7.29998 14.189L19 2.78059L16.1446 0Z" fill="white"/>
                  </svg>

                </div>
                <p>помню</p>
            </div>
        </div>

    );
  }
  
  
export default KnowInteractive;