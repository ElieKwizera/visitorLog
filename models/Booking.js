import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "Please enter the first name"]
    },
    lastName : {
        type : String,
        required : [true, "Please enter the last name"]
    } ,
    email : {
        type : String,
        required : [true, "Please enter your email"]
    },
    appointmentTime : {
        type : String,
    },
    host : {
        type : String
    }
});

const Booking  = mongoose.model("Booking", BookingSchema);

export default Booking;