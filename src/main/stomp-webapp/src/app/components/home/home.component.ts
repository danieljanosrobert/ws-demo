import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RxStompService } from '../../services/rx-stomp.service';
import { FormsModule } from '@angular/forms';
import { GreetingsResponse } from '../../data/greetings-response.dto';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, FormsModule, NgbModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  messages: GreetingsResponse[] = [];
  isEditable: boolean = true;
  name: string = '';
  text: string = '';
  invalid: boolean = false;

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {
    this.rxStompService.watchGreetings().subscribe((message: GreetingsResponse) => 
      this.messages.push(message)
    );
  }

  onInputBlur(): void {
    if (this.isEditable && this.name) {
      this.isEditable = false;
    }
  }

  onSendMessage(): void {
    if (!this.name) {
      this.invalid = true;
      return;
    }
    if (!this.text.trim()) {
      return;
    }
    this.rxStompService.sendMessage({name: this.name, message: this.text});
    this.text = '';
  }

  isRight(name: string): boolean {
    return this.name === name;
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
  }

  getTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
