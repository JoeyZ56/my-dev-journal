## Concepts

### 1. What is a REST API, and how is it different from a website?

What is a REST API?

    A REST API (Representational State Transfer Application Programming Interface) is a set of rules and standards for building and interacting with web services. It allows different software applications to communicate with each other over the internet, typically using HTTP (Hypertext Transfer Protocol) requests. Think of it like a standardized menu that applications can use to request information or actions from a server.

Key characteristics

    REST APIs have several key characteristics, including their use of standard HTTP methods like GET, POST, PUT, and DELETE for operations on resources. They are also stateless, meaning each request contains all necessary information, and are resource-based, identifying data and functionalities with URIs. While JSON is common, they can use various data formats like XML, plain text, or HTML.

How a REST API differs from a website

While both use the internet and HTTP, REST APIs and websites differ in purpose, interaction, content, and use of browsers.

    1. Purpose and audience: REST APIs are for programmatic interaction between applications, targeting developers and other software, while websites are for human interaction via a GUI, targeting end-users.

    2. Interaction methods: REST APIs use structured requests and responses with HTTP methods and formats like JSON, returning data rather than visual pages. Websites use visual elements and return HTML, CSS, and JavaScript for browser rendering.
    3. Content and format: REST APIs focus on raw data transfer in formats like JSON for client application interpretation. Websites deliver pre-rendered content like HTML, images, and video for direct human viewing.

    4. Browsers and display: REST APIs are primarily consumed by other applications, not directly by browsers for display, though they can be tested in browsers or tools. Websites heavily rely on web browsers to render content visually.

In essence

A REST API serves as the "backend" for communication and data sharing between software components. A website is the "frontend" that provides a visual interface for users to access that information. Many websites use REST APIs to fetch data and update content dynamically.

---

### 2. What are the HTTP methods (GET, POST, PUT, DELETE) used for?

The four HTTP methods GET, POST, PUT, and DELETE, also known as HTTP verbs, define the actions a client wants to perform on a resource on a server, according to MDN Web Docs.

#### 1. GET - Retrieve data

    The GET method is used to retrieve data from a specified resource on a server without modifying it.

Analogy

Think of it like asking for a book from a library – you're requesting information without making any changes to the library's collection.

Key characteristics

    Safe: GET requests do not alter the server's state, meaning they only retrieve data and don't create, update, or delete anything.

    Idempotent: Making the same GET request multiple times will have the same effect as making it once. The server's state won't be changed by repeated requests.

    Cacheable: Responses to GET requests can be cached by browsers and proxy servers to improve performance by reducing the need for repeated requests to the server.

    Data in URL: GET requests send parameters as part of the URL's query string, making them visible in the browser's address bar.

    Not for sensitive data: Due to the data being exposed in the URL, GET is not recommended for sending sensitive information like passwords.

Use cases

    Loading web pages: Browsers use GET to fetch HTML, CSS, and other files to display a web page.

    Fetching data from APIs: Applications retrieve data from APIs using GET, such as a weather app fetching the current temperature from a weather API.

    Search queries: Search engines use GET to include the search term in the URL, allowing the server to return a list of matching results.

    Retrieving files: Downloading images, videos, or other files from a server.

#### 2. POST - Create new resources or submit data

    The POST method is used to submit data to a server to create new resources or submit data for processing.

Analogy

Imagine filling out a new customer form and submitting it to a store – you're sending new information to be added to their records.

Key characteristics

    Not Safe: POST requests can modify the server's state by creating new resources or altering existing data.

    Not Idempotent: Sending the same POST request multiple times might create duplicate resources or have different side effects.

    Data in Request Body: POST requests send data within the request body, not in the URL, making them suitable for sensitive information.

    Not Cacheable (typically): Responses to POST requests are generally not cached to prevent potential inconsistencies with server data changes.

Use cases

    Form submissions: When a user submits an HTML form, such as creating a new user account or submitting a blog post, the data is sent to the server using POST.

    Creating new resources: Adding a new item to an online shopping cart, creating a new post on a social media platform, or uploading a new file.

    File uploads: Sending file data to a server, such as images or documents, to be saved or processed.

    API operations: Creating new users, submitting comments, or updating database records through an API.

#### 3. PUT - Update or replace existing resources

    The PUT method is used to update or completely replace an existing resource on the server at a specified URL.

Analogy

Think of it like replacing an old version of a document with a completely new version in your computer's files – the old document is gone, and the new one takes its place.

Key characteristics

    Not Safe: PUT requests modify the server's state by updating or replacing resources.

    Idempotent: Sending the same PUT request multiple times will have the same effect as sending it once – the resource will be updated to the same state.

    Data in Request Body: Similar to POST, PUT requests send data in the request body.

    Not Cacheable (generally): Since PUT modifies existing data, caching responses might lead to outdated information.

