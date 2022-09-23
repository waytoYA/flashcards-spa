import React, { useContext, useEffect, useState }  from 'react';
import { Cards } from '../index';
import MenuEdit from './MenuEdit';
import TableRow from './TableRow';

export interface ICard {
  id: number;
  word: string;
  wordTranslated: string;
  pos: boolean;
  index: number;

  setCheckRow: Function;
}


interface Test {
  pos: boolean;
  start: () => void;
}

const Menu = ({pos, start}: Test) => {

    const {FlashCards} = useContext(Cards)

    // при изменении useState компонент обновляется
    // делаем это для прорисовки добавленных строчек
    const [checkRow, setCheckRow] = useState(false) 

    const updateComponent = () => {
      setCheckRow(true)
    }

    const addRow = () => {
        FlashCards.setAddRow()
        updateComponent()
    }

    useEffect(() => {
      
      setCheckRow(false);

    }, [checkRow])
    
    
    return (
      <div className='menu'>
        <div className='menu__block'>

          <div className='menu__block--title'>
            <span>1.</span>
            <h3>Создай несколько карточек</h3>
          </div>

          <div className='menu__block--table'>

              <div className='table__row'>
                  <div className='table__row__block table__row--number'>№</div>
                  <div className='table__row__block table__row--word'>Слово</div>
                  <div className='table__row__block table__row--word'>Перевод</div>
              </div>

              {
                FlashCards.words.map((card: ICard, index: number) =>
                  <TableRow 
                      index={index}
                      id={card.id}
                      word={card.word}
                      wordTranslated={card.wordTranslated}
                      pos={pos}
                      setCheckRow={setCheckRow}

                      key={card.id}
                  />
                )
              }

              <MenuEdit                 
                  addRow={addRow}
              />

          </div>
          
        </div> 

        <div className='menu__block'>

          <div className='menu__block--title'>
            <span>2.</span>
            <h3>Нажми начать</h3>
          </div>

          <button 
            className='menu__block--button'
            onClick={start}
          >
          Начать
          </button>

        </div>
      </div>
    );
  }
  

export default Menu;