export class TimeUtility {

  /**
   * Provides the current date and time as a {@link Date}.
   * @returns {Date} Representing the current date and time.
   */
  static now() {
    return new Date(Date.now());
  }

  /**
   * Analyze given time and return a valid {@link Date}.
   * @param time String to be converted into a {@link Date}.
   * @returns {Date} Valid {@link Date} if possible, or 'Invalid Date' {@link Date}
   */
  static parse(time) {
    // Already valid
    if (time instanceof Date) {
      return time;
    }

    // See if time cam be a Date
    let timeAsDate = new Date(time);
    if (timeAsDate.toString() !== 'Invalid Date') {
      return timeAsDate;
    }

    // This is an extension of the Date constructor
    // We want to parse custom strings into a Date object
    // Ex: "9:7.68" is 9 minutes, 7 seconds, and 680 milliseconds

    // Non String then return timeAsDate. (May be 'Invalid Date')
    if (typeof time !== 'string') {
      return timeAsDate;
    }

    // Now we parse the custom string
    let timeArray = time.trim().split(':');

    // Split the seconds and milliseconds
    timeArray = timeArray.concat(timeArray.pop().split('.'));

    // Here we convert the string array to number array
    // We reverse the array because of how our custom time string works
    // "9.67" is 9s and 670ms
    // "4:9.67" is 4m, 9s, and 670ms
    // Reverse ensures ms is always index 0, etc.
    timeArray = timeArray.map(Number).reverse();

    let currentTime = this.now();
    const date = new Date(currentTime.getFullYear(), currentTime.getMonth(),
        currentTime.getDate(), timeArray[3] || currentTime.getHours(),
        timeArray[2] || currentTime.getMinutes(),
        timeArray[1] || currentTime.getSeconds(), timeArray[0]);

    return date;
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