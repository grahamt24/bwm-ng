import { Component } from '@angular/core';
import { EditableComponent } from "../editable-component";

@Component({
  selector: 'bwm-editable-image',
  templateUrl: './editable-image.component.html',
  styleUrls: ['./editable-image.component.scss']
})
export class EditableImageComponent extends EditableComponent {

  handleImageSuccess(imageUrl: string){
    this.entity[this.entityField] = imageUrl;
    this.updateEntity();
  }

  handleImageError(){
    this.cancelUpdate();
  }

  handleImageLoaded(){
    this.isActiveInput = true;
  }

}
