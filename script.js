const block = document.querySelector('.block');

block.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName != 'BUTTON') return;

    if (target.classList.contains('open')) {
        target.classList.toggle('open');
        target.innerText = '+';
    }  else {
        target.classList.add('open');
        target.innerText = '- Стадион';
    }
    console.log(target.innerText);
});