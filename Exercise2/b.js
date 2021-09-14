const api = (result) => {
  return new Promise((resolve) => {
    resolve(result);
  });
};
api(1).then((result) => console.log('result:', result));
api(2).then((result) => console.log('result2:', result));
api(3).then((result) => console.log('result3:', result));
