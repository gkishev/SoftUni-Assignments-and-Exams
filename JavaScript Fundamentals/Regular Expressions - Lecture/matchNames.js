function matchNames(data) {
  let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}.[a-z]{1,}/g;
  let match = pattern.exec(data);
  let res = [];
  while (match !== null) {
    res.push(match[0]);

    match = pattern.exec(data);
  }
  console.log(res.join(' '));
}

matchNames(
  'ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov'
);
