# nextjs-stack
Build web app using nextjs.
Additional library required are axios, bcryptjs (for encryption of the token), jsonwebtoken, nodemailer, react-hot-toast (this gives pop up message, this will be future feature), and mongoose (a wrapper around MongoDB). Command to install above: npm i axios ... etc
For Next.js, we do not need Express.

We also use .env 

The folder structure goes as follow (for these 2 files: they have to be named page.tsx and route.ts, otherwise, the app will crash. This is because we do not need to configure the router, when you create nextjs project, it automatically uses Router if you set it up, otherwise you need to configure the router manually):
src: --> everything goes inside src folder
 1. app
  a. login (frontend)
   a.1 if this is a frontend, we call this page.tsx, for every single router
  b. signup (frontend)
   b.1 similarly, because this is a frontend, we need to call this file: page.tsx
  b. api (all of backend part has to be inside a folder called api) 
   b.1 users (anything related to users backend)
    b.1.1 login (this is a backend to control login)
      b.1.1.1 route.ts (for backend, everything has to be called route.ts, instead of page.tsx)
    b.1.2 signup (this is a backend to control signup)
      b.1.2.1 route.ts (similar to the rest, every files under each folder has to be called route.ts)
   b.2. home
  c. models
  d. helpers
