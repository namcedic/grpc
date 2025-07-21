import { Observable } from "rxjs";
export declare const protobufPackage = "book";
export interface BookRequest {
    id: number;
}
export interface BookResponse {
    id: number;
    title: string;
    author: string;
}
export declare const BOOK_PACKAGE_NAME = "book";
export interface BookServiceClient {
    getBook(request: BookRequest): Observable<BookResponse>;
}
export interface BookServiceController {
    getBook(request: BookRequest): Promise<BookResponse> | Observable<BookResponse> | BookResponse;
}
export declare function BookServiceControllerMethods(): (constructor: Function) => void;
export declare const BOOK_SERVICE_NAME = "BookService";
