import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  name!: string

  @Input()
  message!: string

  @Output() userInput: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendItems (value: string): void {
    this.userInput.emit(value)
  }

}
