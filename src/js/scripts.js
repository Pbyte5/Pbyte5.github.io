document.querySelector('.button').addEventListener('click', function () {
    console.log('click!');
    document.querySelector('.left-container').classList.toggle('show-nav');
    console.log(document.querySelector('.left-container').classList);
    this.classList.toggle('active');
});

const welcomeEl = document.getElementById("welcome-text")
welcomeEl.innerText = "Welcome to Soft Paws! Try our new black mode option!";

setTimeout(() => {
    welcomeEl.style.opacity = "0";
}, 6000);

window.onload = () => {
    document.getElementById("welcome-text").style.opacity = "1";
  };

const btn = document.getElementById('color-toggle')

btn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = "Light mode";
    } else {
        btn.textContent = "Dark mode";
    }
});