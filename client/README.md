# Personal Finance Tracker

## Task

Create a simple project that helps a user keep track of expenses and income, and allows real time changes.

## Brief Explanation of My Code

Using React + Vite + TypeScript + Clerk and with the help of [PedroTech](https://www.youtube.com/@PedroTechnologies), a small MERN stack application was created that will create personal finance tracker for those who signup and login. A user will be able to add expenses using the form. The user will then be able to modify/update and delete the expenses/income. 


**Decisions Made During Development:** 
- Deciding on using JavaScript or TypeScript, because I am much more experience in JavaScript, but decided that this is a great way to work on using TypeScript.

- Deciding on using React or React Vite. Since this was a smaller project, I used React Vite because of the smoother experience. 

## Set Up Instructions & Getting Started

1. The project was made using [React Vite](https://vitejs.dev/guide/).

2. **Fork the Repository**: Click on the "Fork" button on the top right corner of the GitHub repository page to create a copy of the repository under your GitHub account.

3. Clone the repository from your repository to your local machine in your terminal
   ```bash
   git clone https://github.com/yourusername/your-repo.git

4. Install dependencies in your terminal for both steps if needed for the client folder and the server folder:

- Client Folder: 

    ```bash
    npm install dotenv react-router-dom --save-dev @types/node 

- Server Folder: 
    ```bash
    npm install mongoose nodemon express @types/express cors @types/cors

5. Second, create a .env.local file inside the root directory (where the package.json file is ), then create a VITE_CLERK_PUBLISHABLE_KEY= and fill in the information for your api key given to you from the [Clerk](https://clerk.com/). You might have to sign up if you do not have one.

6. Third, create a .env inside your server folder then you and do the same for your MongoDB cluster. 


## How to Run Application

1. Once you followed the instructions above, go into the terminal and run these commands for the vite project itself:
    ```bash
    cd client
    npm install
    npm run dev
2. For the backend: 
    ```bash
    cd server
    npm run dev
3. In order to exit, follow this command in your terminal
    ```bash
    control + C
