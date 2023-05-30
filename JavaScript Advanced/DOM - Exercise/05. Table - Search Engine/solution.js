function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);
  const rows = document.querySelectorAll('tbody tr');

  function onClick() {
    const inputValueTOLower = document
      .getElementById('searchField')
      .value.toLowerCase();

    for (let row of rows) {
      const rowTexToLower = row.textContent.toLowerCase();

      if (rowTexToLower.includes(inputValueTOLower)) {
        row.setAttribute('class', 'select');
      } else {
        row.removeAttribute('class');
      }
    }
  }
}
