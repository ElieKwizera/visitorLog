import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
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
    },
    status : {
        type : String,
        enum: ["PENDING", "CHECKED_IN","CHECKED_OUT", "CANCELLED"],
        default: "PENDING"
    }

});

const Booking  = mongoose.model("Booking", BookingSchema);

export default Booking;