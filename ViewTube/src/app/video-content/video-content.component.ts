import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service'

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit {

  constructor(private videoService: VideoService) { 

  }
  videoStructure ={
    "kind": "youtube#video",
    "etag": "d0eyfJnyWj-XdLjS9BTB_fXd6QU",
    "id": "NphjQt2_BPA",
    snippet: {
      "publishedAt": "2021-02-07T00:32:17Z",
      "channelId": "UC1MuQrO6KP7tOtNWZUFoTZA",
      "title": "Hello Web app site using RubyMine",
      "description": "This is a Ruby web application for Hello Web app site using RubyMine IDE which print current time",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/NphjQt2_BPA/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/NphjQt2_BPA/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/NphjQt2_BPA/hqdefault.jpg",
          "width": 480,
          "height": 360
        },
        "standard": {
          "url": "https://i.ytimg.com/vi/NphjQt2_BPA/sddefault.jpg",
          "width": 640,
          "height": 480
        },
        "maxres": {
          "url": "https://i.ytimg.com/vi/NphjQt2_BPA/maxresdefault.jpg",
          "width": 1280,
          "height": 720
        }
      },
      "channelTitle": "LearnWithPayal",
      "categoryId": "27",
      "liveBroadcastContent": "none",
      "localized": {
        "title": "Hello Web app site using RubyMine",
        "description": "This is a Ruby web application for Hello Web app site using RubyMine IDE which print current time"
      },
      "defaultAudioLanguage": "en"
    },
    "contentDetails": {
      "duration": "PT10M49S",
      "dimension": "2d",
      "definition": "hd",
      "caption": "false",
      "licensedContent": false,
      "contentRating": {},
      "projection": "rectangular"
    },
    "statistics": {
      "viewCount": "16",
      "likeCount": "0",
      "dislikeCount": "0",
      "favoriteCount": "0",
      "commentCount": "0"
    }
  }
  videos: any = []
  ngOnInit(): void {
    this.videoService.video$.subscribe(videoServiceData=>
      // console.log(videoServiceData)
      this.videos = videoServiceData
    );
  }
  desc = []
  getVideoRawData(){
    console.warn(this.videos[1].etag);
  }
  for(){

  }

}
