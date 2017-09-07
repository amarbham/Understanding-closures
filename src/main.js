const buttons = Array.from(document.getElementsByTagName('button'));

function createCount(name) {
  let count = 0;
  return () => {
    count += 1;
    return `${name} clicked ${count} times`;
  };
}

function createHandler(name) {
  return () => {
    createCount(name);
  };
}

buttons.forEach((button) => {
  button.addEventListener('click', createHandler(button.innerHTML));
});
