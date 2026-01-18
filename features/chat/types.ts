export type Role = 'user' | 'assistant' | 'system';


export interface Citation {
  id: string;
  source: string;
  page?: string | number;
  snippet: string;
}

export interface Message {
  id?: string;
  role: Role;
  content: string;
  timestamp: number;
  citations?: Citation[];
}
