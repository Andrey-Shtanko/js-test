const openFormbtn = document.querySelector(".open__btn");
const modal = document.querySelector(".backdrop");
const closeFormbtn = document.querySelector(".close-btn");
const form = document.querySelector(".form");
function onHandleOpen() {
  modal.classList.remove("is-hidden");
}
function onHandleClose() {
  modal.classList.add("is-hidden");
}
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, tel, mail },
  } = event.currentTarget;

  if (!name.validity.valid || !tel.validity.valid || !mail.validity.valid) {
    return alert(`Value must be more than 2 symbols`);
  }
  console.log(`UserName:${name.value}`);
  console.log(`UserTel:${tel.value}`);
  console.log(`UserMail:${mail.value}`);
  event.currentTarget.reset();
  alert(`Form submitted successfully `);
  onHandleClose();
}
openFormbtn.addEventListener("click", onHandleOpen);

closeFormbtn.addEventListener("click", onHandleClose);

form.addEventListener("submit", handleSubmit);
