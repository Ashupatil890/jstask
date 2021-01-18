function messenger(msg) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(msg);
    }, 5000);
  });
}

async function promFunc() {
  const prom1 = await messenger("The glass is half");
  console.log(prom1);
}

promFunc();