var quotes = [
    {
      q: 'Du trenger ikke mer tid i dagen din, du trenger å bestemme.',
      t: 'Nie potrzebujesz więcej czasu w Twoim dniu, potrzebujesz zdecydować.',
      a: 'Seth Godin'
    },
    {
      q: '',
      t: '',
      a: ''
    }
];

shuffleArray = function(propArray) {
  //  Fisher-Yates Shuffle

  var counter = propArray.length,
      index,
      temp;

  //  While there are elements in the propArray
  while (counter > 0) {
    //  Pick a random index
    index = Math.floor(Math.random() * counter);

    //  Decrease counter by 1
    counter--;

    //  And swap the last element with it
    temp = propArray[counter];
    propArray[counter] = propArray[index];
    propArray[index] = temp;
  }

  return propArray;
};