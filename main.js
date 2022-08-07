const url = "http://localhost:5500/api" 

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error=>console.error(error))
}

const newUser = {
     name: "Lorem Ipsum",
     avatar: "https://source.unsplash.com/300x300", 
     city: "New York"
}

function getUser(){
    axios.get("http://localhost:5500/api/2")
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
}

function updateUser(id, userUpdate){
    axios.put(`${url}/${id}`, userUpdate)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdate = {
    name: "Guest",
    avatar: "https://source.unsplash.com/300x300",
    city: "Dallas"
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//deleteUser(4)
//updateUser(3, userUpdate)
//getUsers()
//getUser()
//addNewUser();
