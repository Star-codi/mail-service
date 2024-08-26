// src/MockProviders.ts
import { EmailProvider } from '../src/EmailProvider';

export const mockProvider1: EmailProvider = {
  sendEmail: jest.fn().mockResolvedValue(undefined),
};

export const mockProvider2: EmailProvider = {
  sendEmail: jest.fn().mockResolvedValue(undefined),
};
// tests/MockProviders.ts
export const mockLogger = {
  log: jest.fn(),
  error: jest.fn()
};
