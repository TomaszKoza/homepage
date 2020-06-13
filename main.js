const name = "Tomek";
const age = 30;
const favouriteNumber = 14;
console.log(name);
console.log(age);
console.log(`hi my name is ${name} and I have ${age} years old`);
console.log("hi my name is", name, "and i have", age, "years old");
console.log(`this is my name ${name} I have ${age} years old and ${favouriteNumber} is my favourite number`);

function hello(name,age){
    const whatis = document.querySelector('.main__function--js');
    console.log(whatis);
    whatis.innerHTML = `Hello user. I am ${name} and I have ${age} years old. I am your host. WELCOME`
    return;
}
const helloMain=(name,age)=>{
    const main = document.querySelector('.main__main--js');
    console.log(main);
    main.innerHTML = `Hello! I am ${name} and I have ${age} years. Also I want to tell you WELCOMMMMEEEEE!!! on my page xD`;
    

}

const button = document.querySelector('.button--js');

console.log(button);

const myclick=() => {

    const heading=document.querySelector('.change__heading--js');
    
    heading.classList.toggle('note__button1');
}
button.addEventListener('click',myclick);