  var mycomputer ={

    cpu: 'Ryzen',
//  key   value
    gpu: 'Gygabyte',
    ram: '16GB',
    ssd: '250gb'

  }

  console.log(mycomputer);
  console.log(mycomputer.ssd);
  mycomputer.ram = '32gb';
  console.log(mycomputer);

  // get properties value 1

  var storage = mycomputer.ssd;
  console.log(storage);

  // ger properties value 2

  var memory = mycomputer['ram'];
  console.log(memory);

  // get properties value 3

 var propertiename = 'cpu';
 var propertieValue = mycomputer[propertiename];
 console.log(propertiename, propertieValue);

  // only keys name

  var properties= Object.keys(mycomputer);
  console.log(properties);

  // only values

  var properties= Object.values(mycomputer);
  console.log(properties);
