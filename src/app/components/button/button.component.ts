import {Component, Input} from '@angular/core';
import {ButtonType} from '../../models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() imagePath: string;
  @Input() disabled: boolean;
  @Input() buttonType: ButtonType;
  constructor() { }
}
