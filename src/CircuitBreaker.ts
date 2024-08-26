export class CircuitBreaker {
    async call<T>(fn: () => Promise<T>): Promise<T> {
      try {
        return await fn();
      } catch (error) {
        throw error; // You can implement more complex logic here
      }
    }
  }
  