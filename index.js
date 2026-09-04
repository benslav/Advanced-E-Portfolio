

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_zgicakc',
      'template_rpnsm8u',
      event.target,
      'NWpcDwY1S5_0zzPCr'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly on bengine16@gmail.com"
    );
  })
}