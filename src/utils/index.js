export const validateEmail = (str) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(str).toLowerCase());
}

export const genUuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  ).slice(0, 5);
}

export const genRandomLetter = () => {
  let emptyString = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  while (emptyString.length < 1) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return emptyString;
}