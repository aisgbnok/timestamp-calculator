export class TimeUtility {

  static INVALID = new Date('Invalid Date');
  static UNIX_EPOCH = new Date(0);

  /**
   * Provides the current date and time as a {@link Date}.
   * @returns {Date} Representing the current date and time.
   */
  static now() {
    return new Date();
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

    //FIXME handle the period issue
    // Date(".70") is 18000000ms
    // ("0.70") is 0ms

    // If time can be a valid Date
    let timeAsDate = new Date(time);
    if (timeAsDate.toString() !== this.INVALID.toString()) {
      return timeAsDate;
    }

    // Date constructor can't handle time,
    // we want to parse custom strings into a Date
    // Ex: "4:5.67" is 4m, 5s, and 670ms

    // Non strings are invalid
    if (typeof time !== 'string') {
      return this.INVALID;
    }

    // Separate h,m,s,ms
    let timeArray = time.trim().split(':');
    let seconds = timeArray.pop().split('.');

    // If seconds is len 1 then it only contains seconds
    if (seconds.length === 1) {
      // Add zero as ms are always index 0 after reverse
      seconds.concat("0");
    }

    // Pad with trailing zeros: ".67" is 670ms not 067ms
    seconds[1] = seconds[1].padEnd(3, "0");

    // Finalize array
    timeArray = timeArray.concat(seconds).map(Number).reverse();

    // Ensure baseDate is valid, if not use unix epoch
    if (baseDate.toString() === this.INVALID.toString()) {
      baseDate = this.UNIX_EPOCH;
    }

    // Return the parsed time string as a Date.
    // Can be invalid if time string doesn't fit format.
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

}