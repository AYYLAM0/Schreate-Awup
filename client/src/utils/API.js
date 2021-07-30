import axios from 'axios'
export default {

createUser: function(user){
    return axios.post("/api/scraightUp/register", user)
},

updateUser: function(id,user){
    return axios.put("/api/scraightUp/user/" + id, user)
},

signIn: function (user) {
    return axios.post("/api/scraightUp/signin", user)
}

}