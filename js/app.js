// let color = Math.random();
// color = Math.random().toString(16).substring(2 , 8);


const hexColor = document.querySelector('.hex');
const newColor = document.querySelector('#new-color');

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2 , 8);
    document.body.style.backgroundColor = '#' + randomColor;
    hexColor.innerText = '#' + randomColor;
}

newColor.addEventListener('click', generateColor);
