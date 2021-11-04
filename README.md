# Atelier Products API

API service for Products-related data of Toph Clothing Co

## Purpose

This API service was created to accommodate higher traffic flow after the front-end redesign of Toph Clothing Co, utilizing a microservice-based architecture instead of a monolithic design.

## Database Selection

The backend database for this API is PostgreSQL. As a relational database management system, PostgreSQL is able to extract data in the desired format using aggregate functions, and can be optimized for performance using indexing.

## API Setup

- This API service is initially created with one Express server and one PostgreSQL database.

## Performance Metrics

- Local testing confirmed the system capacity to be at least 100 requests per second.

- Average query speed for each endpoint is 25ms.

- The server and database are each deployed to an AWS EC2 instance for stress-testing.

## Stress Testing

Loader.io was used for stress-testing.

With one server in place, the system capacity was around 5,000 requests per second.

## Load Balancing

Nginx was used to horizontally scale system capacity. A total of 3 node servers were deployed as AWS EC2 instances. Load-balancing resulted in a system capacity of 8,000 requests per second.
