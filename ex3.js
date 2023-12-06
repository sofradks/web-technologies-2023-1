function reverse(s)
{
    let result = "";
    for(let i = s.length-1; i > -1; i--)
        result+=s[i];
    return result;
}
function spinWords(s)
{
    let result = '';
    let array = s.split(' ');
    for(let i = 0; i < array.length; i++)
    {
        let t = array[i];
        if(t.length > 4)
            result+= reverse(t);
        else
            result+= t;
        result+=" "
    }
    return result
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test