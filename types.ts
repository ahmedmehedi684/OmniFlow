export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  SUPPORT = 'SUPPORT'
}

export enum Platform {
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'LinkedIn',
  TWITTER = 'Twitter',
  TIKTOK = 'TikTok',
  YOUTUBE = 'YouTube'
}

export interface SocialConnection {
  platform: Platform;
  isConnected: boolean;
  username?: string;
}

export interface WorkflowLog {
  id: string;
  startTime: string;
  status: 'success' | 'error';
  message: string;
}

export interface Workflow {
  id: string;
  name: string;
  isActive: boolean;
  lastRun: string;
  status: 'success' | 'error' | 'running' | 'idle';
  executions: number;
  logs?: WorkflowLog[];
}

export interface Message {
  id: string;
  text: string;
  sender: 'customer' | 'agent' | 'ai';
  timestamp: Date;
  metadata?: {
    isHumanMode?: boolean;
  };
}

export interface Conversation {
  id: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  customerSource: string; // e.g., "Messenger", "IG DM"
  lastActive: Date;
  status: 'active' | 'archived';
  messages: Message[];
  isHumanMode: boolean;
  humanModeExpiresAt?: Date;
}

export interface SocialPost {
  id: string;
  content: string;
  platforms: Platform[];
  scheduledDate?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  imageUrl?: string;
}

export enum NavPage {
  DASHBOARD = 'dashboard',
  CONNECTIONS = 'connections',
  SOCIAL = 'social',
  WORKFLOWS = 'workflows',
  INBOX = 'inbox',
  CUSTOMERS = 'customers',
  DOCS = 'docs',
  SETTINGS = 'settings'
}