const extractNameValue = (text) => {
  const [name, value] = text.split('=');
  return { name, value };
};

const sortItemsBy = (criteria = 'name') => {
  const listItems = document.querySelectorAll('.content-user-list__item');

  const itemsArray = Array.from(listItems);

  itemsArray.sort((a, b) => {
    const labelA = a.querySelector(
      '.content-user-list__checkbox-label'
    ).innerText;

    const labelB = b.querySelector(
      '.content-user-list__checkbox-label'
    ).innerText;

    const { name: nameA, value: valueA } = extractNameValue(labelA);
    const { name: nameB, value: valueB } = extractNameValue(labelB);

    if (criteria === 'name') {
      return nameB.localeCompare(nameA);
    } else if (criteria === 'value') {
      return valueB.localeCompare(valueA);
    }
  });

  const userList = document.querySelector('.content-user-list__items');
  itemsArray.forEach((item) => userList.appendChild(item));
};

const sortByNameButton = document.querySelector(
  '.content-user-list__button_sort-name'
);

const sortByValueButton = document.querySelector(
  '.content-user-list__button_sort-value'
);

sortByNameButton.addEventListener('click', () => {
  sortItemsBy('name');
});

sortByValueButton.addEventListener('click', () => {
  sortItemsBy('value');
});
