import { Component, inject, signal } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ChatBarComponent } from '../chat-bar/chat-bar.component';
import { FileListComponent } from '../file-list/file-list.component';
import { WorkflowService } from '../workflow.service';
import { MatChip, MatChipSet } from "@angular/material/chips";

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [
        FileListComponent,
        MatProgressBar,
        ChatBarComponent,
        MatChipSet,
        MatChip,
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
