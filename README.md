# Mini Blog - An easy-to-use Express/Typescript API with a minimal frontend for pushing your blogs to your personal portfolio or anywhere else. 

### Purpose

The reason I set out to build this API is to get more familiar with setting up and using Typescript in Node.js as well as to create a way for me to automate my blog post flow. I would like to have a connection to my portfolio so that I can easily add new blog posts by simply consuming this API which will send the post content as raw HTML inside a simple JSON object. 

### Tech Used


## API Endpoints

`/api/posts/:author`

#### GET:
Sending a "GET" request to the posts endpoint with an author specified as a paramater will give you back all the posts for the author as JSON. The returned value would look something like this: 
![Screen Shot 2023-05-03 at 3 32 19 PM](https://user-images.githubusercontent.com/99948055/236046960-522e6669-85a5-4075-a788-bb89b0438b82.png)

`/api/posts`

#### POST:
Sending a "POST" request to the posts endpoint will allow the user to create a post. The expected request body is:
```
{
content: blogContent,
name: authorName,
}
```
The blog content is expected to be HTML, and styling of content is completely up to the consumer of the API. 

`/api/auth/register` 

#### POST:
Sending a post request to the register endpoint will create a new user to publish blog posts. The expected request body format is as follows:
```
{
username,
password,
passwordConfirm
}
```

`/api/auth/login` 

#### POST:
Sending a post request to the login endpoint with allow you to login an already registered user. The expected request body format is as follows:
```
{
username,
password
}
```

## Frontend 

I put together a super minimal frontend for authenticating and creating new posts, but you can interact with the API from your own application, and the API does not depend on a particular rich text editor, though I use TipTap for a minimal solution. Users are first greeted with a login page:
![Screen Shot 2023-05-03 at 3 36 04 PM](https://user-images.githubusercontent.com/99948055/236048532-f553c3d0-6eae-463a-9d65-ce658ebdb1e1.png)

After logging in, users can use the rich text editor I put together with the help of TipTap to create new posts!

![Screen Shot 2023-05-03 at 3 38 46 PM](https://user-images.githubusercontent.com/99948055/236048876-68fa9695-964c-4582-8446-d8b3fd9cf685.png)


