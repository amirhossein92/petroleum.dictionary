import dictionaryService from "../service/dictionaryService.js";
import { showResult } from "../word/index.js";

let state = {
  currentWord: null,
};

const setState = (value) => {
  state = { ...state, ...value };
  console.log("updated...");
};

export const onSearch = async (e) => {
  e.preventDefault();
  const { currentWord } = state;
  try {
    const result = await dictionaryService.getWord(currentWord);
    showResult({ key: currentWord, value: result });
  } catch (error) {
    showResult({ key: currentWord, value: error.message });
  }
};

export const onInputChanged = (e) => {
  setState({
    currentWord: e.target.value,
  });
};
