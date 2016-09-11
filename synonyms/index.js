var Promise = require('bluebird')
var thesaurus = require('thesaurus')

var translate = function (sentence, randomness, strawman) {
  var sentenceArray = sentence.split(' ')
  let translateArray = [strawman]
  for (let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i]
    if (Math.random() * 100 > randomness) {
      if (word.length < 3) {
        translateArray.push(word)
      } else {
        let punctuation = word.match(/\W+/) ? word.match(/\W+/)[0] : ''
        let cleanWord = word.match(/\w+/)[0]
        let randoWords = thesaurus.find(cleanWord.toLowerCase())
        if (randoWords.length > 0) {
          translateArray.push(randoWords[1 + (Math.floor(Math.random() * (randoWords.length - 1)))] + punctuation)
        } else {
          translateArray.push(word)
        }
      }
    } else {
      translateArray.push(word)
    }
  }
  return translateArray.join(' ')
}

// console.log(translate('captain planet, may i ask your permission in taking the hand of your lovely wife', 0, 'Someone'))

// console.log(translate('better start cleaning up the rotten food in the fridge', 80, 'Someone'))
// console.log(translate('keep drinking my beer you ass twat', 70, 'Donald Trump'))
// console.log(translate('is such a disrespectful cunt for not allowing any of us to ever drink alcohol at our super expensive school. fuck you!', 70, 'Pierre'))
// console.log(translate('is being a real pain in the butt', 70, 'Someone'))
// console.log(translate("woke up at 6am to meet someone who didn't show up to breakfast", 50, 'Someone'))

module.exports = translate
