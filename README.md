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

The project uses gRPC for inter-service communication. Services are registered using NestJS's `ClientsModule` with the following configuration:

- Transport: gRPC
- Protocol: protobuf
- Services: User and Book services
- Communication: Through generated proto files

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