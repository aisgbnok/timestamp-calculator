import {MDCTopAppBar} from '@material/top-app-bar';


export const run = () => {
  // Time Utility Works
  // TODO Add UI

  // Instantiate Top App Bar
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  new MDCTopAppBar(topAppBarElement);
};