const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 }
 ]
 
 function pickPropArray(array, propName)
 {
    let result = []
    if (propName == "name" )
    {
      for(let i = 0; i < array.length; i++)
      {
         if(array[i].hasOwnProperty(propName))
        {
        result.push(array[i].name)
        }
      }
    }
    else if (propName == "age")
    {
      for(let i = 0; i < array.length; i++)
      {
        if(array[i].hasOwnProperty(propName))
        {
            result.push(array[i].age)
        }
      }
    }
    return result;
 }

 const result = pickPropArray(students, "name")
 console.log(result)