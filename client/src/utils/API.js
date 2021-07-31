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
// createJob: function(job){
//     return axios.post("/api/scraightUp/job-routes/add", job)
// },
// createTransaction: function(transaction){
//     return axios.post("/api/scraightUp/budget-routes/add", transaction)
// }

}