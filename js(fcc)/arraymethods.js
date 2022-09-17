//  ************ array methods() **********

// push(),pop(),shift(),unshift(),slice(),splice(),findIndex(),indexOf(),map(),forEach(),includes(),filter(),reduce().

// splice() : changes the content of array by removing/replacing existing elements and or adding new elements in that place.

const months = ['jan','feb','march','april','may'];
console.log(months);
correctMonths = (months.splice(2,1,'june'));
// parameters - 1st parameter: index at which changes are to be done. 2nd parameter: no of itmes to be deleted/modified, 3rd parameter: the new data to be added.

console.log(months);

// indexOf method()

const arr2 = ['ant','bat','dog','duck','biscon'];
console.log(arr2.indexOf('biscon'));

console.log(arr2[arr2.indexOf('biscon')])
// prints the element at that index.


// complexArray,when we have an arrray of objects,indexOf wont be working.

const complexArr = [
  {
    fname: 'Bob',
    lname: 'Smith'
  },
  {
    fname: 'Alice',
    lname: 'Smith'
  },
  {
    fname: 'Jon',
    lname: 'Smith'
  },
  {
    fname: 'Jon',
    lname: 'Doe'
  }
]
// find the index of element where the lname is not equal to 'smith'.
console.log(complexArr.findIndex(arrItems => {
  return arrItems.lname !== 'Smith'}));



  // ******** MAP method() ********

  // let say we want to set the category of objects to categorised.

  const blog = [
    {
      title: 'How to use map() function',
      category: 'uncategorized'
    },

    {
      title: 'What is javascript',
      category: 'uncategorized'
    },

    {
      title: 'Why are you crazy enough to learn to code?',
      category: 'uncategorized'
    }
  ];
 
  blog.map(arrItems => {
    return arrItems.category = 'Web Development';
  });

  console.log(blog);


  // ************** for of  *********************

  const arr = [1,2,3];
  // for(num of arr)
  // console.log(num);

  // other method. (forEach());

  arr.forEach(arrItems => {
    console.log(arrItems);
  })


  // ************ filter method() **************

  const allOrder = [
    {
      productName: 'Tea pot',
      isDigital: false,
      isCancelled: false,
      isOpen: false
    },

    {
      productName: 'Blue Gildan Mens Hoodie',
      isDigital: false,
      isCancelled: true,
      isOpen: false
    },
    {
      productName: 'Kindle Book',
      isDigital: true,
      isCancelled: true,
      isOpen: false
    },

    {
      productName: 'Atomic Book',
      isDigital: true,
      isCancelled: false,
      isOpen: false
    }
  ];

// let say we want all orders where payment is done digitly.

const digitalOrder = allOrder.filter(arrItems =>{
  return arrItems.isDigital && arrItems.isCancelled;
})
console.log(digitalOrder);



// ********** Reduce method ***********
// find the sum using reduce?

const arr3  = [10,20,30,25,14];
console.log(arr3.reduce((prev,cur) => prev+cur));

// find avg

const avg = arr3.reduce((prev,cur) => 
   ((prev+cur),0)/arr3.length);
  console.log(avg);


  // console.log(Math.cbrt(549));
   