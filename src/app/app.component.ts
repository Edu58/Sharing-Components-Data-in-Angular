import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'EDWIN KARIMI'
  message: string = 'I am the best developer your company will ever see'

  receivedMessage!: string;

  printMessage (usermessage: any):void {
    this.receivedMessage = usermessage
    console.log(usermessage)
  }

}
