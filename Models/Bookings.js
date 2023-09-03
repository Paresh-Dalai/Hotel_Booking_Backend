





const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
    {
        GuestName : {
           type:String,
           required : true
        },
        checkIn : {
            type : Date
        },
        checkOut : {
            type : Date
        }, 
        bookingDate : {
            type : Date,
            required : true
        },
        createdAt : {
            type : Date,
            immutable : true,
            default : () => {
                return Date.now(); 
            }
        },
        updatedAt : {
            type : Date,
            default : () => {
                return Date.now(); 
            }
        }
     
    }
)

module.exports = mongoose.model("Booking" , bookingSchema)