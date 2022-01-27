import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {TimeUtility} from "./utils/time.utility";

export const run = () => {
  // Time Utility Works
  // TODO Add UI

  // Instantiate Top App Bar
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  new MDCTopAppBar(topAppBarElement);

  const baseTimeField = new MDCTextField(
      document.querySelector('#base-time-text-field'));
  const addTimeField = new MDCTextField(
      document.querySelector('#add-time-text-field'));
  new MDCRipple(document.querySelector('#calc-button'));

  const calcButton = document.querySelector('#calc-button');
  const baseTime = document.querySelector('#base-time');
  const addTime = document.querySelector('#add-time');
  calcButton.addEventListener('click', () => {
    console.log(TimeUtility.toTimeString(
        TimeUtility.add(addTime.value, baseTime.value)));
  });
};