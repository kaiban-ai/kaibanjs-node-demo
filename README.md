# (KaibanJS + NodeJS) News Blogging Team Demo

This repository contains a demonstration project for the KaibanJS framework, utilizing NodeJS to create a dynamic AI-powered blogging platform. The application leverages AI agents to research the latest news on a specified topic and automatically generate a comprehensive blog post.

**KaibanJS Resources:**
- [KaibanJS GitHub Repository](https://github.com/kaiban-ai/KaibanJS)
- [KaibanJS Official Website](https://www.kaibanjs.com/)

## Installation

To get this project up and running, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/kaiban-ai/kaibanjs-node-demo
   cd kaibanjs-node-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the project root and add your API keys for Tavily and OpenAI:

```
TAVILY_API_KEY=your-tavily-api-key
OPENAI_API_KEY=your-openai-api-key
```

## Running the Application

To start the application:

```bash
node app.js
```

This will start the application in your terminal. Follow the prompts to interact with the AI blogging team.

## Features

- **AI Agent Setup:** Configures AI agents using KaibanJS to perform tasks such as news research and content generation.
- **Dynamic Blog Post Generation:** Uses AI to research and generate blog posts based on user-input topics.
- **Command-Line Interface:** Provides an interactive console-based interface for easy interaction with the AI agents.
- **Performance Metrics:** Displays statistics about token usage, processing time, and estimated costs for each generated blog post.

## Using the Demo

- When prompted, enter a topic you'd like a blog post about.
- The AI agents will research the topic and generate a blog post, which will be displayed in the console.
- After each blog post, you'll be prompted to enter another topic or quit the application.

## Contributing

Contributions to this project are welcome. Please feel free to fork the repository, make improvements, and submit pull requests.

## Feedback and Support

If you encounter any issues or have suggestions for improvements, please open an issue in this repository.