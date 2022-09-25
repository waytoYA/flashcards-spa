import React, { FC, useEffect, useState, useContext} from 'react';
import { Cards } from '..';
import { ICard } from './Menu';

const TableRow: FC<ICard> = ({index, id, word, wordTranslated, pos, setCheckRow}) => {

    const {FlashCards} = useContext(Cards)

    const [wordv, setWordv] = useState(word)
    const [wordvTranslated, setWordvTranslated] = useState(wordTranslated)

    const deleteRow = (id: number) => {

        if (FlashCards.words.length > 1) {

            // Анимация
            const row = document.getElementById(`table__row-id-${id}`)!
            row.classList.add('table__row--inactive')

            //Логика
            FlashCards.setWords(FlashCards.words.filter((word: {id: number}) => word.id != id))
            
            setTimeout(() => {
                
                setCheckRow(true)

            }, 400)

        }

    }

    // Повторяется функция свайпов, в следующих
    // обновлениях вынесу для отдельного использования
    const deleteRowSwipe = () => {

        let initialPoint: Touch;
        let finalPoint: Touch;

        const row = document.getElementById(`table__row-id-${id}`)

        const getInitial = (event: any) => {
      
            event.stopPropagation();
            initialPoint = event.changedTouches[0];
        
        }

        const getFinal = (event: any) => {
      
            event.stopPropagation();
            finalPoint = event.changedTouches[0];
        
            let xSwipe = Math.abs(initialPoint.pageX - finalPoint.pageX);
            let ySwipe = Math.abs(initialPoint.pageY - finalPoint.pageY);
        
            if (xSwipe > 100 || ySwipe > 100) {
                if (xSwipe > ySwipe) {
        
                    if (finalPoint.pageX < initialPoint.pageX){
                      deleteRow(id)
                    }
                }
            }
        
        }

        row?.addEventListener('touchstart', getInitial, false);
        row?.addEventListener('touchend', getFinal, false);
    }

    useEffect (() => {

        FlashCards.setEditWord(
            {word: wordv, wordTranslated: wordvTranslated}, id, index
        )

    }, [pos])

    useEffect (() => {
        deleteRowSwipe()
    }, [])
    
    return (
        <div className='table__row' id={`table__row-id-${id}`}>
            <div className='table__row__block table__row--number'>{index + 1}</div>

            <input 
                className='table__row__block table__row--input'
                maxLength={38}
                value={wordv || ''}
                onChange={(e) => setWordv(e.target.value)}
            />
            <input 
                className='table__row__block table__row--input'
                maxLength={34}
                value={wordvTranslated || ''}
                onChange={(e) => setWordvTranslated(e.target.value)}
            />

            <div className='table__row__block table__row--delete' onClick={() => deleteRow(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="50" style={{fill: '#fff'}}><g id="_01_align_center" data-name="01 align center"><path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/></g></svg>
            </div>
        </div>
    );
  }
  
  
export default TableRow;