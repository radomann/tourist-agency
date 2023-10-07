import { axiosInstance } from "../service/api"

class TouristServices {

    getAllDestinations = async url => await axiosInstance.get(url)
    getAllCategories = async () => await axiosInstance.get("/categories/")
    getAllReservations = async () => await axiosInstance.get("/reservations/")
    getAllTestimonials = async () => await axiosInstance.get("/testimonials/")

    // getUserDetail = async data => await axiosInstance.get('/api/user/profile/',{ headers: {'Authorization': 'Bearer ' + data}});
    getUserDetail = async () => await axiosInstance.get('/api/user/profile/');
    putUserData = async (data) => await axiosInstance.put('/api/user/profile/', data);
}

export const touristServices = new TouristServices()