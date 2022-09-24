import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Interactive from "./components/Interactive";
import Results from "./components/Results";
import { Cards } from ".";


const App = () => {

  const {FlashCards} = useContext(Cards)

  // изменение созданных карточек
  // в FlashCards
  const [pos, setPos] = useState(false) 

  // После заненсения данных о карточках в контекст
  // Запускаем Interactive
  const [gostart, setGostart] = useState(false)

  // Когда все карточки отвечены
  // Запускаем результаты
  const [goresult, setGoresult] = useState(false)

  const validation = () => {
    const allWords = FlashCards.words

    let notEmpty = false
    
    for (let one of allWords) {

      if (one.word && one.wordTranslated) notEmpty = true

      if (!one.word && !one.wordTranslated && FlashCards.words.length > 1)
        FlashCards.setWords(FlashCards.words.filter((word: {id: number}) => word.id != one.id))
        
    }

    return notEmpty
  }

  const start = () => {
    setPos(true)
  }

  useEffect(() => {

    if (pos === false) return;
    if (!validation()) {
      setPos(false);
      return;
    };
    setGostart(true)

  }, [pos])


  return (
    <Fragment>
        <Header />
        {
        gostart
        ?
        goresult
        ?
        <Results />
        :
        <Interactive end={setGoresult}/>
        :
        <Menu pos={pos} start={start} />
        }
    </Fragment>
  );
}

export default App;
