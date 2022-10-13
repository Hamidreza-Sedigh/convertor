export default function convertRules(
  quantity,
  fromUnit,
  fromUnitCount,
  toUnit
) {
  //return (km / 1.609).toFixed(2);
  console.log('----------------------');
  console.log('quantity:', quantity);
  console.log('fromUnit:', fromUnit);
  console.log('fromUnitCount:', fromUnitCount);
  switch (quantity) {
    case 'distance': {
      let baseUnit = 'm';
      let baseUnitCount = 0;
      let result = 0;

      switch (fromUnit) {
        case 'Mm':
          baseUnitCount = fromUnitCount * 1000000;
          break;
        case 'km':
          baseUnitCount = fromUnitCount * 1000;
          break;
        case 'm':
          baseUnitCount = fromUnitCount;
          break;
        case 'cm':
          baseUnitCount = fromUnitCount / 100;
          break;
      }
      console.log('baseUnitCount:', baseUnitCount);
      switch (toUnit) {
        case 'Mm':
          result = baseUnitCount / 1000000;
          break;
        case 'km':
          // setToUnitCount(baseUnitCount / 1000);
          result = baseUnitCount / 1000;
          break;
        case 'm':
          result = baseUnitCount;
          break;
        case 'cm':
          result = baseUnitCount * 100;
          break;
      }
      console.log('result:', result);
      return result;
    }

    case 'volume': {
      let baseUnit = 'liter';
      let baseUnitCount = 0;
      let result = 0;

      switch (fromUnit) {
        case 'cc':
          baseUnitCount = fromUnitCount * 1000;
          break;
        case 'liter':
          baseUnitCount = fromUnitCount;
          break;
        case 'ml':
          baseUnitCount = fromUnitCount / 100;
          break;
      }
      console.log('baseUnitCount:', baseUnitCount);
      switch (toUnit) {
        case 'cc':
          // setToUnitCount(baseUnitCount / 1000);
          result = baseUnitCount / 1000;
          break;
        case 'liter':
          // setToUnitCount(baseUnitCount);
          result = baseUnitCount;
          break;
        case 'ml':
          // setToUnitCount(baseUnitCount * 100);
          result = baseUnitCount * 100;
          break;
      }
      console.log('result:', result);
      return result;
    }
    default:
      return 0;
  }
}

//export default convert;
