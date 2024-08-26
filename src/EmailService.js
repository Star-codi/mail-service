"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    constructor(provider1, provider2, logger) {
        this.provider1 = provider1;
        this.provider2 = provider2;
        this.logger = logger;
        this.sentEmails = new Set();
    }
    sendEmail(email, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailKey = `${email}-${content}`;
            if (this.sentEmails.has(emailKey)) {
                this.logger.log(`Email already sent to ${email}`);
                return;
            }
            try {
                yield this.provider1.sendEmail(email, content);
                this.sentEmails.add(emailKey);
            }
            catch (error) {
                this.logger.log(`Provider 1 failed, switching to Provider 2`);
                this.logger.error(`Failed to send email with provider: ${error}`);
                yield this.provider2.sendEmail(email, content);
                this.sentEmails.add(emailKey);
            }
        });
    }
}
exports.EmailService = EmailService;
