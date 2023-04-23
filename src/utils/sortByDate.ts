export function sortPostByPubDate(descending: boolean = true) {
  if (descending) {
    return function (a, b) {
      // use + to coerce to number
      return +b.data.pubDate.valueOf() - +a.data.pubDate.valueOf();
    };
  }
  return function (a, b) {
    return +a.data.pubDate.valueOf() - +b.data.pubDate.valueOf();
  };
}

export function sortPostByUpdateDate(descending: boolean = true) {
  if (descending) {
    return function (a, b) {
      // use + to coerce to number
      return +b.data.updateDate?.valueOf() - +a.data.updateDate?.valueOf();
    };
  }
  return function (a, b) {
    return +a.data.updateDate.valueOf() - +b.data.updateDate.valueOf();
  };
}
