const listItemClass = '.content-user-list__item';

const deleteButton = document.querySelector(
  '.content-user-list__button_delete'
);

const handleDeleteSelectedItems = () => {
  const listItems = document.querySelectorAll(listItemClass);
  listItems.forEach((listItem) => {
    const checkboxItem = listItem.querySelector('.content-user-list__checkbox');

    if (checkboxItem.checked) {
      listItem.remove();
    }
  });

  const listElementItems = document.querySelectorAll(
    '.content-user-list__item'
  );

  const listActionButtons = document.querySelectorAll(
    '.content-user-list__button'
  );

  if (listElementItems.length === 0) {
    listActionButtons.forEach((listActionButton) => {
      listActionButton.classList.add('content-user-list__button_disable');
    });
  }
};

deleteButton.addEventListener('click', handleDeleteSelectedItems);
