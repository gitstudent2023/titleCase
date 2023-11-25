function titleCase(title, minorWords) {
  if (title.trim().length) {
    const wordsArray = title.split(' ').map(item => item.toLowerCase());
    if (minorWords) {
      const minorWordsArray = minorWords.split(' ').map(item => item.toLowerCase());
      const result = wordsArray.map((item, index) => {
        if (minorWordsArray.includes(item) && !!index) {
          return item;
        }
        return item = item[0].toUpperCase() + item.slice(1, item.length);
      });
      return console.log(result.join(' '));
    }
    return console.log(wordsArray.map(item => item = item[0].toUpperCase() + item.slice(1, item.length)).join(' '));
  }
  return console.log(title);
}

titleCase('the quick brown fox');