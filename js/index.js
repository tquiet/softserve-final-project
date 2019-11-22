let userName = document.querySelector('.user-name'),
    userNumber = document.querySelector('.user-number'),
    userQuestion = document.querySelector('.user-question'),
    btnSave = document.querySelector('.btn-submit'),
    btnLoad = document.querySelector('.btn-load');

btnSave.onclick = (event) => {
    event.preventDefault();
    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('user-number',
        userNumber.value);
    localStorage.setItem('user-question',
        userQuestion.value);
    userName.value = '';
    userNumber.value = '';
    userQuestion.value = '';
};

btnLoad.onclick = () => {
    event.preventDefault();
    userName.value = localStorage.getItem('user-name');
    userNumber.value = localStorage.getItem('user-number');
    userQuestion.value = localStorage.getItem('user-question');
};