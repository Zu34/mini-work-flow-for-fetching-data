## validate user input, send a signup request to the server, and handle the response appropriately

### Sending Data to the Server
**If the form is valid, the script:**

* Logs the data to the console using ``console.log()`` (useful for debugging).
* Calls ``apiService.signup`` — an *asynchronous* function that sends a <POST> request to the server's ``/signup`` endpoint with the user's data (name, email, password) as JSON.
Here’s the request flow:

* Method: <POST>
* Headers: Sets ``Content-Type`` to ```application/json``` to indicate the format of the request body.
* Body: Converts the user data into JSON format using ```JSON.stringify()```

 ### Handling the Server Response
The server's response determines the next steps:

#### If the response is successful ``(response.success === true)``:

- The user is shown an alert: <Signup successful!>
- The page redirects to ```login.html``` for the user to log in.
* If the response indicates an **error**:

- An alert displays the error message returned by the server (or a default message if no specific error is provided).
If there’s a network error or the server is unreachable:

#### The ``catch`` block handles the error, logs it to the console, and shows an alert message to the user.