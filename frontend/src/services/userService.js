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
}

export default new UserService();
