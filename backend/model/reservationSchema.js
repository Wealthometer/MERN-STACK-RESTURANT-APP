import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true,
        minLenght : [3, 'First Name must consist of at least 3 characters!'],
        maxLenght : [30, 'First Name cannot exceed 30 characters!']
    },
    lastName : {
        type : String,
        require : true,
        minLenght : [3, 'Last Name must consist of at least 3 characters!'],
        maxLenght : [30, 'Last Name cannot exceed 30 characters!']
    },
    email : {
        type : String,
        require: true,
        validate : [validator.isEmail, "Provide a valid Email"]
    },
    phone : {
        type : String, 
        require : true,
        minLenght : [11, 'Phone Number Must Only Contain Only 11 Digits ..!'],
        maxLenght : [11, 'Phone Number Must Only Contain Only 11 Digits ..!']
    },
    time : {
        type : String,
        require : true
    },
    date : {
        type : String,
        require : true
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);