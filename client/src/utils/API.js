import axios from 'axios'
export default {

createUser: function(user){
    return axios.post("/api/scraightUp/user-routes/add", user)
},

updateUser: function(id,user){
    return axios.put("/api/scraightUp/user-routes/" + id, user)
},

signIn: function (user) {
    return axios.post("/api/scraightUp/user-routes/signin", user)
},
logout: function (){
    return axios.post("/api/scraightUp/user-routes/logout")
},
createJob: function(job){
    return axios.post("/api/scraightUp/job-routes/add", job)
},
createTransaction: function(transaction){
    return axios.post("/api/scraightUp/budget-routes/add", transaction)
},
getJobInfo: function(job){
    return axios.get("/api/scraightUp/job-routes/", job)
}

}