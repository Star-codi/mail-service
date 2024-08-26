import { EmailService, EmailProvider, Logger } from '../src/EmailService';

describe('EmailService', () => {
  let mockProvider1: jest.Mocked<EmailProvider>;
  let mockProvider2: jest.Mocked<EmailProvider>;
  let mockLogger: jest.Mocked<Logger>;
  let emailService: EmailService;

  beforeEach(() => {
    mockProvider1 = {
      sendEmail: jest.fn()
    };

    mockProvider2 = {
      sendEmail: jest.fn()
    };

    mockLogger = {
      log: jest.fn(),
      error: jest.fn()
    };

    emailService = new EmailService(mockProvider1, mockProvider2, mockLogger);
  });

  test('should send email using provider1', async () => {
    mockProvider1.sendEmail.mockResolvedValueOnce(undefined);

    await emailService.sendEmail('test@example.com', 'Test content');

    expect(mockProvider1.sendEmail).toHaveBeenCalledWith('test@example.com', 'Test content');
    expect(mockProvider1.sendEmail).toHaveBeenCalledTimes(1);
  });

  test('should fallback to provider2 if provider1 fails', async () => {
    mockProvider1.sendEmail.mockRejectedValueOnce(new Error('Provider 1 error'));
    mockProvider2.sendEmail.mockResolvedValueOnce(undefined);

    await emailService.sendEmail('test@example.com', 'Test content');

    expect(mockProvider1.sendEmail).toHaveBeenCalledWith('test@example.com', 'Test content');
    expect(mockProvider2.sendEmail).toHaveBeenCalledWith('test@example.com', 'Test content');
  });

  test('should not send duplicate emails', async () => {
    mockProvider1.sendEmail.mockResolvedValueOnce(undefined);

    await emailService.sendEmail('test@example.com', 'Test content');
    await emailService.sendEmail('test@example.com', 'Test content'); // Duplicate email

    expect(mockProvider1.sendEmail).toHaveBeenCalledTimes(1); // Only 1 call should be made
    expect(mockLogger.log).toHaveBeenCalledWith('Email already sent to test@example.com');
  });

  test('should respect rate limit', async () => {
    jest.useFakeTimers();
    mockProvider1.sendEmail.mockResolvedValue(undefined);

    await emailService.sendEmail('test@example.com', 'Test content');
    jest.advanceTimersByTime(60000); // Simulate 1 minute passing
    await emailService.sendEmail('test@example.com', 'Test content'); // Should not trigger another send

    expect(mockProvider1.sendEmail).toHaveBeenCalledTimes(1); // Only 1 call should be made within rate limit
    jest.useRealTimers();
  });
});
