import { axiosInstance } from "../service/api";

class TouristServices {
  getAllDestinations = async (url) => await axiosInstance.get(url);
  getAllCategories = async () => await axiosInstance.get("/categories/");
  getAllReservations = async () => await axiosInstance.get("/reservations/");
  getAllTestimonials = async () => await axiosInstance.get("/testimonials/");

  getSingleDestination = async (id) =>
    await axiosInstance.get(`/destinations/${id}`);
  getSingleCategory = async (id) =>
    await axiosInstance.get(`/categories/${id}`);
  getSingleTestimonial = async (id) =>
    await axiosInstance.get(`/testimonials/${id}`);

  submitDestination = async () => await axiosInstance.post("/destinations/");
  submitCategory = async () => await axiosInstance.post("/categories/");
  submitTestimonial = async () => await axiosInstance.post("/testimonials/");

  editDestination = async () => await axiosInstance.put("/destinations/");
  editCategory = async () => await axiosInstance.put("/categories/");
  editTestimonial = async () => await axiosInstance.put("/testimonials/");

  deleteDestination = async (id) =>
    await axiosInstance.delete(`/destinations/${id}/`);
  deleteCategory = async (id) =>
    await axiosInstance.delete(`/categories/${id}/`);
  deleteTestimonial = async (id) =>
    await axiosInstance.delete(`/testimonials/${id}/`);

  // getUserDetail = async data => await axiosInstance.get('/api/user/profile/',{ headers: {'Authorization': 'Bearer ' + data}});
  getUserDetail = async () => await axiosInstance.get("/api/user/profile/");
  putUserData = async (data) =>
    await axiosInstance.put("/api/user/profile/", data);
}

export const touristServices = new TouristServices();
