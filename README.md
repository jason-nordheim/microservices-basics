# README 

This is a simple repository illustrating a blog using Microservices in JavaScript.

> For simplicity, this project will store all data models in memory. Restarting any of the services will result in a wipe of any data pertaining to that service. 

## Technology & Architecture Overview

* Front-end 
  * React Application (node.js) 
    * npm modules: `react` 

* Back-end 
  * Posts service (node.js)
    * npm modules: `express` 
  * Comments service (node.js)
    * npm modules: `express`, 

## Folder Structure 

* ~ _root_ 
  * /client _react application_
  * /posts _posts service_ 
  * /comments _comments service_ 

## Services 

### Posts Service 

Post service, responsible for: 
1. Creating a new post 
2. Retrieving all posts 

| Path | Method | Body? | Desc | 
|:---|:---|:---|:---|
| `/posts` | POST | `{ title: string }` | create a new post | 
| `/posts` | GET | - | retrieve all posts | 

### Comments 

Comments service - responsibilities: 
1. Creating a comment associated with a given post ID 
2. Retrieve all comments associated with a given post ID 

| Path | Method | Body? | Desc | 
|:---|:---|:---|:---|
| `/posts/:id/comments` | POST | `{ content: string }` | create a new comment associated with the given post | 
| `/posts/:id/comments` | GET | - | retrieve all comments associated with a given post ID | 



## Data Models 

* Posts 
  * id:string 
  * title:string 
* Comments 
  * id: string 
  * content * string 




`node`, `express`, `cors`, and  JavaScript. 