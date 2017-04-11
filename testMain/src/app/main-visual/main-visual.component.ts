import { Component, OnInit } from '@angular/core';

declare const $:any

@Component({
  selector: 'app-main-visual',
  templateUrl: './main-visual.component.html',
  styleUrls: ['./main-visual.component.css']
})
export class MainVisualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    test()
  }

}

function test(){
  alert($(".test").length)
}