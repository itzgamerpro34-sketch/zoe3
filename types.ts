export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
  gradient: string;
}

export interface ServerConfig {
  name: string;
  type: 'java' | 'bedrock';
  location: string;
  version: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}