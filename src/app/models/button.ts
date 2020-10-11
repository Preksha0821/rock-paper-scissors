import {GameChoices} from './match';

export enum ButtonType {
  Primary= 'primary',
  Secondary= 'secondary'
}

export interface Button {
  id: GameChoices;
  label: string;
  imagePath: string;
  buttonType: ButtonType;
}
