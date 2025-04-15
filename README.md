## About The Project

GoChat is a real-time chat application that allows users to send and receive messages instantly. It utilizes Go for the backend, WebSockets for real-time communication, and Redis for message persistence and pub/sub functionality. The frontend is built with HTML, CSS (Tailwind CSS), and JavaScript.

### Key Features

- **Real-time Messaging:** Send and receive messages instantly using WebSockets.
- **Multiple Channels:** Supports multiple chat channels for different topics or groups.
- **Usernames:** Users can choose a username to identify themselves in the chat.
- **Message Persistence:** Uses Redis to manage the publish/subscribe functionality for distributing messages.
- **Styled UI:** The user interface is styled with Tailwind CSS for a modern look and feel.

## Architecture

The application consists of the following components:

- **Backend (Go):**
  - Handles WebSocket connections.
  - Implements the chat logic.
  - Uses Redis for pub/sub to distribute messages to connected clients.
  - Uses the `gorilla/mux` library for routing.
  - Uses the `gorilla/websocket` library for WebSocket communication.
  - Uses the `go-redis/redis/v8` library for interacting with Redis.
- **Frontend (HTML, CSS, JavaScript):**
  - Provides the user interface for sending and receiving messages.
  - Uses WebSockets to communicate with the backend.
  - Uses Tailwind CSS for styling.

## Getting Started

To get started with GoChat, follow these steps:

### Prerequisites

- Go (version 1.23.2 or higher)
  ```sh
  # Check your Go version
  go version
  ```
- Redis
  ```sh
  # Installation instructions for Redis can be found at: https://redis.io/docs

# Screenshots
## Username Creation
<img width="545" alt="Screenshot 2025-04-15 at 6 54 18 PM" src="https://github.com/user-attachments/assets/63f945d2-cdb6-4f16-8b50-6dd7a0a634e9" />

## Chat Screen
<img width="450" alt="Screenshot 2025-04-15 at 6 54 11 PM" src="https://github.com/user-attachments/assets/c7acb536-48db-4b27-8aa1-1383d3fe941d" />


