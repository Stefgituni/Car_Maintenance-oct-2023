const maintenanceCheck = (ownCars) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const todayDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
  const currentDay = new Date(todayDate).getTime();
  const days = 1000 * 60 * 60 * 24;
  const daysLeft = 20;

  const typeOfColor = {
    red: { backgroundColor: "red" },
    white: { backgroundColor: "" },
    orange: { backgroundColor: "orange" },
  };
  function getDays(car, activity,color,daysL,text){
    console.log(car, activity,color,daysL)
    let date = new Date(activity);
    let calculatedDays = (date.getTime() - currentDay) / days;
    if (currentDay >= date.getTime()) {
        car[color] = typeOfColor.red;
        car[daysL] = (currentDay - date.getTime()) /days +" days past due";
      return;
    }
    car[color] = calculatedDays < daysLeft ? typeOfColor.orange : typeOfColor.white;
    if(car[color] === typeOfColor.orange) car[daysL] = calculatedDays + ` days left to ${text}!`
    else car[daysL] = calculatedDays + " days left"
    return car;
  }
  ownCars.map((car) => {
    const keysArray = Object.keys(car);
    keysArray.map((key) => {
      switch (key) {
        case "mileage": {
          if (Number(car.technicalService) - Number(car.mileage) <= 1000 && Number(car.technicalService) - Number(car.mileage) > 0) {
            car.colorMileage = typeOfColor.orange;
            car.leftKilometars = Number(car.technicalService) - Number(car.mileage) + " km left to Technical service!";
            return;
          }
          car.colorMileage = Number(car.mileage) >= Number(car.technicalService) ? typeOfColor.red : typeOfColor.white;
          if(car.colorMileage === typeOfColor.red) 
                car.leftKilometars = Number(car.mileage) - Number(car.technicalService) + " km driven over!";
          else  car.leftKilometars = Number(car.technicalService) - Number(car.mileage);
          break;
        }
        case "vehicleInspection": {
          let date = new Date(car.vehicleInspection);
          let calculatedDays = (date.getTime() - currentDay) / days
          if (currentDay >= date.getTime()) {
            car.colorVehicleInspection = typeOfColor.red;
            car.leftDaysVI = (currentDay - date.getTime()) /days +" days past due";
            return;
          }
          car.colorVehicleInspection = calculatedDays < daysLeft ? typeOfColor.orange : typeOfColor.white;
          if(car.colorVehicleInspection === typeOfColor.orange) car.leftDaysVI = calculatedDays + " days left to Vehicle inspection!"
          else car.leftDaysVI = calculatedDays + " days left"
          break;
        }
        case "carLiability": {
            const colorCarLiability="colorCarLiability";
            const leftDaysCL = "leftDaysCL";
            const carLiability = "Car liability"
            getDays(car,car.carLiability,colorCarLiability,leftDaysCL,carLiability)
        break;
        }
        case "casco": {
            const colorCarCasco="colorCasco";
            const leftDaysC = "leftDaysC";
            const carCasco = "Casco"
            getDays(car,car.casco,colorCarCasco,leftDaysC,carCasco)
        break;
        }
        case "vignette": {
            const colorCarVignette="colorVignette";
            const leftDaysV = "leftDaysV";
            const carVignette = "Vignette"
            getDays(car,car.vignette,colorCarVignette,leftDaysV,carVignette)
          break;
        }
      }
    });
  });
  return ownCars;
};
export default maintenanceCheck;
