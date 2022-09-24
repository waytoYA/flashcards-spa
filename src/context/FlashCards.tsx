
class FlashCards {
    _words: object[];
    _start: boolean;

    constructor(){
        this._words = [
            // {word: undefined, wordTranslated: undefined, id: 1, result: false},
            // {word: undefined, wordTranslated: undefined, id: 2, result: false},
            // {word: undefined, wordTranslated: undefined, id: 3, result: false},
            {word: 'perform', wordTranslated: 'выполнять', id: 1, result: false},
            {word: 'car', wordTranslated: 'м', id: 2, result: false},
            {word: 'subnaticontarion on the pieace', wordTranslated: 'машина на неоновом двигателе', id: 3, result: false},
            {word: 'perform', wordTranslated: 'выполнять', id: 4, result: false},
            {word: 'car', wordTranslated: 'м', id: 5, result: false},
            {word: 'subnaticontarion on the pieace', wordTranslated: 'машина на неоновом двигателе', id: 6, result: false},
            {word: 'perform', wordTranslated: 'выполнять', id: 7, result: false},
            {word: 'car', wordTranslated: 'м', id: 8, result: false},
            {word: 'subnaticontarion on the pieace', wordTranslated: 'машина на неоновом двигателе', id: 9, result: false},
        ]

        this._start = false


    }

    // Изменить все строчки
    setWords(words: object[]){
        this._words = words
    }

    // Добавить пустую строчку
    setAddRow(){
        // let id = this._words.length + 1
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

    setStart(bool: boolean){
        this._start = bool
    }

    get words(){
        return this._words
    }

    get start(){
        return this._start
    }
}

export default FlashCards;