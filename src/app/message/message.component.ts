import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'form-message',
  standalone: true,
  imports: [NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})

export class MessageComponent {
  @Input() messageText: string = ''
  @Input() messageType: string = ''
}
