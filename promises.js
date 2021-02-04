const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const POKEMONS_BAD_URL = 'https://pokeapi.co/api/v2/pokemon-bad/';
const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

/* 
Main function
*/
function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}


let promise1 = getPromise(ALL_POKEMONS_URL);
const consumer = () => {
    promise1.then(
        (result) => {
            console.log({result}); // Log the result of 50 Pokemons
        },
        (error) => {
            // As the URL is a valid one, this will not be called.
            console.log('We have encountered an Error!'); // Log an error
    });
}
consumer();


/*
promise chain
*/
let promise2 = getPromise(ALL_POKEMONS_URL);
promise2.then(result => {
    let onePokemon = JSON.parse(result).results[0].url;
    return onePokemon;
}).then(onePokemonURL => {
    console.log(onePokemonURL);
}).catch(error => {
    console.log('In the catch', error);
});


/* 
Promise Chain with multiple then and catch
*/
let promise3 = getPromise(ALL_POKEMONS_URL);
promise3.then(result => {
    let onePokemon = JSON.parse(result).results[0].url;
    return onePokemon;
}).then(onePokemonURL => {
    console.log(onePokemonURL);
    return getPromise(onePokemonURL);
}).then(pokemon => {
    console.log(JSON.parse(pokemon));
}).catch(error => {
    console.log('In the catch', error);
});


let promise8 = getPromise(ALL_POKEMONS_URL);
promise8.then(result => {
    let onePokemon = JSON.parse(result).results[0].url;
    return onePokemon;
});
promise8.then(onePokemonURL => {
    console.log(onePokemonURL);
    return getPromise(onePokemonURL);
});
promise8.then(pokemon => {
    console.log(JSON.parse(pokemon));
});



/*** 
Handling multiple promises with static methods
***/

let promise4 = getPromise(BULBASAUR_POKEMONS_URL);
let promise5 = getPromise(RATICATE_POKEMONS_URL);
let promise6 = getPromise(KAKUNA_POKEMONS_URL);

/* 
promise.all
*/
Promise.all([promise4, promise5, promise6]).then(result => {
    console.log({result});
}).catch(error => {
    console.log('An Error Occured');
});


/*
promise.any
*/
Promise.any([promise4, promise5, promise6]).then(result => {
    console.log(JSON.parse(result));
}).catch(error => {
    console.log('An Error Occured');
});
 

/* 
promise.allSettled
*/
Promise.allSettled([promise4, promise5, promise6]).then(result => {
    console.log({result});
}).catch(error => {
    console.log('There is an Error!');
});


let promise7 = getPromise(POKEMONS_BAD_URL);