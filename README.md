

# AWS S3 File Upload with Rate Limiting - Nestjs 

## Description

This project is a robust and efficient file upload system built with NestJS. It leverages the power of AWS S3 for storage, ensuring scalability and reliability. One of the key features of this project is its rate-limiting capability, which prevents abuse and ensures fair usage by limiting the number of upload requests a user can make within a certain time frame.

The system is designed with a focus on security and efficiency. Files are directly uploaded to AWS S3, reducing the load on your server and ensuring that files are securely stored in a robust and scalable storage solution.

## Features

- **AWS S3 Integration**: Utilizes AWS S3 for robust and scalable file storage.
- **Rate Limiting**: Prevents abuse by limiting the number of upload requests a user can make within a certain time frame.
- **Direct Uploads**: Files are uploaded directly to AWS S3, reducing the load on your server.
- **Security**: Ensures that files are securely stored in AWS S3.
- **Scalability**: Designed to handle a large number of file uploads without compromising performance.
- **Efficiency**: Optimized for fast and efficient file uploads.

## Configuration

This project uses environment variables for configuration. The necessary variables are:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_S3_REGION`: The AWS region where your S3 bucket is located.
- `UPLOAD_RATE_TTL`: The time frame for rate limiting (in seconds).
- `UPLOAD_RATE_LIMIT`: The maximum number of upload requests a user can make within the `UPLOAD_RATE_TTL` time frame.

To set up your environment variables:

1. Copy the `.env.example` file and rename the copy to `.env`.
2. Fill in the necessary environment variables in the `.env` file.

Here's an example of how to do this in a terminal:

```bash
cp .env.example .env


## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Developed By

This project was developed by **Bertoldo Klinger**. 

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/bertoldoklinger/) or check out my other projects on [GitHub](https://github.com/bertoldoklinger/).


