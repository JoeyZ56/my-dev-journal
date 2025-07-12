## 🧠 Part 1: Core Concepts (20–30 min)

    1.	What is system design, and why is it important in building scalable apps?

    2.	What’s the difference between a monolith and microservices?

    3.	When should you use caching, and what problem does it solve?

    4.	What are stateless vs stateful systems?

    5.	What’s the difference between horizontal and vertical scaling?

### 1. System design and its importance in building scalable apps.

What is System design?

    System design is the process of defining a system's architecture, components, modules, interfaces, and data to meet specific functional and non-functional requirements. It involves creating a blueprint for implementation, focusing on organization, efficiency, and meeting the intended purpose while considering factors like scalability, maintainability, and performance.

Key aspects of system design

    Key aspects include defining the system's overall structure (architecture), identifying individual parts and their roles (components and modules), and determining how these parts interact (interfaces). It also covers organizing and processing data (data structures and algorithms), ensuring the system can handle increased load (scalability), building systems that can recover from failures (reliability), designing adaptable systems (maintainability), and optimizing for efficient resource use (performance).

Why is system design important for building scalable applications?

    Scalability refers to a system's ability to handle growing demand without performance issues. Good system design is crucial for building scalable applications because it enables strategies for handling increased load through horizontal and vertical scaling. It helps maintain high performance under heavy load by incorporating techniques like caching and load balancing. System design also ensures reliability and availability through redundancy and fault tolerance, and can be cost-effective by optimizing resource allocation. A well-designed system, especially with a modular or microservices architecture, can easily adapt to future growth and changes. Good design practices also improve maintainability and collaboration among development teams.

System design provides the foundation for creating applications that can manage current demands and grow seamlessly as needs increase, leading to robust, efficient, and resilient applications.

##### In my words...

System design and its importance in scaling is a crucial part of building an app. From creating an idea of what the app is, should look like, to functionality and coding, adhering to a architect structure can lead to an easier and soother transition to the growth of tha app. planning ahead for failures and reliability with a clean code approach can lead to success and easier managements as the app grows.

---

### 2. Monolith vs. microservices in software architecture

The fundamental difference between monolithic and microservices architecture lies in how an application's components are structured and interact.

#### Monolithic Architecture

Monolithic architecture is a traditional approach where all components of an application are tightly coupled and housed in a single, unified codebase. Think of it like a single, large building where all the rooms are connected and you can't change one room without affecting others.

    - Key features: Single codebase, shared resources and data, deployed as a single unit.

    - Analogy: A large, integrated machine, where each part is dependent on the other and cannot function independently.

    - Development: Easier to start with for simple applications, but becomes complex to manage and update as the application grows.

    - Scaling: Requires scaling the entire application, even if only a specific part needs more resources, leading to inefficiency.

    - Deployment: Deploying updates or new features requires redeploying the entire application, potentially causing downtime.

    - Reliability: A bug or issue in one part of the application can potentially bring down the entire system, leading to single points of failure.

    - Examples: Many legacy applications and simple websites, initially developed as a single codebase.

#### Microservice Architecture

    Microservices architecture, on the other hand, is a modern approach that decomposes an application into a collection of small, independent services. Imagine a collection of small, specialized workshops, each responsible for a particular task and capable of operating autonomously.

    - Key features: Multiple independent codebases, each service manages its own resources and data, communicates through well-defined APIs.

    - Analogy: A collection of small, specialized workshops, each responsible for a particular task and capable of operating autonomously.

    - Development: Requires more upfront planning and design, but allows for faster development and easier maintenance over time.

    - Scaling: Each service can be scaled independently based on its specific needs, leading to more efficient resource utilization.

    - Deployment: Updates or new features can be deployed to individual services without impacting the rest of the application, enabling continuous deployment.

    - Reliability: A failure in one service is isolated and does not necessarily affect the entire application, increasing resilience.

    - Examples: Modern, cloud-native applications like Netflix, Amazon, and Uber, where scalability and rapid development are critical.

In essence, monolithic architecture simplifies initial development but can become a hurdle as applications grow in size and complexity, while microservices architecture offers greater flexibility and scalability at the cost of increased initial complexity and operational overhead. The best approach depends on the specific needs of the application, team size, and long-term business goals.

