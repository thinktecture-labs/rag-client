interface Run {
    question: string;
    generation?: Generation;
    documents?: RunDocument[];
}

interface Generation {
    content: string;
    additional_kwargs: AdditionalKwargs;
    response_metadata: ResponseMetadata;
    type: string;
    name: string | null;
    id: string;
    example: boolean;
    tool_calls: ToolCall[];
    invalid_tool_calls: InvalidToolCall[];
    usage_metadata: UsageMetadata;
}

interface AdditionalKwargs {
    refusal: string | null;
}

interface ResponseMetadata {
    token_usage: TokenUsage;
    model_name: string;
    system_fingerprint: string;
    finish_reason: string;
    logprobs: string | null;
}

interface TokenUsage {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
    completion_tokens_details: CompletionTokensDetails;
    prompt_tokens_details: PromptTokensDetails;
}

interface CompletionTokensDetails {
    audio_tokens: string | null;
    reasoning_tokens: number;
}

interface PromptTokensDetails {
    audio_tokens: string | null;
    cached_tokens: number;
}

interface ToolCall {}

interface InvalidToolCall {}

interface UsageMetadata {
    input_tokens: number;
    output_tokens: number;
    total_tokens: number;
}

interface RunDocument {
    id: string | null;
    metadata: Metadata;
    page_content: string;
    type: string;
}

interface Metadata {
    title: string;
    link: string;
    author: string;
    publish_date: string;
    feed: string;
    _id: string;
    _collection_name: string;
}
