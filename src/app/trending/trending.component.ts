import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GipherService } from '../gipher.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  gifs : any = [];
  stickers : any = [];
  name;
  error;
  results: any[];
  totalRecords: string;
  page:Number=1;
  imageToShow: any;
  recommendedGifsList: any[] = [];
  favoriteGifsList: any[] = [];

  constructor(private gipherService: GipherService, private router: Router){ }
 
 ngOnInit() {
   console.log("this is app component")
   this.destroyMe();
   this.trendStickers();
 }
 destroyMe() {
   this.gipherService.getTrendingGifs(this.name) 
   .subscribe((data: any) => {
     console.log(data);
     this.gifs = data;
     console.log(data);
   })
 }
  trendStickers(){
    this.gipherService.getTrendingStickers(this.name).subscribe((data: any) => {
      console.log(data);
      this.stickers = data;
      console.log(data);
    })
  }

  recommendGifs(item:any){
    this.recommendedGifsList.push(item);
    localStorage.setItem('recommended_gifs', JSON.stringify(this.recommendedGifsList));
  }

  favoriteGifs(item:any){
    this.favoriteGifsList.push(item);
    localStorage.setItem('favorite_gifs', JSON.stringify(this.favoriteGifsList));
  }

  downloadGif(url: string){
    this.gipherService.getImage(url)
      .subscribe((data: any) => {
        console.log(data);
        var downloadURL = window.URL.createObjectURL(data);
        var link = document.createElement('a');
        link.href = downloadURL;
        let CharsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let length = 5;
        let name = this.makeRandom(length, CharsString)
        link.download = name + ".gif";
        link.click();
      })
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

 ngOnDestroy(){
   console.log("this is destroy")
 }

}
