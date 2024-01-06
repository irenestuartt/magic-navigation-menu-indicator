const list = document.querySelectorAll('.list');
function activeClick(){
  list.forEach((itme) =>
  itme.classList.remove("active"));
  this.classList.add("active");
}
  list.forEach((item) =>
  item.addEventListener('click', activeClick));
