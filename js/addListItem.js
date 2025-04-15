const listForm = document.querySelector('.form-user-list');

const listElement = document.querySelector('.content-user-list__items');

const listElementItems = document.querySelectorAll('.content-user-list__item');

const listActionButtons = document.querySelectorAll(
  '.content-user-list__button'
);

if (listElementItems.length === 0) {
  listActionButtons.forEach((listActionButton) => {
    listActionButton.classList.add('content-user-list__button_disable');
  });
}

const addItemToList = (list, content) => {
  const li = document.createElement('li');
  li.classList.add('content-user-list__item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('content-user-list__checkbox');
  const checkboxId = 'checkbox-' + Date.now();
  checkbox.id = checkboxId;

  const label = document.createElement('label');
  label.setAttribute('for', checkboxId);
  label.classList.add('content-user-list__checkbox-label');
  label.textContent = content;

  li.appendChild(checkbox);
  li.appendChild(label);

  if (!list.querySelector('li')) {
    listActionButtons.forEach((listActionButton) => {
      listActionButton.classList.remove('content-user-list__button_disable');
    });
  }

  list.prepend(li);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const inputField = e.target.elements['key-value-input'];
  const errorMessage = listForm.querySelector(
    '.form-user-list__validate-error'
  );

  const inputValue = inputField.value.trim();

  const regex = /^[a-zA-Z]+\s*=\s*[a-zA-Z]+$/;

  if (!regex.test(inputValue)) {
    errorMessage.textContent =
      'Error: Please enter the Name=Value pair in the correct format without any symbols or digits (name=value).';
    errorMessage.style.display = 'inline-block';
    return;
  }

  errorMessage.style.display = 'none';
  inputField.value = '';

  const formattedInputValue = inputValue.replace(/\s*=\s*/g, '=');

  addItemToList(listElement, formattedInputValue);
};

listForm.addEventListener('submit', handleSubmit);
