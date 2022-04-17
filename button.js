const actionCta = document.getElementById('cta');
const actionCta2 = document.getElementById('cta2');

actionCta.addEventListener('click', () => {
  window.location.href = "https://pay.kiwify.com.br/tpSkFE5"
});

actionCta2.addEventListener('click', () => {
  window.location.href = "https://pay.kiwify.com.br/tpSkFE5"
});

async function displayButton(){
  // alterar somente o numero dos minutos
  const minute = 21.02;
  const timeInMiliseconds = await convertMinutesToMiliseconds(minute);

  setTimeout(() => {
    actionCta.style.display = "flex";
    actionCta2.style.display = "flex";
  }, timeInMiliseconds);
}

async function convertMinutesToMiliseconds(minutes){
  const seconds = minutes * 60;

  const miliseconds = seconds * 1000;

  return miliseconds;
}

displayButton();
