class Reservations {
    constructor(room_id, checkin_date, checkout_date, total_charge){
        return {"room_id": room_id,
            "checkin_date":  checkin_date,
            "checkout_date": checkin_date,
            "total_charge":  total_charge
    }
    }
}

const reservations= (room_id, checkin_date, checkout_date, total_charge) =>{
    return {
           "room_id": room_id,
            "checkin_date":  checkin_date,
            "checkout_date": checkout_date,
            "total_charge":  total_charge

    }
}

const res1 = reservations(`testId`, new Date(), new Date(), 500);
const res2 = new Reservations(`test2`, new Date(), new Date(), 800)
 console.log(res1);
 console.log(res2);
 
