

const innInput = document.getElementById('inn-input');
const detectBtn = document.getElementById('detect');
const avatarImg = document.getElementById('avatar');
const infoBlock = document.getElementById('info-block');

innInput.addEventListener('input', () => {
    const inn = innInput.value.trim();
    if (inn.length === 14 && [0, 1, 2].includes(Number(inn[0]))) {
        detectBtn.classList.remove('hidden');
    } else {
        detectBtn.classList.add('hidden');
        avatarImg.src = './images/error.png';
        infoBlock.classList.add('hidden');
    }
});

detectBtn.addEventListener('click', () => {
    const inn = innInput.value.trim();

    const year = inn.substring(5, 9);
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(year);
    infoBlock.textContent = `Возраст: ${age}`;
    infoBlock.classList.remove('hidden');

    const firstDigit = Number(inn[0]);
    switch (firstDigit) {
        case 0:
            avatarImg.src = './images/company.png';
            avatarImg.style.boxShadow = '0 0 0px 5px #666';
            avatarImg.parentElement.previousElementSibling.style.backgroundColor = '#666';
            infoBlock.style.backgroundColor = '#666';
            break;
        case 1:
            avatarImg.src = './images/woman.png';
            avatarImg.style.boxShadow = '0 0 0px 5px #ca20c5';
            avatarImg.parentElement.previousElementSibling.style.backgroundColor = '#ca20c5';
            infoBlock.style.backgroundColor = '#ca20c5';
            break;
        case 2:
            avatarImg.src = './images/man.png';
            avatarImg.style.boxShadow = '0 0 0px 5px #106ecb';
            avatarImg.parentElement.previousElementSibling.style.backgroundColor = '#106ecb';
            infoBlock.style.backgroundColor = '#106ecb';
            break;
    }
})