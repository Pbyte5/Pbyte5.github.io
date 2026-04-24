document.querySelector('.button').addEventListener('click', function () {
    console.log('click!');
    document.querySelector('.left-container').classList.toggle('show-nav');
    console.log(document.querySelector('.left-container').classList);
    this.classList.toggle('active');
});

w