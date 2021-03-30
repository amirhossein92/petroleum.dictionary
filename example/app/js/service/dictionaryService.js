const url = "https://amirhossein92.github.io/petroleum.dictionary/persian.json";
let dictionary = [];

fetch(url)
  .then((res) => res.json())
  .then((res) => (dictionary = res));

export default {
  getWord: (word) =>
    new Promise((resolve, reject) => {
      if (Object.keys(dictionary).some((q) => q == word)) {
        resolve(dictionary[word]);
      }
      reject(new Error("لغت پیدا نشد..."));
    }),
};
