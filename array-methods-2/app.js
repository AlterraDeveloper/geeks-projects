const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

colors.map((color, index) => {
    const div = document.createElement('div');
    div.classList.add('color-box');
    div.textContent = index + 1;
    document.querySelector('.container').appendChild(div);
});
