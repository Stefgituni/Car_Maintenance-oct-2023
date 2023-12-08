const maintenanceCheck = (ownCars) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const todayDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
  const currentDay = new Date(todayDate).getTime();
  const days = 1000 * 60 * 60 * 24;
  const daysLeft = 20;

  const typeOfColor = {
    red: { backgroundColor: "red" },
    white: { backgroundColor: "" },
    orange: { backgroundColor: "orange" },
  };
  ownCars.map((car) => {
    const keysArray = Object.keys(car);
    keysArray.map((key) => {
      switch (key) {
        case "mileage": {
          if (
            Number(car.technicalService) - Number(car.mileage) <= 1000 &&
            Number(car.technicalService) - Number(car.mileage) > 0
          ) {
            car.colorMileage = typeOfColor.orange;
            return;
          }
          car.colorMileage =Number(car.mileage) > Number(car.technicalService)? typeOfColor.red: typeOfColor.white;
          break;
        }
        case "vehicleInspection": {
          let date = new Date(car.vehicleInspection);
          if (currentDay >= date.getTime()) {
            car.colorVehicleInspection = typeOfColor.red;
            return;
          }
          car.colorVehicleInspection =
            (date.getTime() - currentDay) / days < daysLeft
              ? typeOfColor.orange
              : typeOfColor.white;
          break;
        }
        case "carLiability": {
          let date = new Date(car.carLiability);
          if (currentDay >= date.getTime()) {
            car.colorCarLiability = typeOfColor.red;
            return;
          }
          car.colorCarLiability =
            (date.getTime() - currentDay) / days < daysLeft
              ? typeOfColor.orange
              : typeOfColor.white;
          break;
        }
        case "casco": {
          let date = new Date(car.casco);
          if (currentDay >= date.getTime()) {
            car.colorCasco = typeOfColor.red;
            return;
          }
          car.colorCasco =
            (date.getTime() - currentDay) / days < daysLeft
              ? typeOfColor.orange
              : typeOfColor.white;
          break;
        }
        case "vignette": {
          let date = new Date(car.vignette);
          if (currentDay >= date.getTime()) {
            car.colorVignette = typeOfColor.red;
            return;
          }
          car.colorVignette =
            (date.getTime() - currentDay) / days < daysLeft
              ? typeOfColor.orange
              : typeOfColor.white;
          break;
        }
      }
    });
  });
  return ownCars;
};
export default maintenanceCheck;
