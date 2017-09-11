const buttons = Array.from(document.getElementsByTagName('button'));

function createHandler(name) {
  let count = 0;
  return () => {  /* The closure */
    count += 1;
    console.log(`${name} clicked ${count} times`);
  };
}

buttons.forEach((button) => {
  button.addEventListener('click', createHandler(button.innerHTML));
});
