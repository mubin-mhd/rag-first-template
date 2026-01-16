import { Message } from './types';

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error?: string;
}

export const initialChatState: ChatState = {
  messages: [],
  isLoading: false,
};
