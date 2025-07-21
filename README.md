# gRPC-based Microservices Architecture

A microservices architecture built with NestJS and gRPC, implementing a secure book management system with authentication.

## Project Structure

This is a monorepo project with the following microservices:

- `api-gateway`: Main entry point that routes requests to appropriate services
- `auth-service`: Handles user authentication and JWT token management
- `user-service`: Manages user profiles and authentication data
- `book-service`: Handles book catalog and author information

Each service is built with NestJS and communicates via gRPC.

## Prerequisites

- Node.js (v20 or higher)
- npm (comes with Node.js)
- gRPC tools (for generating proto files)
- TypeScript (for development)
- Protocol Buffers compiler (for proto files)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Generate proto files:
```bash
npm run proto:generate
```

3. Start all services:
```bash
# Start API Gateway
npm run start:api

# Start Auth Service
npm run start:auth

# Start User Service
npm run start:user

# Start Book Service
npm run start:book
```

## Running the Services

The project uses workspaces to manage different services. You can run each service individually:

```bash
# Run API Gateway
npm run start:api

# Run Auth Service
npm run start:auth

# Run User Service
npm run start:user

# Run Book Service
npm run start:book
```

## Service Ports

- API Gateway: `3000`
- Auth Service: `50055` (gRPC)
- User Service: `50051` (gRPC)
- Book Service: `50052` (gRPC)

## API Endpoints

### API Endpoints

### Authentication (Auth Service)
- POST `/auth/validate` - Validate JWT token

### Books (Book Service)
- GET `/books/:id` - Get book by ID (requires authentication)

### Users (User Service)
- GET `/users/:id` - Get user by ID (requires authentication)

## Project Organization

```
src/
├── auth/           # Authentication service
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── user/           # User service
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── user.module.ts
├── book/           # Book service
│   ├── book.controller.ts
│   ├── book.service.ts
│   └── book.module.ts
└── app.module.ts   # Root module
```

## Development

### gRPC Communication

The services communicate using gRPC with the following configuration:

1. **Service Discovery**
   - Each service registers with its own port
   - Services use generated client stubs for communication

2. **Authentication Flow**
   - All requests to protected endpoints require JWT token
   - Token validation is handled by Auth Service
   - User information is passed through gRPC metadata

3. **Error Handling**
   - Each service has proper error handling using NestJS exceptions
   - gRPC errors are properly mapped to HTTP status codes
   - Authentication failures return appropriate error messages

### Proto Files
The project uses Protocol Buffers for defining service contracts:

- `auth.proto`: Authentication service definitions
- `user.proto`: User service definitions
- `book.proto`: Book service definitions

These proto files are used to generate TypeScript client and server code for gRPC communication.


### Error Handling
- Each service has proper error handling using NestJS's `BadRequestException`
- Errors are propagated through the gRPC chain
- Invalid IDs or missing resources return appropriate error messages
- Authentication failures return 401 Unauthorized
- Authorization failures return 403 Forbidden

These proto files are used to generate TypeScript client and server code for gRPC communication.

## Contributing

### Security Guidelines

1. **Authentication**
   - Always use JWT tokens for authentication
   - Validate tokens using `JwtAuthGuard`

2. **Error Handling**
   - Use appropriate HTTP status codes
   - Handle gRPC errors gracefully
   - Log errors appropriately

3. **Code Organization**
   - Keep authentication logic in `auth-service`
   - Use guards for protected routes
   - Implement proper error handling

4. **Testing**
   - Test authentication flows
   - Test error scenarios
   - Test service-to-service communication

## Security Implementation

1. **Authentication**
   - JWT-based authentication
   - Token validation through Auth Service
   - Protected routes using `JwtAuthGuard`
   - User information in gRPC metadata

2. **Authorization**
   - Role-based access control
   - Protected endpoints require valid JWT
   - Token expiration handling
   - Request validation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add tests for new features
4. Update documentation
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## License

MIT

## Authors

- Cedric - Initial work

## Acknowledgments

- NestJS team for the excellent framework
- gRPC team for the protocol implementation
- All contributors to the project

## License

MIT

## Authors

- Cedric - Initial work

## Acknowledgments

- NestJS team for the excellent framework
- gRPC team for the protocol implementation
- All contributors to the project