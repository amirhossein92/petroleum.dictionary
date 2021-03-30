const getWrapper = () => {
  return document.getElementById("result-section");
};

export const showResult = (word) => {
  const wrapper = getWrapper();
  wrapper.innerHTML = getWordRender(word);
};

const getWordRender = (word) =>
  `<div class="word-wrapper">
    <p>${word.key}<p>
    <p>${word.value}</p>
</div>`;
