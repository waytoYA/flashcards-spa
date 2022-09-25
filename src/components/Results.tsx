import React, { useContext }  from 'react';
import { Cards } from '..';
import ResultsRow from './ResultsRow';
import ButtonSave from './UI/ButtonSave';

export interface IResRow {
    number: number;
    word: string;
    wordTranslated: string;
    result: boolean;

    id?: number;
}

const Results = () => {

    const {FlashCards} = useContext(Cards)

    return (
        <div className='results'>
            <div className='menu__block--table'>

                <div className='menu__block--title'>
                    <h3>Результаты</h3>

                    <ButtonSave />
                </div>

                <div className='table__row'>
                    <div className='table__row__block table__row--number'>№</div>
                    <div className='table__row__block table__row--word'>Слово</div>
                    <div className='table__row__block table__row--word'>Перевод</div>
                    <div className='table__row__block table__row--word table__row--word--result'>Результат</div>
                </div>


                {
                    FlashCards.words.map((card: IResRow, index: number) =>
                        <ResultsRow 
                            number={index}
                            word={card.word}
                            wordTranslated={card.wordTranslated}
                            result={card.result}

                            key={card.id}
                        />
                    )
                }

            </div>
          </div>
    );
  }
  
  
export default Results;