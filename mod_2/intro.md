# Module 2

What do I need to know right now?

1.  MVC methodology
2.  Request/response cycle

## Request/Response cycle
- The client submits a url or clicks on a new link to request a webpage.
- Request/Response cycle happens in the server.
- Server responds with HTML.
- Every image, font, CSS file and Javascript file are new requests that are made.


## MVC
- A way to organize your code
- **M** Model - Talks to the DB
- **V** View - The HTML files that are returned the client.
- **C** Controller - The conductor. Talks to the models and the views. 

Steps:
1. Request `https://www.ruby-lang.org/en/community/`
2. Routing decides what controller should handle the request for `/en/community`
3. Controller has code to determine what info is needed at `/en/community`. Talks to the model. Model talks to databse and retreives info the controller wants. 
4. Controller tells the View which template and gives it the informatino it retrieved. The view inserts the information form the controller into the correct template. 
5. Respond with html file.
