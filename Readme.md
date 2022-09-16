
Process.stdin.setEncoding('utf-8');

console.log('Enter a series of words seperated by space Enter 1 to quit.');
Process.stdin.on('data', (data) => {
  if (data == '1\n') {
    Process.exit();
  }

  const sentenceArray = data.toString().slice(0, -1).toLowerCase().split(' ');

  const pointsObjectArray = [];

  sentenceArray.forEach(element => {

    const word = element.toString().split('');

    let pointsObject = { word: word.join(''), points: 0 };
    let points = 0;
    word.forEach(character => {

      points += getPoint(character);
    })
    pointsObject.points = points;
    pointsObjectArray.push(pointsObject);
  });
  printMax(pointsObjectArray);

  function getPoint(character) {

    let characterValue;
    switch (character) {
      case 'd':
      case 'g':
        characterValue = 2
        break;
      case /[bcmp]/.test(character):
        characterValue = 3;
        break;
      case /[fhvwy]/.test(character):
        characterValue = 4;
        break;
      case 'k':
        characterValue = 5;
        break;
      case 'j':
      case 'x':
        characterValue = 8;
        break;
      case 'q':
      case 'z':
        characterValue = 10;
        break;
      default:
        characterValue = 1;
        break;
    }
    return characterValue;

  }
  function printMax(objectsArray) {
    const maxPointObject = objectsArray.reduce((prev, current) => (prev.points > current.points) ? prev : current);
    console.log(`The word ${maxPointsObject.word} has max points:  ${maxPointObject}`);
  }