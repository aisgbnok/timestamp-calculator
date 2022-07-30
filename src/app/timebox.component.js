import {MDCTextField} from '@material/textfield';
import {TextUtility} from "./utils/text.utility";

const defaults = {
  idName: undefined,
  type: 'text',
  labelText: ''
}

export class TimestampComponent {
  #idName;
  #labelText;
  #textField;
  #textFieldMDC;
  #input;

  constructor(idName, labelText) {
    this.#idName = idName || defaults.idName;
    this.#labelText = labelText || defaults.labelText;


  }

  #createTextField() {
    const labelID = `${this.#idName}-label`;

    // Main TextField
    const textField = document.createElement('label');
    textField.setAttribute('class', 'mdc-text-field mdc-text-field--outlined');

    // Input
    const input = document.createElement('input');
    input.setAttribute('type', defaults.type);
    input.setAttribute('class', 'mdc-text-field__input');
    input.setAttribute('id', `${this.#idName}`);
    input.setAttribute('aria-labelledby', labelID);

    // Outline
    const outline = document.createElement('span');
    outline.setAttribute('class', 'mdc-notched-outline');

    // Outline Leading
    const outlineLeading = document.createElement('span');
    outlineLeading.setAttribute('class', 'mdc-notched-outline__leading');

    // Outline Trailing
    const outlineTrailing = document.createElement('span');
    outlineTrailing.setAttribute('class', 'mdc-notched-outline__trailing');

    // No gap in the notched outline if label text is empty
    if (TextUtility.textIsPresent(this.#labelText)) {
      // Outline Notch
      const outlineNotch = document.createElement('span');
      outlineNotch.setAttribute('class', 'mdc-notched-outline__notch');

      // Outline Floating Label
      const floatingLabel = document.createElement('span');
      floatingLabel.setAttribute('class', 'mdc-floating-label');
      floatingLabel.setAttribute('id', labelID);
      floatingLabel.appendChild(document.createTextNode(this.#labelText));

      // Combine the Notched Outline
      outlineNotch.appendChild(floatingLabel);
      outline.append(outlineLeading, outlineNotch, outlineTrailing);
    } else {
      // Combine the Notched Outline
      outline.append(outlineLeading, outlineTrailing);
    }

    // Add the input and outline to the textField
    textField.append(input, outline);

    // Set components
    this.#textField = textField;
    this.#textFieldMDC = new MDCTextField(this.#textField);
    this.#input = input;
  }
}