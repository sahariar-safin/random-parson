fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];

        const name = user.name;
        // document.getElementById('name').innerHTML = `${ name.title } ${ name.first } ${ name.last }`
        document.getElementById('picture').src = user.picture.large;
        document.getElementById('into').innerText = 'My name is:';
        document.getElementById('info').innerText = `${ name.title } ${ name.first } ${ name.last }`;

        //  for name
        const namelIcon = document.getElementById('name');
        namelIcon.addEventListener('mousemove', function () {
            document.getElementById('into').innerText = 'My name is:';
            document.getElementById('info').innerText = `${ name.title } ${ name.first } ${ name.last }`;
        })
        // for email
        const emailIcon = document.getElementById('email');
        emailIcon.addEventListener('mousemove', function () {
            document.getElementById('into').innerText = 'My email is:';
            document.getElementById('info').innerText = user.email;
        })
        // for address
        const locationIcon = document.getElementById('address');
        locationIcon.addEventListener('mousemove', function () {
            document.getElementById('into').innerText = 'My address is:';
            document.getElementById('info').innerText = `${ user.location.city }, ${ user.location.postcode }`;
        })
        // for date of birth
        const dateOfBirthIcon = document.getElementById('bateOfBirth');
        dateOfBirthIcon.addEventListener('mousemove', function () {
            document.getElementById('into').innerText = 'My birth day is:';
            document.getElementById('info').innerText = (user.dob.date).split('T')[0];
        })
        // for age
        const ageIcon = document.getElementById('age');
        ageIcon.addEventListener('mousemove', function () {
            document.getElementById('into').innerText = 'My age is:';
            document.getElementById('info').innerText = user.dob.age;
        })
    })