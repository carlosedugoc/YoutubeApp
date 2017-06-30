import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class YoutubeService {
  youtubeUrl:String = "https://www.googleapis.com/youtube/v3/playlistItems";
  apikey: string = "AIzaSyDJSoCir66vB9mebtlFBP--qaReKSJNFbs"

  constructor(public http:Http) { }

  getVideos(){
    
  }

}
