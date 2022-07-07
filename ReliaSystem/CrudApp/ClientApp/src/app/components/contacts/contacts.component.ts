import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [fadeInOut]
})
export class ContactsComponent {

}
