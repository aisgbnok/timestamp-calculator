export class TimeUtility {

  static currentTime = new Date(Date.now());

  static testDate() {
    let newtime = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), this.currentTime.getDate(), 2, 0, 0, 2);

    let diff = newtime.getTime() - this.currentTime.getTime();

    console.log(new Date(diff).toTimeString())
  }

  static testAddTime() {
    let previous = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), this.currentTime.getDate(), 0, 1, 1, 70);
    let add = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), this.currentTime.getDate(), 0, 1, 4, 3);

    this.addTime(previous, add);
  }

  static addTime(previous, add) {
    const newtime = previous.getTime() + (add.getTime() - previous.getTime());

    console.log(new Date(newtime).toTimeString());
  }

}