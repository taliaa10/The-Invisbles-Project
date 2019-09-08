const registration = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/registration',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      window.alert('success');
    }
  } catch (error) {
    window.alert(error);
  }
};

const signUpForm = document.querySelector('.auth--form');

if (signUpForm) {
  signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    registration(name, emailAddress, password, passwordConfirm);
  });
}
