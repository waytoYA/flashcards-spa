import React, { useContext }  from 'react';
import { Cards } from '../..';

// :: IN WORK ::
// Этот компонент имеет неокончательный вид
// В ближайших обновлениях он будет изменён или исправлен

const ButtonLoad = () => {

    const {FlashCards} = useContext(Cards)

    const load = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader()

        reader.readAsText(e.target.files![0]);
        
        reader.onload = function () {

            // @ts-ignore
            const data = JSON.parse(reader.result)
             FlashCards.setWords(data)
        }


    }


    return (
        <React.Fragment>
            <input className='loadButton--hidden' accept='.json' id='loadCards-id' type='file' onChange={e => load(e)}/>
            <label className='loadButton' htmlFor='loadCards-id'>
                Загрузить
            </label>
        </React.Fragment>
    );
  }
  
  
export default ButtonLoad;