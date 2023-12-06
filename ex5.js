function GetMinWord(array)
{
    const patternWord = /[А-Яа-яA-Za-z]{2,}/gi;
    if(array.length == 1)
        return array[0];
    arr = array.join(" ");
    let minWord = arr.match(patternWord);
    if(minWord == null)
        return null;
    minWord.sort();
    return minWord[0];
}
function GetPrefix(array)
{
    if(array.length == 0)
        return "";
    const minWord = GetMinWord(array);
    if(minWord == null)
        return "";
    const result = [];
    for (let i = 0; i < minWord.length-1; i++)
    {
        const pattern = minWord.substring(i, minWord.length);
        let flag = true;
        for (let j = 0; j < array.length; j++) 
        {
            const element = array[j];
            if(element.includes(pattern) == false)
            {
                flag = false;
                break;
            }
        }
        if(flag)
        {
            result.push(pattern);
            break;
        }
    }
    for (let i = minWord.length; i > 1; i--) 
    {
        const pattern = minWord.substring(0, i);
        let flag = true;
        for (let j = 0; j < array.length; j++) 
        {
            const element = array[j];
            if(element.includes(pattern) == false)
            {
                flag = false;
                break;
            }
        }
        if(flag)
        {
            result.push(pattern);
            break;
        }
    }
    if(result.length == 2)
    {
        if(result[0].length >= result[1].length)
        {
            return result[0];
        }
        return result[1];

    }   
    return result.length == 1 ? result[0]: "";
}

test1 = ["цве1ток","по1ток","х1лопок"];
test2 = ["собака","гоночная машина","машина"];

console.log('Test 1');
console.log(GetPrefix(test1));
console.log('------------');
console.log('Test 2');
console.log(GetPrefix(test2));
console.log('------------');
