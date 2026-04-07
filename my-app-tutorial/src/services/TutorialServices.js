import http from "../http-common";

class TutorialDataService {

  getAll = () => {
    return http.get("/tutorials");
  };

}

export default new TutorialDataService();