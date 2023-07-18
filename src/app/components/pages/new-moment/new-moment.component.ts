
import { Component ,OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';

import { MommentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent implements OnInit{
  btnText = 'Compartilhar!';

    constructor(private momentService: MommentService) {

    }

   ngOnInit(): void {}

   async createHandler(moment: Moment){
    
    const formData = new FormData()

     formData.append("title", moment.title)
     formData.append("description", moment.description)

     if (moment.image) {
         formData.append("image", moment.image);
         
     }

     //TODO

   await this.momentService.createMoment(formData).subscribe;





     // redirect



   }
}
