import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {
  private youtubeUrl:String = "https://www.googleapis.com/youtube/v3";
  private apikey: string = "AIzaSyDJSoCir66vB9mebtlFBP--qaReKSJNFbs";
  private playlist:string = "UUQplaZZ2mv8fo8Zd-1hQPzg";
  private nextPageToken:string = "";

  constructor(public http:Http) { }

  getVideos(){
    let url = `${ this.youtubeUrl }/playlistItems`;
    let params = new URLSearchParams();
    params.set('part','snippet');
    params.set('playlistId',this.playlist);
    params.set('maxResults','10');
    params.set('key',this.apikey);

    return this.http.get(url, { search:params } ).map(res=>{
      console.log(res.json());
      this.nextPageToken = res.json().nextPageToken

      let videos:any[] = [];
      for(let video of res.json().items){
        let snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;

    });
  }

}
