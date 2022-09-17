function capitalize(s)
{
 
  let resArr = s.split('');
  console.log(resArr);
  for(let i = 0; i < resArr.length; i += 2)
  {
    resArr[i] = resArr[i].toUpperCase();
  }
 return resArr.join('');
}
console.log(capitalize('abcdef'));
// console.log(Array.of('abcdef'));