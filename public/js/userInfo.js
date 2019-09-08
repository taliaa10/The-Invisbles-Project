const userInfo = async (
  name,
  user,
  dobMonth,
  dobDay,
  dobYear,
  age,
  gender,
  phoneNumber,
  familyName,
  firstName,
  spouse,
  mother,
  father,
  siblings,
  town,
  city,
  province,
  occupation,
  occupationYears,
  reference1
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/user-info',
      data: {
        name,
        user,
        dobMonth,
        dobDay,
        dobYear,
        age,
        gender,
        phoneNumber,
        familyName,
        firstName,
        spouse,
        mother,
        father,
        siblings,
        town,
        city,
        province,
        // university,
        // universityGradYear,
        // certification,
        // certificationYear,
        occupation,
        occupationYears,
        // occupation2,
        // occupation2Years,
        // skills,
        reference1
        // reference2,
        // admin
      }
    });

    if (res.data.status === 'success') {
      window.alert('success');
    }
  } catch (error) {
    window.alert(error);
  }
};

const userIntakeForm = document.querySelector('.auth--form');

if (userIntakeForm) {
  userIntakeForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const user = document.getElementById('user').value;
    const dobMonth = document.getElementById('dobMonth').value;
    const dobDay = document.getElementById('dobDay').value;
    const dobYear = document.getElementById('dobYear').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const familyName = document.getElementById('familyName').value;
    const firstName = document.getElementById('firstName').value;
    const spouse = document.getElementById('spouse').value;
    const mother = document.getElementById('mother').value;
    const father = document.getElementById('father').value;
    const siblings = document.getElementById('siblings').value;
    const town = document.getElementById('town').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    // const university = document.getElementById('university').value;
    // const universityGradYear = document.getElementById('universityGradYear').value;
    // const certification = document.getElementById('certification').value;
    // const certificationYear = document.getElementById('certificationYear').value;
    const occupation = document.getElementById('occupation').value;
    const occupationYears = document.getElementById('occupationYears').value;
    // const occupation2 = document.getElementById('occupation2').value;
    // const occupation2Years = document.getElementById('occupation2Years').value;
    // const skills = document.getElementById('skills').value;
    const reference1 = document.getElementById('reference1').value;
    // const reference2 = document.getElementById('reference2').value;
    // const admin = document.getElementById('admin').value;
    userInfo(
      name,
      user,
      dobMonth,
      dobDay,
      dobYear,
      age,
      gender,
      phoneNumber,
      familyName,
      firstName,
      spouse,
      mother,
      father,
      siblings,
      town,
      city,
      province,
      occupation,
      occupationYears,
      reference1
    );
  });
}
