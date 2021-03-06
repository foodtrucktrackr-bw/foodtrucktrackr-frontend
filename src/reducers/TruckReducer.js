// import { ADD_TRUCK, UPDATE_TRUCK, DELETE_TRUCK } from "../actions";

const initialTruckState = {
    averageRating: null,
    foodItems: [],
    id: null,
    latitude: null,
    location_address: "",
    location_city: "",
    location_state: "",
    location_zip_code: "",
    longitude: null,
    operator_id: null,
    price_range: null,
    truck_arrival_time: "",
    truck_cuisine_type: "",
    truck_departure_time: "",
    truck_description: "",
    truck_id: null,
    truck_name: "",
    truck_photo: null,
    userRating: null,
};

export const truckReducer = (state = initialTruckState, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "TRUCK_START":
            return { ...state, isLoading: true };
        case "TRUCK_SUCCESS":
            return { ...state, isLoading: false };
        case "TRUCK_FAIL":
            return { ...state, isLoading: false };
        case "EDIT_TRUCK_SETUP":
            // console.log("#$# EDIT PAYLOAD", action.payload);
            return {
                id: action.payload.id,
                truck_name: action.payload.truck_name,
                truck_departure_time: action.payload.truck_departure_time,
                truck_arrival_time: action.payload.truck_arrival_time,
                user_id: action.payload.user_id,
                location_zip_code: action.payload.location_zip_code,
                location_city: action.payload.location_city,
                location_address: action.payload.location_address,
                location_state: action.payload.location_state,
                truck_rating: action.payload.truck_rating,
                truck_cuisine_type: action.payload.truck_cuisine_type,
                truck_description: action.payload.truck_description,
                food_items: [],
            };
        case "UPDATE_OWNER":
            return { ...state, userId: action.payload };
        default:
            return state;
    }
};
