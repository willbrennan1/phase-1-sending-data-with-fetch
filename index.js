// Add your code here

let body = document.querySelector("body")

const userInfo = {
    name: "Steve",
    email: "steve@steve.com"
}

const configurationObject = {
    method: "POST",
    headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    },
    body: JSON.stringify(userInfo)
}

function submitData(userName, userMail) {
    return fetch('http://localhost:3000/users', configurationObject)
        .then(resp => resp.json())
        .then(data => { 
            body.append(data.id)
        })
        .catch((error) => {
            body.append(error)
        })
}