Use cases

    Updating user profiles: Changing a user's name, email, or other details.

    Modifying blog posts: Editing the content of an existing blog post.

    Updating product details: Changing the price or description of a product in an e-commerce store.

#### 4. DELETE - Remove resources

    The DELETE method is used to delete or remove a specified resource from the server.

Analogy

Imagine throwing away a document in your trash bin – you're removing it from the server's storage.

Key characteristics

    Not Safe: DELETE requests modify the server's state by removing resources.

    Idempotent: Deleting the same resource multiple times will have the same effect as deleting it once – the resource will still be gone.

    Typically No Request Body: DELETE requests generally don't include a request body, as the resource to be deleted is identified by the URL.

Use cases

    Deleting user accounts: Removing a user's account and associated data from the server.

    Removing items from a shopping cart: Users can delete items from their cart before checkout.

    Deleting posts or comments: Removing user-generated content from a social media platform or content management system.

---

### 3. What does req and res mean in an Express route handler?

Req and Res in Express route handlers

    In Express.js, req and res are fundamental objects that represent the HTTP request and HTTP response, respectively. They are passed as arguments to route handlers and middleware functions, allowing you to access information about the client's request and send a response back to the client.

#### 1. req (request object)

    The req object encapsulates all the information about the incoming HTTP request from the client.

    It allows you to access various properties and methods to retrieve data sent by the client.

Key properties and methods

    * req.params: Access route parameters (e.g., id in /users/:id).

    * req.query: Access query string parameters (e.g., keyword in /search?
    keyword=example).

    * req.body: Access data sent in the request body (e.g., for POST/PUT requests).

    * req.headers: Access HTTP headers sent by the client.

    * req.method: Get the HTTP method (e.g., GET, POST) of the request.

    * req.url: Get the URL of the request.

    * req.ip: Get the remote IP address of the request.

Analogy

Think of req as the client's order form. It contains all the details of what the client wants: the type of request, the specific resource, any additional information they're sending, and so on.

#### 2. res (response object)

    The res object allows you to build and send the HTTP response back to the client after processing the request.

    It provides methods to send different content types, set status codes, set headers, and control the response before sending it back to the client.

Key methods

    * res.send(): Sends a response of various types (e.g., string, HTML, JSON).

    * res.json(): Sends a JSON response.

    * res.status(): Sets the HTTP status code for the response (e.g., 200 for success, 404 for not found).

    * res.redirect(): Redirects the client to a different URL.

    * res.render(): Renders a view template and sends the HTML response.

    * res.end(): Ends the response process quickly.

Analogy

Think of res as the server's response to the client's order. You use it to package up the requested information (or an error message if something went wrong) and deliver it back to the client, along with any relevant details like the delivery status (status code) or special instructions (headers).

### In summary (req,res)

In essence, req gives you the tools to understand what the client is asking for, and res provides the tools to craft and send back the appropriate reply. They are essential for building any web application with Express.js.

---

### 4. How would you explain what middleware is?

    In the context of Express.js and web development, middleware is a function that sits between a web server receiving a request and sending a response back to the client.

Imagine a chain of tasks

    Think of it like this: when you order food at a restaurant (the server receives a request), there's a whole series of steps involved before you actually get your meal (the server sends a response) .

    Someone takes your order (initial request processing).

    The kitchen verifies the order, checks if ingredients are available (authentication, data validation).

    The chef prepares the food (core application logic).

    The waiter brings the food to your table (sends the response).

    Each of these steps can be seen as a middleware function. In Express.js, these middleware functions are executed in order, one after the other, forming a "middleware stack" or "chain".

Key aspects

Interception and Modification: Middleware functions have access to the req (request) object and res (response) object. This allows them to:

    Execute any code.

    Make changes to the request and response objects, such as modifying request data, adding headers, or setting cookies.

    End the request-response cycle by sending a response to the client (e.g., if a user is not authenticated).

    Call the next() function to pass control to the next middleware function in the stack.

Sequential Execution: Middleware functions are executed in the order they are defined in your application.

Modular and Reusable: Middleware promotes modularity by separating concerns into distinct, reusable functions. Instead of writing the same authentication logic in every route handler, you can create a single authentication middleware and apply it to the relevant routes.

When does it come into play?

Middleware functions are executed after the server receives a request and before the response is sent back to the client.

Examples

    Authentication: Middleware can check if a user is logged in or has the necessary permissions to access a particular route.

    Logging: A common use case is logging details about incoming requests, such as the timestamp, request method, and URL.

    Body Parsing: Middleware like express.json() and express.urlencoded() parse the request body, making it easier to work with data sent in POST or PUT requests.

    Error Handling: Middleware can catch and handle errors that occur during the request-response cycle, preventing the server from crashing.

    Middleware is a powerful and flexible feature in Express.js that allows you to add functionality and control the flow of your application in a structured and efficient way.
