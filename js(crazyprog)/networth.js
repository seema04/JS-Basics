// calculate networth using reduce method.

  const actor = [
    {name: 'johnny', networth: 2000000},
    {name: 'amber', networth: 10},
    {name: 'matt', networth: 170000000},
    {name: 'brad', networth: 300000000},
    {name: 'leonardo', networth: 10000000}
  ]
  // prev here is storing 0 for first loop.
  // in the 2nd loop prev = 0 + 20000000 and so own.

    console.log(actor.reduce((prev,cur) => prev + cur.networth,0));



