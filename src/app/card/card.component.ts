import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  images:string[] =["https://picsum.photos/id/17/500/500","https://picsum.photos/id/13/500/500",
   "https://picsum.photos/id/28/500/500","https://picsum.photos/id/29/500/500",
    "https://picsum.photos/id/27/500/500","https://picsum.photos/id/37/500/500"];

    cur_img_i:number=0;
    // cur_img_src: string=this.images[this.cur_img_i];
    show_img(){
      return this.images[this.cur_img_i];
    }
    prev_img(){
      this.cur_img_i=(this.cur_img_i-1+this.images.length) % this.images.length;
      // cur_img will be the last image for previous btn---this.cur_img=this.images[this.cur_img_i];
      // show_img(this.cur_img_i);
    }
    next_img(){
      this.cur_img_i=(this.cur_img_i+1)% this.images.length;
      // cur_img will be the next image for nxt btn-----this.cur_img=this.images[this.cur_img_i];
      // show_img(this.cur_img_i)
    }
    constructor(){
      setInterval(() =>(this.next_img),1000)
    }

    goToSlide(i:number){
      this.cur_img_i= i;
    }
}