#### In my words...

Monolithic Archetype is where every part of the code base is in one location. frontend, backend, connection to database can be found in one repo. A good approach for small apps or solo to small teams. Down side of this is, as the app grows, it becomes harder to maintain and has higher risk of having a chain reaction of bugs that can cause the app to shut down.

Microservice Archetype is where different api points are separated into their own repos, code, base, deployments etc.. Great for managing large and growing app that can handle breaks or bugs in the code without shutting down the entire application. Down side to this with working with a team, there can be confusion or miscommunication with improper documentation or unclean code.

---

### 3. Caching and the problems it solves.

Caching is a technique used in computer systems to store copies of frequently accessed data in a temporary, high-speed storage location called a cache. This allows for quicker access to that data in the future, bypassing the need to retrieve it from the original, slower source.

#### When to use caching

Caching is particularly useful when dealing with data that is:

    - Accessed frequently but modified infrequently: This is a classic use case. Think of things like product catalogs in an e-commerce store, which are viewed countless times, but their details change only occasionally.

    - Costly or time-consuming to compute or retrieve: If generating a response involves complex calculations or multiple database queries, caching the result can significantly improve performance.

    - Located far from the application: Network latency can cause significant delays when fetching data. Using a CDN (Content Delivery Network) to cache content closer to users can drastically improve response times.

    - Subject to high contention: If a particular piece of data is requested simultaneously by many users, caching can alleviate the load on the original data source.

#### Examples of how caching can be applied:

    - Web applications: Browsers cache HTML files, images, and Javascript to speed up page loading. Web servers can cache dynamically generated content, reducing the need to regenerate it for every request. CDNs cache content geographically closer to users to reduce latency.

    - Databases: Database systems often use internal caches to store frequently accessed data or query results, improving database performance and reducing the number of costly disk I/O operations.

    - APIs: Caching API responses, especially for data that changes infrequently, can drastically improve response times and reduce server load.

    - Machine learning: Caching the output of computationally intensive machine learning models or the models themselves can speed up inference and loading times.

#### Problems caching solves

Caching addresses several key challenges in computer systems, including:

    - Slow data access: Accessing data from slower storage layers like databases, hard disks, or across networks can introduce significant delays. Caching stores data in faster storage (like RAM), reducing these access times dramatically.

    - Increased workload on original data source: Frequent requests for the same data can overload databases or other services. Caching offloads these requests, reducing the burden on the original source and improving its overall availability and performance.

    - High network traffic: Repeatedly fetching data over a network consumes bandwidth and can lead to slower response times, especially for users geographically distant from the server. Caching reduces network traffic by serving cached copies of data closer to the user.

    - Unpredictable performance: Systems without caching can experience performance fluctuations during peak usage times as the underlying data sources struggle to keep up. Caching provides a buffer and helps to maintain more consistent and predictable performance, even under heavy loads.

    - Cost reduction: By minimizing the need for expensive database operations or additional infrastructure to handle peak load, caching can help reduce overall infrastructure costs.

In essence, caching acts as a performance accelerator and scalability enhancer, making applications more responsive, efficient, and cost-effective.

In my own words...
Caching is a create method of storing frequently used data that doesn't change often. Helping an app run faster and soother with out having to constantly fetch data from the slower source. It helps negate problems with high traffic, unpredictable performance, and cost reduction.

---

### 4. Stateless vs. Stateful systems

In software engineering and systems architecture, stateless and stateful describe how a system manages information about its interactions, user sessions, or ongoing processes.

