
# KRONOS

by Bernardo & Silvi

________________________________________________________________________________
## Description

Task Management System.
________________________________________________________________________________
## User Stories
________________________________________________________________________________
- 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

- 500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

- homepage - As a user I want to be able to access the homepage so that I see what the app is about and login and signup

- sign up - As a user I want to sign up on the webpage so that I can see all the tasks that I must accomplish

- login - As a user I want to be able to log in on the webpage so that I can get back to my account

logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

user task list - As a user I want to see all the tasks available so that I can work it out

manager task list - As a manager I want to see all the tasks pending so that I can plan it

task create - As a manager I want to create a task so that I can assign it to an employee 

task detail - As a user I want to see the task description 

task edit - As a user I want to be able to edit the status of the task 

________________________________________________________________________________
## Backlog
List of other features outside of the MVPs scope
________________________________________________________________________________
- Responsiveness
- User delete
- API
________________________________________________________________________________
## ROUTES:
________________________________________________________________________________


!!!!!!!!!!!!!!!!!!!!!!!
- GET /
  - renders the landing page with log in and sign up
- GET /signup
  - renders the signup landing page to choose type of user and department
  - body:
    - name
    - password
    - department
    - userType

- POST /signup
  - body:
    - name
    - department
    - password
    - userType
  - redirects to /login if successful

- GET /login
  - renders login form 

- POST /login

  - body:
    - username
    - password
  - redirects to respective dashboard

- GET /manager/
  - renders 
- GET /manager/add-task
  - renders form to add a task
- POST /manager/add-task
  - body:
    - title
    - description
    - department
    - status
    - asignTo
    - asignBy
  - redirect to profile
- GET /manager/:taskId/edit
  - renders task-detail page (add-task page with prefilled values)
- POST /manager/:taskId/edit
  - body:
    - any changes made
  - redirect to /manager with edited task
- GET /manager/:taskId/delete
  - deletes task with that unique id

- GET /user
  - renders user dashboard showing tasks they've been asigned to
- GET /user/:taskId/edit
  - renders task-detail page (add-task page with prefilled values)
- POST /user/:taskId/edit
  - body:
    - any changes made
  - redirect to /profile with edited task

________________________________________________________________________________
## Models
________________________________________________________________________________

User model

username: String
password: String
department: String, enum
userType: String, enum
timestamp: true

Task model

title: String
description: String
department: String, enum
status: String, enum
asignTo: ObjectId
asignBy: ObjectId


________________________________________________________________________________
## Links
________________________________________________________________________________

Trello



Link url



Slides


Link Slides.com