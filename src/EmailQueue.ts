// src/EmailQueue.ts
export class EmailQueue {
    private queue: Set<string> = new Set();
    private rateLimitMap: Map<string, number> = new Map();
  
    addToQueue(email: string) {
      this.queue.add(email);
      this.rateLimitMap.set(email, Date.now());
    }
  
    isRateLimited(email: string): boolean {
      const lastSent = this.rateLimitMap.get(email);
      if (!lastSent) return false;
      return (Date.now() - lastSent) < 1000; // 1 second rate limit
    }
  }
  