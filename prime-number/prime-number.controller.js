"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeNumberController = void 0;
const common_1 = require("@nestjs/common");
let PrimeNumberController = class PrimeNumberController {
    checkPrime(n) {
        const numberN = parseInt(n, 10);
        if (isNaN(numberN) || numberN < 1) {
            throw new common_1.BadRequestException('Please provide a valid positive integer for n.');
        }
        const isPrime = this.isPrime(numberN);
        return { isPrime };
    }
    isPrime(num) {
        if (num < 2)
            return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
};
exports.PrimeNumberController = PrimeNumberController;
__decorate([
    (0, common_1.Post)(':n'),
    __param(0, (0, common_1.Param)('n')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PrimeNumberController.prototype, "checkPrime", null);
exports.PrimeNumberController = PrimeNumberController = __decorate([
    (0, common_1.Controller)('prime-number')
], PrimeNumberController);
//# sourceMappingURL=prime-number.controller.js.map