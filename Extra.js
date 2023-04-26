import { ComputerFactory } from './addClass.js';
import { ComputerScreen } from './addClass2.js';
export 
class ThePrices {
    constructor() {  
    this.ramPrices = {
      "4GB RAM": 69,
      "8GB RAM": 99,
      "16GB RAM": 180,
      "32GB RAM": 260,
      "64GB RAM": 450,
      "128GB RAM": 629,
    };
    this.hardDiskPrices = {
      "128GB Hard Disk": 99,
      "256GB Hard Disk": 199,
      "512GB Hard Disk": 280,
      "1TB Hard Disk": 370,
      "3TB Hard Disk": 540,
      "6TB Hard Disk": 699,
    };
    this.screenPrices = {
      "14 inch Display": 150,
      "15 inch Display": 270,
      "17 inch Display": 399,
      "21 inch Display": 499,
      "42 inch Display": 580,
      "84 inch Display": 799,
    };
    this.computerCompanyPrices = {
      "lenovo Trademark": 99,
      "sony Trademark": 99,
      "HP Trademark": 99,
      "Apple Trademark": 199,
      "Dell Trademark": 210,
      "Intel Trademark": 250,
    };
    this.screen = document.getElementById("screen2");
    } 
    getRamPrice(ram) {
    return this.ramPrices[ram];
    }
    getHardDiskPrice(hardDisk) {
    return this.hardDiskPrices[hardDisk];
    }
    getScreenPrice(screen) {
    return this.screenPrices[screen];
    }
    getComputerCompanyPrice(computerCompany) {
    return this.computerCompanyPrices[computerCompany];
    }
    showPrice() {
    let ram = document.getElementById("ram").value;
    let hardDisk = document.getElementById("hardDisk").value;
    let screen = document.getElementById("computerscreen").value;
    let computerCompany = document.getElementById("computerCompany").value;
    let ramPrice = this.getRamPrice(ram);
    let hardDiskPrice = this.getHardDiskPrice(hardDisk);
    let screenPrice = this.getScreenPrice(screen);
    let computerCompanyPrice = this.getComputerCompanyPrice(computerCompany);
    let totalPrice = ramPrice + hardDiskPrice + screenPrice + computerCompanyPrice;
    let a = getElementById("screen2") 
    a.innerText = `your computer price is: ${totalPrice}`
};
}



