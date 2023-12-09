# Live Link: https://job-management-auth.web.app/
### git clone https://github.com/Mitul3047/Job-management-system-client-A11.git

#Full-Stack Online Marketplace

Welcome to our Full-Stack Online Marketplace project! This marketplace is a platform designed for job seekers and employers to connect, offering a range of features and functionalities.

## Overview

Our platform provides a visually appealing interface, ensuring a seamless user experience. Leveraging technologies like React, Node.js, Express, and MongoDB, we've crafted a unique and functional marketplace.

## Key Features

### User-Friendly Design

We've focused on an attractive and intuitive design, prioritizing color contrast, alignment, and customization of component styles to ensure a unique look and feel.

### Seamless Navigation

The consistent Navbar and Footer on every page make navigation effortless. The Navbar includes links to Home, Add Job, My Posted Jobs, My Bids, User Profile, and Register/Login. Meanwhile, the Footer contains essential site details and contact information.

### Authentication System

Our secure authentication system enables users to register and login with ease. The registration form includes fields for Name, Email, Password, and PhotoURL, and users can log in using Google Sign-in.

### Home Page

The Home Page showcases a dynamic banner section with carousel images relevant to the site's theme. Users can browse job categories, including web development, digital marketing, and graphics design, represented as tabs. Each tab displays job cards containing essential information like title, deadline, price range, short description, and a Bid Now button for easy interaction.

### Job Details Page

When users click on the Bid Now button, they're redirected to a detailed view of the job. Here, they'll find comprehensive information about the job, including name, deadline, price range, and description. The page includes a bidding form with fields for the bidding amount, deadline, email, and the buyer's email. However, the 'Bid on the project' button is disabled for the job owner.

### Adding Jobs

Our Add Jobs feature allows employers to post job listings. The form includes fields such as the employer's email, job title, deadline, description, category selection, and price range. Upon submission, the data is securely stored in our MongoDB database, and users receive a confirmation through a toast notification.

### Managing Posted Jobs

Employers have control over the jobs they've posted. They can update job details through a form or modal and can remove jobs they no longer wish to advertise.

### Bidding and Bid Requests

The platform facilitates bid management, showing users their submitted bids. It also displays bid requests made on the jobs users have posted. Users can interact with bid requests, accepting or rejecting them based on their preferences.

### Custom 404 Page and Private Routes

Our custom 404 page features engaging visuals and a 'Back to Home' button for seamless navigation. Additionally, we've implemented private routes to secure sensitive pages like My Bids, Add Job, My Posted Jobs, Bid Request, and Job Detail pages.

