function createCounter()
{
    let counter = 0;
    return function (){
        counter+=1;
        console.log(counter);
        return counter;
    }
}

const counter = createCounter();
counter();
counter();

console.log('-------------\nsecond')
const counter2 = createCounter();
counter2();
counter2();