#### 1. Stateful systems

    - Definition: A stateful system retains and remembers information (its "state") from past interactions with clients or users.

    - How it works: The server or application maintains a session state, which contains context and data from previous requests. This enables the system to provide personalized experiences and continuity across interactions.

    - Analogy: Imagine an ongoing conversation with a person who remembers your previous statements. You can pick up where you left off without re-explaining everything.

    - Examples: Online banking systems (remembering your login and account details), e-commerce shopping carts (remembering what's in your cart), online games (tracking your progress).

Benefits:

    - Enhanced user experience: Provides a continuous and personalized experience by remembering user data and preferences.

    - Data consistency: Maintains data integrity in scenarios with complex interactions like banking transactions.

    - Operational efficiency: Can be faster in certain operations because the server already has necessary data, reducing the need for repeated data retrieval.

Drawbacks:

    - Scalability challenges: Can be harder to scale horizontally because users are often tied to specific servers that hold their session data.

    - Complexity: Managing and synchronizing state across multiple servers can be challenging and resource-intensive.

    - Resource utilization: May require more memory and processing power to maintain session information.

    - Fault tolerance: The loss of a server can result in the loss of session data unless additional measures are in place.

#### 2. Stateless systems

    - Definition: A stateless system treats each request or interaction as entirely new and independent, without any memory or knowledge of past interactions.

    - How it works: Each request from a client must contain all the information necessary for the server to understand and process it. The server processes the request and then forgets about it.

    - Analogy: Imagine a vending machine: each time you make a purchase, it's a new, isolated transaction. The machine doesn't remember your previous choices.

    - Examples: REST APIs, HTTP protocol, most microservices, and serverless computing functions.

Benefits:

    - High scalability: Can be easily scaled horizontally by adding more servers because each request can be handled by any available server.

    - Fault tolerance: More resilient to failures because the loss of a server doesn't impact ongoing user sessions.

    - Simplicity: Easier to develop, test, and maintain since there's no need to manage state across multiple requests.

Drawbacks:

    - Less personalized: Cannot easily tailor responses based on past interactions without additional mechanisms (e.g., cookies on the client side or external data stores).

    - Increased data in requests: Each request must carry all necessary information, which can potentially increase network traffic and latency.

    - Potential performance issues: May require frequent database queries to retrieve user data, potentially creating bottlenecks if not managed carefully.

#### Choosing between stateful and stateless

The choice between stateful and stateless architecture depends on the specific needs of your application.

Choose stateful when:

    - Your application requires persistent user sessions and personalized experiences.

    - The workload is relatively predictable, and the server can handle the anticipated load.

    - You need to maintain data consistency and integrity across complex, multi-step interactions.

Choose stateless when:

    - Scalability and resilience are your top priorities.

    - The application processes independent requests that don't require historical context.

    - You are building services like public APIs, microservices, or serverless functions that need to handle high volumes of traffic efficiently.

Hybrid architectures

    Many modern applications leverage a hybrid approach, combining stateless and stateful components to achieve the benefits of both. For example, a system might use stateless APIs for core functionality to ensure high scalability while employing stateful sessions for personalized user experiences, managing state through external session stores like Redis.

#### My own words...

Stateful systems: A system that remembers information from the user, such as login or whats in the user's cart. holding it in the current session. It is easier to manage multiple requests, but is less personalized towards the user because it would need more logic to save more details to different states.

Stateless System: A system that treats each request as independent, saving no memory of past data or interactions. It is easily scalable, adding more servers can increase the amount of requests that can be made. A downside is the data can grow for each request causing network traffic to slow.

### 5. What’s the difference between horizontal and vertical scaling?

In system architecture and design, horizontal scaling (scaling out) and vertical scaling (scaling up) are two distinct approaches to handle increased workload and demand.

Horizontal scaling (scaling out)

    - This approach involves adding more machines, servers, or nodes to a system to distribute the workload across them.

    - It's like adding more lanes to a highway to accommodate more traffic.

    - This is often used for web applications, content delivery networks (CDNs), and databases where workloads can be distributed.

    - Example: Adding more web servers to handle increased traffic to a website.

Vertical scaling (scaling up)

    = This approach involves increasing the capacity of individual machines or servers in a system by adding resources like CPU, RAM, or storage.

    = It's like expanding the capacity of a single bridge to accommodate more traffic.

    = This is often suitable for applications that require high processing power or memory and may not be easily distributed across multiple servers.

    = Example: Upgrading the CPU and RAM of a database server to handle more complex queries and larger datasets.

#### My own words...

Horizontal scaling involves increasing hardware of data server capacity to distribute work flow. Where as Vertical involves increasing storage or CPU to increase an apps growth.
