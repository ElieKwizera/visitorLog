import Booking from "../models/Booking.js";
import {validateField} from "../utils/validation.js";


const getBookings = async (req, res ) => {
   try {
        const bookings  = await Booking.find();

       return res.status(200).json({
           success : true,
           data: "bookings"
       });
   }
   catch (err) {
       console.log(err);
       return res.status(500).json({
           success : false,
           error: "Something went wrong while fetching bookings"
       });
   }
}

const makeBooking  = async (req, res ) => {
    const {firstName, lastName, appointmentTime, email, host}  = req.body;

    if (!validateField(firstName))
    {
        return res.status(400).json({
            success : false,
            error: "First name is required"
        });
    }

    console.log(`firstname validation result : ${validateField(firstName)}` );
    if (!validateField(lastName))
    {
        return res.status(400).json({
            success : false,
            error: "Last name is required"
        });
    }
    if (!validateField(appointmentTime))
    {
        return res.status(400).json({
            success : false,
            error: "Appointment time is required"
        });
    }
    if (!validateField(email))
    {
        return res.status(400).json({
            success : false,
            error: "email is required"
        });
    }
    if (!validateField(host))
    {
        return res.status(400).json({
            success : false,
            error: "Host name is required"
        });
    }
    try {
        const newBooking = await Booking.create({firstName, lastName, appointmentTime, email, host});
        return res.status(201).json({
            success : true,
            data : newBooking
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success : false,
            error: "Something went wrong while storing booking"
        });
    }

}
const checkin  = async (req, res ) => {

}

const checkout  = async (req, res ) => {

}


export {getBookings, makeBooking, checkout, checkin};