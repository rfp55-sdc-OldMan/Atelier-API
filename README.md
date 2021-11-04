# Atelier Products API
API service for Products-related data of Toph Clothing Co

## Database Selection

The backend database for this API is PostgreSQL. As a relational database management system, PostgreSQL is able to extract data in the desired format using aggregate functions, and can be optimized for performance using indexing.

## API Setup

This API service is initially created with one Express server and one PostgreSQL database.
After testing locally that the system can handle 100 requests per second, the server and database are each deployed to an AWS EC2 instance for stress-testing.

## Stress Testing
