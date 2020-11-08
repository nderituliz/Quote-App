import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isRead = new EventEmitter<boolean>();

  likes =0;
  dislikes =0

  upVote(){
    this.likes = this.likes+1;
  }

  downVote(){
    this.dislikes = this.dislikes + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
