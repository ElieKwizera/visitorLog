import express from "express";
import {checkin, checkout, getBookings, makeBooking} from "../controllers/visitors.js";


const router  = express.Router();

router.get("/bookings", getBookings);
router.post("/bookings", makeBooking);
router.get("/checkin", checkin);
router.get("/checkout", checkout);

export default  router;
