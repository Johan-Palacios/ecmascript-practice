const anotherFucntion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("F!");
    }
  });
};

anotherFucntion()
  .then((reponse) => console.log(reponse))
  .catch((err) => console.log(err));
