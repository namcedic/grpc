"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookApiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_book_api_dto_1 = require("./create-book-api.dto");
class UpdateBookApiDto extends (0, mapped_types_1.PartialType)(create_book_api_dto_1.CreateBookApiDto) {
}
exports.UpdateBookApiDto = UpdateBookApiDto;
//# sourceMappingURL=update-book-api.dto.js.map