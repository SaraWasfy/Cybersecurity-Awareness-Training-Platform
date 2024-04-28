import http from "./http-common";

class SignUpService {
    
 signup(user) {
    return http.post("/signup", user);
  }
}
export default new SignUpService();