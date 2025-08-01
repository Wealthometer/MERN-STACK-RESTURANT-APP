import { ErrorHandler } from "../error/error.js";
import { Reservation } from "../model/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firsName, lastName, email, phone, date, time } = req.body;
    if ( !firsName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please Fill The Full Reservation Form", 400));
    }
    try {
        await Reservation.create( firsName, lastName, email, phone, date, time );
        res.status(200),
        json({
            success : true,
            message : "Reservation Sent Succesfullly"
        })
    } catch (error) {
        if (error.name === "s" ) {
            const ValidationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
             return next(new ErrorHandler(ValidationErrors.join(" , "), 400));
        }
    }
}; 