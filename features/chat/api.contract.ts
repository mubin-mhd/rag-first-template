import { Message, Citation, Role } from './types';

export interface ChatRequest {
  messages: Array<{
    role: Role;
    content: string;
  }>;
}

export interface ChatResponse {
  message: Message;
  citations?: Citation[];
}
