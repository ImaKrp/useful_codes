/*Selecionado*/
function getSelectedValue(id) {
  const select = document.getElementById(id);
  return Number(select.options[select.selectedIndex].value);
}
/*Marcado*/
function getCheckedRadio(id) {
  return document.getElementById(id).checked;
}
/*InputNumber*/
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

const returnButton = document.querySelectorAll("header button");

returnButton.forEach((button) => {
  button.addEventListener("click", close);
});

function close() {
  document.querySelector(".active").classList.remove("active");
}
