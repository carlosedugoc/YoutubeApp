import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos:any[]=[];
  videoSel:any;
  constructor(public ys:YoutubeService) { 
    this.ys.getVideos().subscribe(data =>{
      console.log(data);
      this.videos = data;
    });
  }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel = video;
    $('#myModal').modal();
  }

  cerrarModal(){
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  cargarMas(){
    this.ys.getVideos()
          .subscribe(videos =>{
            this.videos.push.apply(this.videos,videos);
          })
  }

}
