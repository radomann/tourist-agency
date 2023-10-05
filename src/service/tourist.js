import { axiosInstance } from "../service/api"

class TouristServices {
    getAllDestinations = async url => await axiosInstance.get(url)
    getAllCategories = async () => await axiosInstance.get("/categories")
    getAllReservations = async () => await axiosInstance.get("/reservations")
    getAllTestimonials = async () => await axiosInstance.get("/testimonials")
}

export const touristServices = new TouristServices()