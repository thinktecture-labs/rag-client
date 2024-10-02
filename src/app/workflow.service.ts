import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Client } from '@langchain/langgraph-sdk';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WorkflowService {
    private readonly apiUrl = `${window.location.origin}/api`;
    private readonly client = new Client({ apiUrl: this.apiUrl });

    readonly assistants = toSignal(from(this.client.assistants.search()), { initialValue: [] })

    async createThread(): Promise<string> {
        const thread = await this.client.threads.create();
        return thread.thread_id;
    }

    async* run(assistantId: string, threadId: string, input: Record<string, unknown>) {
        const thread = await this.client.threads.create();
        const streamResponse = this.client.runs.stream(threadId, assistantId, { input });
        for await (const chunk of streamResponse) {
            if (chunk.data && chunk.event !== "metadata") {
                yield chunk.data as Run;
            }
        }
    }
}
