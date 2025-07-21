"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOOK_SERVICE_NAME = exports.BOOK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.BookServiceControllerMethods = BookServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "book";
exports.BOOK_PACKAGE_NAME = "book";
function BookServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getBook"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("BookService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("BookService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.BOOK_SERVICE_NAME = "BookService";
//# sourceMappingURL=book.js.map