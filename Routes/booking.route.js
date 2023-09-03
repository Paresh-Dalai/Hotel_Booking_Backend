




const bookingController = require("./../Controller/Booking.controller");

module.exports = function(app){
    app.post("/hotels/api/v1/createBooking" , bookingController.createBooking)
    app.get("/hotels/api/v1/allBookings"  , bookingController.getAllBookings)
    app.get("/hotels/api/v1/Bookings/:Date" , bookingController.getBookingByDate)
    app.put("/hotels/api/v1/Bookings/:bookingId" ,bookingController.updateBooking)
 }
 