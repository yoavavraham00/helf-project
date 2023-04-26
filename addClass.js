let computersArray = [];

export class ComputerFactory {
  ramMemory;
  hardDiskSpace;
  screenName;
  computerCompany;
  constructor() {
    this.ramMemory = document.querySelector(".ram-memory").value;
    this.hardDiskSpace = document.querySelector(".hard-disk-space").value;
    this.screenName = document.querySelector(".screen-name").value;
    this.computerCompany = document.querySelector(".computer-company").value;
  }
  saveComputer() {
    const computer = {
      ramMemory: this.ramMemory,
      hardDiskSpace: this.hardDiskSpace,
      screenName: this.screenName,
      computerCompany: this.computerCompany,
    };
    computersArray.push(computer);
    localStorage.setItem("computers", JSON.stringify(computersArray));
    console.log("Computer saved!");
  }
  alertComputer() {
    const currentComputer = computersArray.shift();
    alert(
      `You have chosen a ${currentComputer.computerCompany} with ${currentComputer.ramMemory}, ${currentComputer.hardDiskSpace} and ${currentComputer.screenName}`
    );
  }
  eraseComputer() {
    computersArray = [];
    localStorage.setItem("computers", JSON.stringify(computersArray));
    console.log("Computer erased!");
    computersArray.splice(0, computersArray.length);
  }
}


  

// ramPrices = {
//   "4GB RAM": 69,
//   "8GB RAM": 99,
//   "16GB RAM": 180,
//   "32GB RAM": 260,
//   "64GB RAM": 450,
//   "128GB RAM": 629,
// };
// hardDiskPrices = {
//   "128GB Hard Disk": 99,
//   "256GB Hard Disk": 199,
//   "512GB Hard Disk": 280,
//   "1TB Hard Disk": 370,
//   "3TB Hard Disk": 540,
//   "6TB Hard Disk": 699,
// };
// screenPrices = {
//   "14 inch Display": 150,
//   "15 inch Display": 270,
//   "17 inch Display": 399,
//   "21 inch Display": 499,
//   "42 inch Display": 580,
//   "84 inch Display": 799,
// };
// computerCompanyPrices = {
//   "lenovo Trademark": 99,
//   "sony Trademark": 99,
//   "HP Trademark": 99,
//   "Apple Trademark": 199,
//   "Dell Trademark": 210,
//   "Intel Trademark": 250,
// };
//create a class that will calculate the price of the computer using the above prices:
// class ThePrices {
//   constructor() {
//     this.ramPrices = {
//       "4GB RAM": 69,
//       "8GB RAM": 99,
//       "16GB RAM": 180,
//       "32GB RAM": 260,
//       "64GB RAM": 450,
//       "128GB RAM": 629,
//     };
//     this.hardDiskPrices = {
//       "128GB Hard Disk": 99,
//       "256GB Hard Disk": 199,
//       "512GB Hard Disk": 280,
//       "1TB Hard Disk": 370,
//       "3TB Hard Disk": 540,
//       "6TB Hard Disk": 699,
//     };
//     this.screenPrices = {
//       "14 inch Display": 150,
//       "15 inch Display": 270,
//       "17 inch Display": 399,
//       "21 inch Display": 499,
//       "42 inch Display": 580,
//       "84 inch Display": 799,
//     };
//     this.computerCompanyPrices = {
//       "lenovo Trademark": 99,
//       "sony Trademark": 99,
//       "HP Trademark": 99,
//       "Apple Trademark": 199,
//       "Dell Trademark": 210,
//       "Intel Trademark": 250,
//     };
//   }
//   getRamPrice(ram) {
//     return this.ramPrices[ram];

//   }
//   getHardDiskPrice(hardDisk) {
//     return this.hardDiskPrices[hardDisk];
//   }
//   getScreenPrice(screen) {
//     return this.screenPrices[screen];
//   }
//   getComputerCompanyPrice(computerCompany) {
//     return this.computerCompanyPrices[computerCompany];
//   }
//   getTotalPrice(ram, hardDisk, screen, computerCompany) {
//     return (
//       this.getRamPrice(ram) +
//       this.getHardDiskPrice(hardDisk) +
//       this.getScreenPrice(screen) +
//       this.getComputerCompanyPrice(computerCompany)
//     );
//   }
// }


