/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  let result: number[] = [];

  if (size <= 0) {
    result = [];
  } else if (size === 1) {
    result = [0];
  } else if (size === 2) {
    result = [0, 1];
  } else {
    result = [0, 1];

    for (let i = 0; i < size - 2; i++) {
      result.push(result[i] + result[i + 1]);
    }
  }

  // Ton code ici !
  return result;
}

export default getFibonacciSequence;
