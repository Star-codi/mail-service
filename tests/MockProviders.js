"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockLogger = exports.mockProvider2 = exports.mockProvider1 = void 0;
exports.mockProvider1 = {
    sendEmail: jest.fn().mockResolvedValue(undefined),
};
exports.mockProvider2 = {
    sendEmail: jest.fn().mockResolvedValue(undefined),
};
// tests/MockProviders.ts
exports.mockLogger = {
    log: jest.fn(),
    error: jest.fn()
};
