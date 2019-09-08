const registration = async (
  name,
  dateOfBirth,
  age,
  gender,
  email,
  phoneNumber,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/registration',
      data: {
        name,
        dateOfBirth,
        age,
        gender,
        email,
        phoneNumber,
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

const signUpForm = document.querySelector('.form--signUp');

if (signUpForm) {
  signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const age = document.getElementById('age').value;
    const genderSelect = document.getElementById('genderSelect');
    const gender = genderSelect.options[genderSelect.selectedIndex].value;
    const emailAddress = document.getElementById('emailAddress').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    registration(
      name,
      dateOfBirth,
      age,
      gender,
      emailAddress,
      phoneNumber,
      password,
      passwordConfirm
    );
  });
}
