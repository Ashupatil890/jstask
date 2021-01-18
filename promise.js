var add = function(x, y) {
  return new Promise((resolve,reject) => {
    var sum = x + y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("Could not add the two values!"));
    }
  });
};

var subtract = function(x, y) {
  return new Promise((resolve, reject) => {
    var sum = x - y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("Could not subtract the two values!"));
    }
  });
};



add(2,2)
  .then((added) => {
    console.log("added1 " +added)
    return subtract(added, 3);
  })
  .then((subtracted) => {
    console.log("subtracted " +subtracted)
    return add(subtracted, 5);
  })
  .then((added) => {
    console.log("added2 " +added)
    return added * 2;    
  })
  .then((result) => {
    console.log("My result is ", result);
  })
  .catch((err) => {
    console.log(err);
  });