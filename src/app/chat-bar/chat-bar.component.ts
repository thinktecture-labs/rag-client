import { Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Assistant } from '@langchain/langgraph-sdk';

@Component({
  selector: 'app-chat-bar',
  standalone: true,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
    ],
  templateUrl: './chat-bar.component.html',
  styleUrl: './chat-bar.component.css'
})
export class ChatBarComponent {
    readonly assistants = input.required<Assistant[]>();

    readonly run = output<{ assistantId: string, question: string }>();
}
