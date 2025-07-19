# gRPC-based Microservices Example

A microservices architecture example using gRPC with NestJS, demonstrating user and book services with an API gateway.

## Project Structure

This is a monorepo project with the following main components:

- `api-gateway`: The main API gateway service that routes requests to appropriate microservices
- `user-service`: Microservice handling user-related operations
- `book-service`: Microservice handling book-related operations

## Prerequisites

- Node.js (v20 or higher recommended)
- npm (comes with Node.js)
- gRPC tools (for generating proto files)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Generate proto files:
```bash
npm run proto:generate
```

## Running the Services

The project uses workspaces to manage different services. You can run each service individually:

```bash
# Run API Gateway
npm run start:api

# Run User Service
npm run start:user

# Run Book Service
npm run start:book
```

## Service Ports

- API Gateway: `3000`
- User Service: `50051`
- Book Service: `50052`

## API Endpoints

### User Service
- GET `/users/:id` - Get user by ID

### Book Service
- GET `/books/:id` - Get book by ID

## Project Organization

Each service follows a standard NestJS structure:

```
src/
├── user/           # User service implementation
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── user.module.ts
├── book/           # Book service implementation
│   ├── book.controller.ts
│   ├── book.service.ts
│   └── book.module.ts
└── app.module.ts   # Root module
```

## Development

### gRPC Inter-Service Communication

This project implements a microservices architecture using gRPC for service-to-service communication. Here's how the services interact:

1. **Service Architecture**
   - `api-gateway`: Main entry point that routes requests to appropriate services
   - `user-service`: Handles user-related operations (user profiles, authentication)
   - `book-service`: Handles book-related operations (book catalog, author information)

2. **Communication Flow**
   When a client requests book information:
   1. The request goes to `api-gateway`
   2. `api-gateway` routes the request to `book-service`
   3. `book-service` makes a gRPC call to `user-service` to fetch author information
   4. The combined response is sent back through the chain to the client

3. **gRPC Configuration**
   Each service is configured with:
   ```typescript
   ClientsModule.register([
     {
       name: USER_SERVICE,  // Service identifier
       transport: Transport.GRPC,
       options: {
         package: 'user',    // Proto package name
         protoPath: join(process.cwd(), '/proto/user.proto'),
         url: 'localhost:50051',  // Service endpoint
       },
     }
   ])
   ```

4. **Service Integration Example**
   In `book-service`, when fetching a book:
   ```typescript
   async getBook(id: number): Promise<BookResponse> {
     const book = this.books.find((b) => b.id === id);
     if (!book) {
       throw new BadRequestException('Book not found');
     }
     
     // Fetch author information from user-service
     const author = await firstValueFrom(
       this.userService.getUser({ id: parseInt(book.author) })
     );
     
     return {
       ...book,
       author: author.name  // Combine book and author information
     };
   }
   ```

5. **Error Handling**
   - Each service has proper error handling using NestJS's `BadRequestException`
   - Errors are propagated through the gRPC chain
   - Invalid IDs or missing resources return appropriate error messages

6. **Service Ports**
   - API Gateway: `3000`
   - User Service: `50051`
   - Book Service: `50052`

### Proto Files
The project uses Protocol Buffers (protobuf) for defining service contracts:

- `user.proto`: Defines user-related operations and data structures
- `book.proto`: Defines book-related operations and data structures

These proto files are used to generate TypeScript client and server code for gRPC communication.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Authors

- Cedric - Initial work

## Acknowledgments

- NestJS team for the excellent framework
- gRPC team for the protocol implementation
- All contributors to the project