// 1
// iterowanie po 'pustej' tablicy
const a11 = new Array(4); // dostajemy tablice elementow undefined
console.log(a11);
// nie jestes w stanie przetwarzac takiej tablicy

// nie dziala przykladowe przetwarzanie:
const a12 = a11.map((value, index) => index);
console.log(a12);

// mozesz rozwiazac ten problem za pomoca Array.fill
const a13 = Array(4).fill(undefined);
console.log(a13);
const a14 = a13.map((value, index) => index);
console.log(a14);


// 2
// przekazywanie pustego parametru do funkcji
const fun = (arg1, arg2, arg3) => {
    console.log(`ARG1 = ${arg1}`);
    console.log(`ARG2 = ${arg2}`);
    console.log(`ARG3 = ${arg3}`);
}

// fun(1, 2, 3);
// fun(1, , 3); // blad
// fun(1, null, 3);
// fun(1, undefined, 3);
// fun(...[1, , 3]);


// 3
// przegladanie elementow tablicy 'od tylu'

const a15 = [1, 2, 3, 4];
console.log(a15.slice(-1));
console.log(a15.slice(-2));
console.log(a15.slice(-3));
console.log(a15.slice(-4));


// 4
// jak szybko podejrzec kod funkcji
console.log(fun);
console.log(fun + '');
