import express from "express";
import {getBookings, makeBooking} from "../controllers/visitors.js";


const router  = express.Router();

router.get("/bookings", getBookings);
router.post("/bookings", makeBooking);

export default  router;
