
export class ComputerScreen {
    constructor() {
      this.imageTag = document.getElementById('image');
      this.screen = document.getElementById("screen1");
    }
    setImage(value) {
        this.imageTag.src = `/pic's/${value}.jpeg`;
      }
    showComputer(computer) {
      this.screen.innerHTML = `
      <div>
      <br>
        <h1>Your Computer...</h1>
        <div class="pictures">
          <img src="/pic's/${computer.ramMemory}.jpeg" alt="${computer.ramMemory}">
          <img src="/pic's/${computer.hardDiskSpace}.jpeg" alt="${computer.hardDiskSpace}"></img>
          <img src="/pic's/${computer.screenName}.jpeg" alt="${computer.screenName}">
          <img src="/pic's/${computer.computerCompany}.jpeg" alt="${computer.computerCompany}">
        </div>
      </div>`;
    }
  }




