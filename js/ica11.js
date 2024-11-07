// function 1 //

function tellFourtune(w,x,y,z){
    const fourtune = `You will be a ${z} in ${y}, and married to ${x} with ${w} kids.`
    console.log(fourtune);
    return fourtune;
}

tellFourtune(2,'Sally','Colorado', 'accountant');
tellFourtune(13, 'Bob', 'Iowa', 'chef');
tellFourtune(3, 'Dylan', 'Las Vegas', 'artist');

// function 2 //

function calculateDogAge(a){
    const DogAge = a*7
    console.log(DogAge);
    return DogAge;
}

calculateDogAge(5);
calculateDogAge(7);
calculateDogAge(1);

// Exercise 1 //

function reversedNumber(n, reversed = 0){
    if (n === 0){
        return reversed;
    }

    return reversedNumber(Math.floor(n / 10), reversed * 10 + n % 10);
}

const number1 = reversedNumber(1234);
const number2 = reversedNumber(4385);

console.log(number1);
console.log(number2);

document.getElementById('output1').innerText = `The number 1234 reversed is: ${number1}`;
document.getElementById('output2').innerText = `The number 4385 reversed is: ${number2}`;

// Exercise 2 //

function alphabetical(f){
    return f.split('').sort().join('');
}

const newWord1 = alphabetical('zebra');
const newWord2 = alphabetical('yellow')

console.log(newWord1);
console.log(newWord2);

document.getElementById('output3').innerText = `The word zebra in alphabetical order is: ${newWord1}`;
document.getElementById('output4').innerText = `The word yellow in alphabetical order is: ${newWord2}`;

// Exercise 3 //

function uppercase(u){    
    const words = u.split(' ');
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++){
        const word = words[i];

    if  (word.length > 0){
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    else{
        capitalizedWords.push(word);
    }
    }

    return capitalizedWords.join(' ');
}

const capitalized1 = uppercase('the quick brown fox');
const capitalized2 = uppercase('sally sells seashells by the seashore')

console.log(capitalized1);
console.log(capitalized2);

document.getElementById('output5').innerText = `the quick brown fox: ${capitalized1}`;
document.getElementById('output6').innerText = `sally sells seashells by the seashore: ${capitalized2}`;
