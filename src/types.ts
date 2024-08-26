export type EmailProvider = {
    sendEmail: (email: string, content: string) => Promise<void>;
  };
  