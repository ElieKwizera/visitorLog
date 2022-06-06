import Booking from "../models/Booking.js";
import {validateField} from "../utils/validation.js";
import qrCode from 'qrcode'


const getBookings = async (req, res ) => {
   try {
       const bookings  = await Booking.find();
       return res.status(200).json({
           success : true,
           data: bookings
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

        // send email containing QR code
        console.log(await qrCode.toString("http://localhost:5000/api/visitors/checkin/", {type: 'terminal'}))

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

const checkin = async (req, res ) => {
    const {id}  = req.body;
    if (validateField(id))
    {
        try {
            const booking  = await Booking.findById(id);
            if (!booking) {
                return res.status(404).json({
                    success: false,
                    message: "booking not found"
                });
            }
            booking.status = "CHECKED_IN"
            await booking.save();

            return res.status(200).json({
                success : true,
                data : booking
            });
        }
        catch (err) {
            return res.status(500).json({
                success : false,
                error: "Something went wrong while checking in "
            });
        }

    }
}


const checkout  = async (req, res ) => {
    const {id}  = req.body;
    if (validateField(id))
    {
        try {
            const booking  = await Booking.findById(id);
            if (!booking) {
                return res.status(404).json({
                    success: false,
                    message: "booking not found"
                });
            }
            booking.status = "CHECKED_OUT"
            await booking.save();

            return res.status(200).json({
                success : true,
                data : booking
            });
        }
        catch (err) {
            return res.status(500).json({
                success : false,
                error: "Something went wrong while checking in "
            });
        }

    }
}


export {getBookings, makeBooking, checkout, checkin};