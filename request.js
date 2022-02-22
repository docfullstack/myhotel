class Request {
    constructor(id, min_beds, is_smoker, checkin_date, checkout_date){
        
        this.id = id; 
        this.min_beds = min_beds;
         this.is_smoker= is_smoker;
         this.checkin_date=checkin_date;
         this.checkout_date=checkout_date;

    }

}

const obj = (id, min_beds, is_smoker, checkin_date, checkout_date)=>{
        
     return {
    min_beds : min_beds,
  is_smoker:is_smoker,
  checkin_date:checkin_date,
   checkout_date:checkout_date,
     }
}


const request1 = new Request(1, 2, true, new Date(),new Date())
const newObj = obj(1, 2, true, new Date(),new Date())
console.log(request1)
console.log(newObj)

