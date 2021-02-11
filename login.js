function onCheck(username) {
    fetch('http://localhost:8080/user/' + username, {
        method: 'GET',

    })
        .then(response => response.json())
        .then(result => {

            isAuthorized(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

function isAuthorized(result) {

    console.log('First Name', result.firstName);
    console.log('First Name', result.memberGroupsList[0]);
    console.log('First Name', result.memberGroupsList[1]);

    let memberGroup = result.memberGroupsList[0].split(",")

    console.log(memberGroup[0])


    if (memberGroup[0] === "cn=G-EXT-GA-PHARMACEUTICAL_DISTRIBUTION__ACUTE_CARE__ACUTE_CARE_ORDERING__ADMIN") {
        localStorage.setItem('username', result.firstName);
        window.location.href = "/content.html"
    } else {
        alert("unathorized")
    }



}