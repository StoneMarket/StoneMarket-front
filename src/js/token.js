const headerSignInLink = document.querySelector('#headerSignInLink');
const headerUserProfile = document.querySelector('#headerUserProfile');


const setToken = (value = null) => {
    localStorage.setItem('token', value);
}

const checkToken = () => {
    const userToken = localStorage.getItem('token');

    if (userToken == 'null') {
        headerUserProfile.classList.add('display-none');
    } else {
        headerSignInLink.classList.add('display-none');
    }
}

const removeToken = () => {
    localStorage.removeItem('token');
}


setToken();
checkToken();