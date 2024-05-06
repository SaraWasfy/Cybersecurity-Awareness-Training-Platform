import http from "./http-common";

class UserService {
  login(user) {
    //console.log(user);
    return http.post("/login", user);
  }
  
  getPassword(id) {
    return http.get(`/${id}/getPassword`);
  }

  logout() {
    return http.get("/logout");
  }

  getProfile() {
    return http.get(`/profile`);
  }

  addPoints() {
    return http.post(`/account/addPoints`);
  }

  addtrophie() {
    return http.post(`/account/addtrophie`);
  }

  getTrophie() {
    return http.get(`/account/getTrophie`);
  }

  addspot100() {
    return http.post(`/account/addspot100`);
  }

  getspot100() {
    return http.get(`/account/getspot100`);
  }

  addstar() {
    return http.post(`/account/addstar`);
  }

  getstar() {
    return http.get(`/account/getstar`);
  }

  addquiz100() {
    return http.post(`/account/addquiz100`);
  }

  getquiz100() {
    return http.get(`/account/getquiz100`);
  }
  getUsers(){
    return http.get(`/account/getUsers`);
  }
  
}

export default new UserService();
