import React, { useContext, useEffect, useState }  from 'react';
import { Cards } from '..';
import DontKnowInteractive from './elements/DontKnowInteractive';
import KnowInteractive from './elements/KnowInteractive';


export interface IBtnsResult {
  next: (result: boolean) => void;
}

interface IBtnEnd {
  end: (result: boolean) => void;
}

const Interactive = ({end}: IBtnEnd) => {

  const {FlashCards} = useContext(Cards)

  const [idFC, setIdFC] = useState(0)         // id for card
  const [intWord, setIntWord] = useState('')
  const [intWordTranslate, setIntWordTranslate] = useState('')


  const next = (result: boolean) => {

    // анимация
    const card = document.getElementById(`intCard-${idFC}`)
    card?.classList.add(result ? 'interative__card--animate--yes' : 'interative__card--animate--no')

    // логика
    setTimeout(() => {
      setIdFC(idFC + 1)
      FlashCards.setEditWordResult(idFC, result)
      card?.classList.remove('interative__card--animate--yes')
      card?.classList.remove('interative__card--animate--no')
    }, 500)

  }


  const connectSwipe = () => {

      let initialPoint: Touch;
      let finalPoint: Touch;

      const card = document.getElementById(`intCard-${idFC}`)

      const getInitial = (event: any) => {
    
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    
      }

      const getFinal = (event: any) => {
    
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
    
        let xSwipe = Math.abs(initialPoint.pageX - finalPoint.pageX);
        let ySwipe = Math.abs(initialPoint.pageY - finalPoint.pageY);
    
        if (xSwipe > 25 || ySwipe > 25) {
            if (xSwipe > ySwipe) {
    
                if (finalPoint.pageX < initialPoint.pageX){
                  next(false)
                }
                else{
                  next(true)
                }

                // Удаляем события с карточки
                card?.removeEventListener('touchstart', getInitial, false)
                card?.removeEventListener('touchend', getFinal, false)
    
            }
        }
    
      }

      card?.addEventListener('touchstart', getInitial, false);
      card?.addEventListener('touchend', getFinal, false);
    
      return;
  }

  useEffect(() => {
    
    if (FlashCards.words.length > idFC) {
      setIntWord(FlashCards.words[idFC].word)
      setIntWordTranslate(FlashCards.words[idFC].wordTranslated)
    } else {
      end(true)
    }

    connectSwipe()
  }, [idFC])

  return (
      <div className='interactive'>

        <DontKnowInteractive next={next}/>

        <div className='interative__card' id={`intCard-${idFC}`}>
            <div className='interactive__card--word'>{intWord}</div>
            <div className='interactive__card--wordTranslate'>{intWordTranslate}</div>
        </div>

        <KnowInteractive next={next}/>

      </div>
    );
  }
  
  
export default Interactive;