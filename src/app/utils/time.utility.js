export class TimeUtility {

  /**
   * Returns the current date and time as a  Object
   * @returns {Date} Date.now()
   */
  static now() {
    return new Date(Date.now());
  }

  /**
   * Analyze given time and return a valid Date
   * @param time String, Integer, or Date object
   * @returns {Date} Valid Date object or 'Invalid Date' string
   */
  static parse(time) {
    // Valid
    if (time instanceof Date) {
      return time;
    }

    // If time is an invalid Date then Date.toString will be 'Invalid Date'
    return new Date(time);

    // TODO
    /*// Parse String
    if (typeof time == 'string') {
      let tempTime = new Date(time);

      if (tempTime.toString() !== 'Invalid Date') {

      }
    }

    // Parse int
    if (Number.isInteger(time)) {

    }*/
  }

  static difference(newTime, oldTime) {
    // Uses current date if none was given
    oldTime = oldTime || this.now();

    this.parse("Dog")

    // Ensure dates are valid
    if (!(newTime instanceof Date)) {
      newTime = new Date(newTime);
      if (newTime.getTime() !== newTime.getTime()) {
        console.log(`newTime: ${newTime}`);
        return newTime
      }
    }

    if (!(oldTime instanceof Date)) {
      oldTime = new Date(oldTime);
      if (oldTime.getTime() !== oldTime.getTime()) {
        console.log(`oldTime: ${oldTime}`);
        return oldTime
      }
    }

  }

  static testDate() {
    let newtime = new Date(this.currentTime.getFullYear(),
        this.currentTime.getMonth(), this.currentTime.getDate(), 2, 0, 0, 2);

    let diff = newtime.getTime() - this.currentTime.getTime();

    console.log(new Date(diff).toTimeString())
  }

  static testAddTime() {
    let previous = new Date(this.now().getFullYear(),
        this.now().getMonth(), this.now().getDate(), 0, 1, 1, 70);
    let add = new Date(this.now().getFullYear(),
        this.now().getMonth(), this.now().getDate(), 0, 1, 4, 3);

    this.addTime(previous, add);

    console.log(this.now());
    setTimeout(() => {
      console.log(this.now())
    }, 4000);

    this.difference("00:01:00.70")
  }

  static addTime(previous, add) {
    const newtime = previous.getTime() + (add.getTime() - previous.getTime());

    console.log(new Date(newtime).toTimeString());
  }

  static validateTime(string) {

  }

  static parseTime(string) {
    let example = "00:01:00.70"

    let mili = example.split(".")[0]
  }

}