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


  
