# Planning Document

## **Project Name:** Spam Caller Detector

### **Project Start Date:** November 11, 2024
### **Planned Submission Date:** November 23, 2024

---

## **Project Description**
The Spam Caller Detector is an application that helps users identify and block unwanted spam calls. The app will provide a search feature for users to check incoming call numbers and label them as "Spam" or "Verified." Users can also report suspicious numbers to help build a community-driven spam database.

---

## **MVP User Stories**

1. **As a user, I want to search for a phone number, so that I can check if it is a known spam caller.**
2. **As a user, I want to see a label for each number (Spam/Verified), so that I can decide whether to answer the call.**
3. **As a user, I want to block identified spam numbers, so that I don't receive calls from them in the future.**
4. **As a user, I want to report a phone number as spam, so that other users can be warned about it.**
5. **As an admin, I want to manage the spam call database, so that I can add or remove numbers as needed.**

---

## **Stretch Goal User Stories**

1. **As a user, I want to receive real-time reports for suspected spam calls, so that I can avoid answering them.**
2. **As a user, I want to see the total number of reports for each spam caller, so that I can understand the frequency of spam.**
3. **As a user, I want to be able to review a history of searched numbers, so that I can easily reference previous lookups.**

---

## **Wireframes Not set up **
The wireframes for the main pages of the application are included in the `wireframes/` folder. The key pages are:

1. **Home/Search Page/MVP:** A simple interface with a search bar where users can enter a phone number.
2. **Results Page/MVP:** Displays the result of the search, including whether the number is identified as spam, verified, or unknown.
3. **Report Page/Strech Goal:** Allows users to report a phone number as spam, including an optional comment.
4. **Admin Dashboard/Strech Goal:** Admin interface for managing the spam caller database.

---

## **ERD (Entity Relationship Diagram)**

The data model for the Spam Caller Detector app is as follows:

### **User/Strech Goal**
- `userId`: String
- `username`: String
- `email`: String
- `password`: String

### **PhoneNumber/MVP**
- `numberId`: String
- `phoneNumber`: String
- `status`: Enum ("Spam", "Verified", "Unknown")
- `reportCount`: Number

### **Report/ MVP**
- `reportId`: String
- `userId`: Reference to User
- `numberId`: Reference to PhoneNumber
- `comment`: String
- `createdAt`: Date

### **Admin/strech goal**
- `adminId`: String
- `username`: String
- `password`: String

The ERD diagram is included in the `ERD/` folder of the GitHub repo.

---

## **GitHub Repos**

- **Front-end GitHub Repo Link:** `[your-frontend-repo-link](#)`
- **Back-end GitHub Repo Link:** `[beckend Development not desided currenlty](#)`

---

## **Deployment Plan**

- **Front-end Deployment:** Using Vercel for the React app.
- **Back-end Deployment:** Using Render for the Node.js and MongoDB backend.

---

## **Trello Board Link (Optional)**
- Trello Board: `[not setup currently](#)` (if applicable)

---

## **Next Steps**
- Complete the wireframes and ERD diagrams.
- Set up the front-end and back-end GitHub repos.
- Get approval from the instructor before starting development.
