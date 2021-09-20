let count=0;
const counter = document.getElementById('counter')
document.getElementById('btn-animation').addEventListener('click',event =>
{
    const c1=counter.classList;
    const c= 'animated-counter';
    count++;

    counter.innerText = count;
    c1.remove(c,c1.contains(c));
    setTimeout(() =>
    counter.classList.add('animated-counter')
    ,5)
})