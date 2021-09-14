function api(result) {
  console.log('result: ', result);
  return function api2(result2) {
    console.log('result2: ', result2);
    return function api3(result3) {
      console.log('result3: ', result3);
    };
  };
}

api(1)(2)(3);
