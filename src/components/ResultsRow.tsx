import React, { FC } from 'react';
import { IResRow } from './Results';



const ResultsRow: FC<IResRow> = ({number, word, wordTranslated, result}) => {
    return (
        <div className='table__row'>

            <div className='table__row__block table__row--number'>{number + 1}</div>

            <input 
                className='table__row__block table__row--input'
                value={word}
                readOnly
            />
            <input 
                className='table__row__block table__row--input'
                value={wordTranslated}
                readOnly
            />

            <div 
                className={
                    `table__row__block table__row__results
                    ${result ? 'table__row__results--yes' : 'table__row__results--no'}`
                }
            >
                {result ? 'Изучено' : 'Повторить'}
            </div>

        </div>
    );
  }
                            
  
export default ResultsRow;