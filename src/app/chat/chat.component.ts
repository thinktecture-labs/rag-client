import { Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ChatBarComponent } from '../chat-bar/chat-bar.component';
import { FileListComponent } from '../file-list/file-list.component';
import { WorkflowService } from '../workflow.service';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        MatButton,
        MatIcon,
        FileListComponent,
        MatProgressBar,
        ChatBarComponent,
    ],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
})
export class ChatComponent {
    protected readonly workflowService = inject(WorkflowService);

    protected readonly loading = signal(false);
    protected readonly response = signal<Run | undefined>(undefined);

    async run(assistantId: string, question: string) {
        this.response.set(undefined);
        this.loading.set(true);

        const threadId = await this.workflowService.createThread();
        const payload = assistantId === 'a67fe2a6-8f1f-5ecd-839a-9a4b57f5aa50' ? { generation: 'foo' } : { question };
        const responses = this.workflowService.run(assistantId, threadId, payload);
        for await (let response of responses) {
            this.response.set(response);
        }

        this.loading.set(false);
    }
}
