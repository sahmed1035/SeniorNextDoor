import axios from "axios";

export default {
  // Gets all services
  getServices: function() {
    return axios.get("/api/services");
  },
  // Gets the service with the given id
  getTheServices: function(query) {
    return axios.get("/api/services/" + query);
  },
  // Deletes the service with the given id
  deleteService: function(id) {
    return axios.delete("/api/services/" + id);
  },
  // Saves a service to the database
  saveService: function(serviceData) {
    return axios.post("/api/services", serviceData);
  },
  // Save Google profile information to the database
  saveGoogle: function(googleData) {
    return axios.post("/api/googlesignin", googleData);
  }
};