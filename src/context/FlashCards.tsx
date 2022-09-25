
class FlashCards {
    _words: object[];

    constructor(){
        this._words = [
            {word: undefined, wordTranslated: undefined, id: 1, result: false},
            {word: undefined, wordTranslated: undefined, id: 2, result: false},
            {word: undefined, wordTranslated: undefined, id: 3, result: false},
        ]

    }

    // Изменить все строчки
    setWords(words: object[]){
        this._words = words
    }

    // Добавить пустую строчку
    setAddRow(){
        // @ts-ignore
        const id = this._words[this._words.length - 1].id + 1
        this._words.push({word: undefined, wordTranslated: undefined, id: id, result: false})
    }

    // Изменить значения в строчке
    setEditWord(word: object, id: number, index: number){
        this._words[index] = {id: id, result: false, ...word}
    }

    // Изменить состояние изучения
    setEditWordResult(id: number, result: boolean){
        // @ts-ignore
        this._words[id].result = result
    }


    get words(){
        return this._words
    }

}

export default FlashCards;