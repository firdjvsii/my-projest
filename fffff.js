const allInf = { store: [] };

function AddUs(name, job, num) {
  const obj = {
    id: Date.now(),
    name: name,
    job: job,
    num: num,
  };
  return obj;
}

const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const numInput = document.getElementById('num');
const addBtn = document.getElementById('addBtn');
const clear = document.getElementById('clear');
const out = document.getElementById("out");

function validateForm() {
  const nameVal = nameInput.value.trim();
  const jobVal = jobInput.value.trim();
  const numVal = numInput.value.trim();

  const letterRegExp = /^[A-Za-zА-Яа-яЁё\s]+$/;
  const numberRegExp = /^\d+$/;

  if (nameVal === '') {
    alert('надо заполнить все !');
    return false;
  }
  if (!letterRegExp.test(nameVal)) {
    alert('надо заполнить правильно!');
    return false;
  }

  if (jobVal === '') {
    alert('надо заполнить  все!');
    return false;
  }
  if (!letterRegExp.test(jobVal)) {
    alert('надо заполнить правильно !');
    return false;
  }

  if (numVal === '') {
    alert('надо заполнить правильно !');
    return false;
  }
  if (!numberRegExp.test(numVal)) {
    alert('надо заполнить правильно !');
    return false;
  }

  return true;
}

function render() {
  out.innerHTML = allInf.store.map(u => `<p>${u.name} | ${u.job} | ${u.num} </p>`).join('');
}

addBtn.addEventListener('click', () => {
  if (!validateForm()) {
    return;
  }

  allInf.store.push(AddUs(nameInput.value.trim(), jobInput.value.trim(), numInput.value.trim()));
  console.log(allInf.store);

  render();

  nameInput.value = '';
  jobInput.value = '';
  numInput.value = '';
});

clear.addEventListener("click", () => {
  allInf.store = [];
  console.log(allInf.store);

  nameInput.value = '';
  jobInput.value = '';
  numInput.value = '';

  render();
});
function deleteItem(id) {
  allInf.store = allInf.store.filter(x => x.id !== id);
  render();
}