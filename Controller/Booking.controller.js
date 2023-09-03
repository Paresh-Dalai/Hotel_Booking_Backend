




const bookingModel = require("./../Models/Bookings") 


const createBooking = async (req,res) => {
     
    const bookingObject = {
        GuestName : req.body.GuestName,
        checkIn : req.body.checkIn,
        checkOut : req.body.checkOut,
        bookingDate : req.body.bookingDate
    }

    if(!bookingObject.checkIn || !bookingObject.checkOut) {
        bookingObject.checkIn = bookingObject.bookingDate,
        bookingObject.checkOut = bookingObject.bookingDate
    }

    try {

        if (!bookingObject.GuestName || !bookingObject.bookingDate) {
            res.send("Please Fill Required Fields For Successfully Create A Booking..").status(400)
        } 
        else if (bookingObject) {
            await bookingModel.create(bookingObject)
            res.send("One Bookinng is successfully created for - " + bookingObject.GuestName).status(201)
        }

    } catch (error) {
         console.log("Error occured in bookingCreatio - " + error);
    }
   
}

const getAllBookings = async (req,res) => {
     
    try {

        let allBookings = await bookingModel.find();

        if(allBookings) {
             res.send(allBookings).status(201)
        } else if (!allBookings) {
              res.send("No Bookins Found...").status(200)
        }

    } catch (eror) {
         console.log("Error occured - " + eror)
    }
}

const getBookingByDate = async (req,res) => {
     
    let enteredDate = req.params.Date;

    try {

        if(enteredDate) {
          let foundBooking = await bookingModel.find(
                {
                    bookingDate : enteredDate
                }
             )
             if(foundBooking){
                res.send(foundBooking).status(201)
             }else {
                res.send("No Booking Found...").status(200)
             }

             
        } else if (!enteredDate) {
             res.send("Please Provide A Date for search Booking...").status(200)
        }

    } catch (error) {
        console.log("Error Occured... - " + error)
        res.send("error occured..." + error).status(500)
    }
}

const updateBooking = async (req,res) => {
     
     let enteredBookingId = req.params.bookingId
    
    try {
        let foundBooking = await bookingModel.findOneAndUpdate(
            {_id : enteredBookingId},
            { 
             checkIn : req.body.checkIn,
             checkOut : req.body.checkOut
            }).exec();

            if(foundBooking){
                res.send("One Of Your Booking Updated Successfully...").status(201)
            }

         if(!foundBooking) {
            res.send("No Booking found against entered bookingId...").status(200)
        }

     }
    catch (error) {
         console.log("Error occured " + error.message);
         res.send("error occured..." + error.message).status(500)
     }
}

module.exports = {createBooking,getAllBookings,getBookingByDate,updateBooking}