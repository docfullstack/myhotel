const roomsAvailable = (id, num_beds , allow_smoking, daily_rate, cleaning_fee)=>{
    return {
        id: id,
      num_beds:  num_beds,
      allow_smoking: allow_smoking,
      daily_rate: daily_rate,
      cleaning_fee: cleaning_fee}

}
const newRoom = roomsAvailable("2e449273-48bb-4503-bf4e-a78f0885377c",1, false, 45, 14)
/*id: "2e449273-48bb-4503-bf4e-a78f0885377c",
      num_beds: 1,
      allow_smoking: false,
      daily_rate: 45,
      cleaning_fee: 14}*/

      console.log(newRoom)

      const test = {
        "id": "91754a14-4885-4200-a052-e4042431ffb8",
        "num_beds": 1,
        "allow_smoking": true,
        "daily_rate": 30,
        "cleaning_fee": 10
      }
      console.log(test)

