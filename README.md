# TECHT-assignment-
NoSQL
Exercise: Build a REST API for a NoSQL database
You are tasked with building a REST API that interacts with a NoSQL database.

In this project we use dependencies  #ExpressJS  #Mongoose  #Nodemon And for
Store data we use   #MongoDB
Before going to start this project install all dependencies by using 
command  ---> npm i express mongoose nodemon


All the handler part present in controller were I perform operations or create api's.
In this project client can create a notes and store inside Database(MongoDB). And fetch
Data whenever required. I use mongoose for creating Schema which present in Model Folder.

Here I perform #CRUD operation for create notes, delete notes, get notes, update notes, and also use status code for response.

This project is running on PORT 3000 And cluster link also mentioned.


#QUESTION

NoSQL
Exercise: Build a REST API for a NoSQL database
You are tasked with building a REST API that interacts with a NoSQL database. The NoSQL database is a simple key-value store with the following requirements:

The keys are strings.

The values are JSON objects.

The API should support the following operations:

POST /data: Accepts a JSON object and saves it to the database. The key should be generated automatically and returned in the response body.

GET /data/:key: Retrieves the JSON object associated with the specified key.

PUT /data/:key: Updates the JSON object associated with the specified key.

DELETE /data/:key: Deletes the JSON object associated with the specified key.

​

Requirements
Use any NoSQL database of your choice (MongoDB, Cassandra, etc.).

Use any programming language of your choice.

Use any web framework of your choice.

Use any libraries or tools that you deem necessary.

The API should be documented with clear instructions on how to use it.

Write unit tests to verify the functionality of the API.

Ensure that the API is secure and handles errors gracefully.

Ensure that the API can handle large amounts of data.

Ensure that the API is performant and scalable.

​

Evaluation
You will be evaluated based on the following criteria:

Correctness: The API should work as expected and meet the requirements.

Code quality: The code should be well-structured, easy to read and maintain, and follow best practices.

Documentation: The API should be well-documented with clear instructions on how to use it.

Unit tests: The unit tests should cover the functionality of the API and be well-written.

Security: The API should be secure and handle errors gracefully.

Performance: The API should be performant and scalable.

​

Submission
Please submit your code as a ZIP file containing the following:

The source code.

The documentation.

The unit tests.

Any instructions on how to run the code.