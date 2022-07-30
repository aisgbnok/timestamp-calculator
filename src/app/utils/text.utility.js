export class TextUtility {

  /**
   * Checks to see if the string has content (more than spaces).
   * @param string - String to check.
   * @returns {boolean} - Whether there is a string with content (not just spaces) or not.
   */
  static textIsPresent(string) {
    return string.trim() !== '';
  }
}