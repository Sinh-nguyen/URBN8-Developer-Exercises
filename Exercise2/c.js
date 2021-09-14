const api = async (result) => {
    let init = await result
    return init
  };
  api(1)
    .then(result => console.log('result:', result))
  api(2)
    .then(result => console.log('result2:', result))
  api(3)
    .then(result => console.log('result3:', result))