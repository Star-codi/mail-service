"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailQueue = void 0;
// src/EmailQueue.ts
class EmailQueue {
    constructor() {
        this.queue = new Set();
        this.rateLimitMap = new Map();
    }
    addToQueue(email) {
        this.queue.add(email);
        this.rateLimitMap.set(email, Date.now());
    }
    isRateLimited(email) {
        const lastSent = this.rateLimitMap.get(email);
        if (!lastSent)
            return false;
        return (Date.now() - lastSent) < 1000; // 1 second rate limit
    }
}
exports.EmailQueue = EmailQueue;
