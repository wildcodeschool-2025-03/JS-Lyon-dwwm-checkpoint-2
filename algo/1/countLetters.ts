/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  const strToArr = givenString.split("");
  let letterCount = 0;
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].includes(letter)) {
      letterCount = letterCount + 1;
    }
  }
  return letterCount;
}

export default countLetters;
