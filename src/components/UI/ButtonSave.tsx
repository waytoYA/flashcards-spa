import React, { useContext }  from 'react';
import { Cards } from '../..';

const ButtonSave = () => {

    const {FlashCards} = useContext(Cards)

    const save = () => {
        const wordsObj = FlashCards.words

        const data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(wordsObj));
        let saveBlock = document.getElementById('saveCards-id')!; // not null
        saveBlock.setAttribute("href", data);
        saveBlock.setAttribute("download", `FlashCards.json`);
    }

    return (
        <a id='saveCards-id'>
            <button 
                className='saveButton'
                onClick={save}
            >Сохранить</button>
        </a>
    );
  }
  
  
export default ButtonSave;