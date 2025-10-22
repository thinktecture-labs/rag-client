import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Client } from '@langchain/langgraph-sdk';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  private readonly apiUrl = `${window.location.origin}/api`;

  // TODO: create LangGraph client

  // TODO: load assistants
  readonly assistants = signal([]);

  async createThread(): Promise<string> {
    // TODO: create thread and return thread ID
    return '';
  }

  async run(
    assistantId: string,
    threadId: string,
    input: Record<string, unknown>,
  ): Promise<Run> {
    // TODO: run workflow and return data
    return {} as unknown as Run;
  }
}
