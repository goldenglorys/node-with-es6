# Getting Started With An Express And ES6+ JavaScript Stack

### **QUICK SUMMARY** => A basic introduction to the backend web application development process with Express — discussing bleeding edge ES6+ JavaScript features, the Factory Design Pattern, MongoDB CRUD Operations, servers and ports, and the future with enterprise n-tier architectural patterns for TypeScript projects.

## What is in it?

1. Implementation and deployment to MongoDB Database for storing user booklist information, build an API with Node.js and Express Web Application framework to expose the database and perform CRUD ops upon it, and more. Also spanning across ES6 Object Destructuring, ES6 Object Shorthand, the Async/Await syntax, the Spread Operator, CORS, the Same Origin Policy and more...

2. Second part involves refactoring the codebase as to separate concerns by utilizing three-layer architecture and achieving Inversion of Control via Dependency Injection, implementing JSOn Web Token, & Firebase Authentication security and access control, securly storing passwords, and using AWS Simple Storage Service to store user avatars with Node.js Buffers and Streams - while also utilizing PostgreSQL for data persistence. Re-writing of the codebase from ground up in Typescript as to examine Classical OOP concepts (such as Polymorphism, Inheritance, Composition, and so on) would be done and also design patterns like Factories and Adapters.

## Important Highligth

There is a problem with the majority of learning resources discussing Node.js out there today. Most of them, not all of them, go no further than depicting how to setup Express Routing, integrate Mongoose, and perhaps utilize JSON Web Token Authentication. The problem is that they don’t talk about architecture, or security best practices, or about clean coding principles, or ACID Compliance, Relational Databases, Fifth Normal Form, the CAP Theorem or Transactions. It’s either assumed that you know about all of that coming in, or that you won’t be building projects large or popular enough to warrant that aforementioned knowledge.

There appear to be a few different types of Node developers — among others, some are new to programming in general, and others come from a long history of enterprise development with C# and the .NET Framework or the Java Spring Framework.

The initial of this project will do exactly what many of those learning resources are doing, but the second would dive indepth. From refactoring of the codebase to learn principles such as Dependency Injection, Three-Layer Architecture (Controller/Service/Repository), Data Mapping and Active Record, design patterns, unit, integration, and mutation testing, SOLID Principles, Unit of Work, coding against interfaces, security best practices like HSTS, CSRF, NoSQL and SQL Injection Prevention, and so on. Also migrate from MongoDB to PostgresSQL using the simple query builder Knex instead of ORM - permitting us to build our own data access infrastructure and to get close up and personal with the Structured Query Language, the different types of relations (One-to-One, Many-to-Many, etc.), and more.

The second part, persisting of the book data would be done. Won't handle user authentication, password hashing, architecture, or anything complex like that. For now, and very basically, all this would cover is just build a method by which to permit a client to communicate with our web server via the HTTP Protocol as to save book information in a database. Will cover proper architecture in terms of Routers, Controllers, Services, Repositories, custom error classes, custom error middleware, custom error responses, Database Model/Domain Entity data mapping, and Command Query Separation (CQS).
