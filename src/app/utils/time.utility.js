export class TimeUtility {

  static INVALID = new Date('Invalid Date');
  static UNIX_EPOCH = new Date(0);

  /**
   * Provides the current date and time as a {@link Date}.
   * @returns {Date} Representing the current date and time.
   */
  static now() {
    return new Date(Date.now());
  }

  /**
   * Analyze given time and attempt to return a valid {@link Date}.
   * @param time Valid {@link Date}, or valid string that can be converted into
   *     a {@link Date}. This includes custom time string like "00:00:00.000".
   * @param baseDate Used to fill in date information when time excludes date
   *     information. If you provide a string of hours and seconds then
   *     baseDate will fill in the month, year, etc. If baseDate is an invalid
   *     {@link Date} then unix epoch is used.
   * @returns {Date} Valid {@link Date} if possible, or "Invalid Date"
   *     {@link Date}
   */
  static parse(time, baseDate = this.UNIX_EPOCH) {
    // Already valid
    if (time instanceof Date) {
      return time;
    }

    // See if time cam be a Date
    let timeAsDate = new Date(time);
    if (timeAsDate.toString() !== this.INVALID.toString()) {
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

    // Split the seconds and milliseconds and convert array to number array
    timeArray = timeArray.concat(timeArray.pop().split('.')).map(Number);

    // "9.67" is 9s and 670ms
    // "4:9.67" is 4m, 9s, and 670ms
    // Reverse ensures ms is always index 0, etc.
    timeArray = timeArray.reverse();

    // Ensure baseDate is valid, if not use unix epoch
    if (baseDate.toString() === this.INVALID.toString()) {
      baseDate = this.UNIX_EPOCH;
    }

    // Return the parsed time string as a Date. Can be invalid if time string
    // didn't fit format.
    return new Date(baseDate.getFullYear(), baseDate.getMonth(),
        baseDate.getDate(), timeArray[3] || baseDate.getHours(),
        timeArray[2] || baseDate.getMinutes(),
        timeArray[1] || baseDate.getSeconds(), timeArray[0]);
  }

  /**
   * Provides the difference between end and start date/time.
   * @param end End date/time
   * @param start Start date/time, uses unix epoch if none is given.
   * @returns {Date} Epoch plus difference of end and start.
   */
  static diff(end, start = this.UNIX_EPOCH) {
    // Parse
    end = this.parse(end);
    start = this.parse(start);

    // Validate
    if (end.toString() === this.INVALID.toString()) {
      return this.INVALID;
    }
    if (start.toString() === this.INVALID.toString()) {
      return this.INVALID;
    }

    return new Date(end.getTime() - start.getTime());
  }

  /**
   * Adds the given time onto the baseDate.
   * @param time Time/Date to add
   * @param baseDate Time/Date to start with, uses unix epoch if none is given.
   * @returns {Date} baseDate plus time
   */
  static add(time, baseDate = this.UNIX_EPOCH) {
    // Parse
    time = this.parse(time);
    baseDate = this.parse(baseDate);

    // Validate
    if (time.toString() === this.INVALID.toString()) {
      return this.INVALID;
    }
    if (baseDate.toString() === this.INVALID.toString()) {
      return this.INVALID;
    }

    return new Date(baseDate.getTime() + time.getTime());
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