const firstName='TOM';
const age='34';

console.log(`Nazywam się ${firstName} i mam ${age}`);



console.log('HELO!');

function calculate(myNumber){
    myNumber=myNumber+4;
    console.log(myNumber);
    return myNumber*7;

}

calculate(2);
console.log(calculate(3));

const calculate1 = (myNumber1) => {
    myNumber1 = myNumber1 +3;
    console.log(myNumber1);
    return myNumber1*6;
}

calculate1(2);
console.log(calculate1(4));

const calculate2 =myNumber2 => console.log((myNumber2+3)*5);

calculate2(6);

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log (`${target} destroyed 🎆`);

    },
    isOperating:true,
    levels:357,
    name:'Death Star',
    population: 10000,
    crew:{
        commander:'Darth Vader',
        firstOfficer: 'Darth Maul',
        solidier:'trooper',
    }
}

console.log(deathStar.isOperating);
deathStar.fire('Mars');