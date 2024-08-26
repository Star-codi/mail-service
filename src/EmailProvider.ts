// src/EmailProvider.ts

export interface EmailProvider {
    sendEmail(recipient: string, content: string): Promise<void>;
  }
  