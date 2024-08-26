export interface EmailProvider {
    sendEmail(email: string, content: string): Promise<void>;
  }
  
  export interface Logger {
    log(message: string): void;
    error(message: string): void;
  }
  
  export class EmailService {
    private provider1: EmailProvider;
    private provider2: EmailProvider;
    private sentEmails: Set<string>;
    private logger: Logger;
  
    constructor(provider1: EmailProvider, provider2: EmailProvider, logger: Logger) {
      this.provider1 = provider1;
      this.provider2 = provider2;
      this.logger = logger;
      this.sentEmails = new Set<string>();
    }
  
    async sendEmail(email: string, content: string): Promise<void> {
      const emailKey = `${email}-${content}`;
  
      if (this.sentEmails.has(emailKey)) {
        this.logger.log(`Email already sent to ${email}`);
        return;
      }
  
      try {
        await this.provider1.sendEmail(email, content);
        this.sentEmails.add(emailKey);
      } catch (error) {
        this.logger.log(`Provider 1 failed, switching to Provider 2`);
        this.logger.error(`Failed to send email with provider: ${error}`);
        await this.provider2.sendEmail(email, content);
        this.sentEmails.add(emailKey);
      }
    }
  }
  