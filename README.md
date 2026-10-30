# HB+ Authentication Portal

A cross-platform authentication application developed using React Native, React Native Web, Expo, and TypeScript. The application uses Firebase Authentication and Google OAuth 2.0 to allow access exclusively to users with an official `@hbplus.fit` email address.

## Technologies Used

- React Native
- React Native Web
- Expo
- TypeScript
- React Navigation
- Firebase Authentication
- Google OAuth 2.0
- AsyncStorage
- Jest

## Features

- Google Sign-In authentication.
- Exact email domain validation.
- Access restricted to `@hbplus.fit` accounts.
- Protected Dashboard.
- User profile information (name, email, and profile picture).
- Logout functionality.
- Loading indicators and error handling.
- Responsive interface for Web, Android, and iOS.

## Setup Instructions

### Prerequisites

- Node.js
- pnpm
- Expo development environment
- Firebase project
- Google OAuth configuration

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project folder:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
pnpm install
```

### Firebase Configuration

1. Open the Firebase Console: https://console.firebase.google.com/
2. Create or select a Firebase project.
3. Enable Google Authentication under Authentication → Sign-in method.
4. Configure the Firebase credentials required by the application.
5. Add the application domain under Authentication → Settings → Authorized domains.
6. Configure the required Google OAuth credentials for Web, Android, and iOS.

Do not upload private credentials or service-account keys to GitHub.

### Run the Application

Start the development server:

```bash
npx expo start
```

Run on Web:

```bash
npx expo start --web
```

Run on Android:

```bash
npx expo start --android
```

Run on iOS:

```bash
npx expo start --ios
```

Native Google Sign-In requires the appropriate OAuth configuration and a compatible development build.

## Authentication Flow

1. The application checks the existing Firebase authentication session when it starts.
2. The user clicks the Continue with Google button.
3. Google OAuth authenticates the user's Google account.
4. Firebase receives the authenticated user identity.
5. The application validates the user's email domain.
6. If the email belongs to `@hbplus.fit`, the user is allowed to access the Dashboard.
7. If the email belongs to another domain, the user is signed out and shown an error message.
8. The Logout button signs out the user and returns them to the Login screen.

## Domain Restriction

The application allows access only to email addresses ending with the exact domain:

`@hbplus.fit`

**Accepted email examples:**
- employee@hbplus.fit
- developer@hbplus.fit

**Rejected email examples:**
- employee@gmail.com
- employee@yahoo.com
- employee@hbplus.fit.example.com
- employee@not-hbplus.fit

The application obtains the email address from the authenticated Firebase user, converts it to lowercase, and checks for an exact domain match.

Unauthorized users receive the following error:

**"Access restricted. Please login using your official domain email."**

After rejection, the application signs out the user, clears the authorized authentication state, and prevents Dashboard access.

## Security

- Firebase Authentication manages user authentication.
- Only authenticated users with the authorized email domain can access the Dashboard.
- Protected navigation prevents direct access to the Dashboard without authorization.
- Authentication sessions are managed using Firebase-supported methods.
- Private credentials and service-account keys are not exposed in frontend code.
- Any protected backend resources must enforce authorization through Firebase Security Rules or trusted backend token verification.

**Note:** Client-side domain validation protects application navigation but does not independently secure backend resources.

## Testing

Run the available tests:

```bash
pnpm test
```

The application should be tested for:

- Successful login with an `@hbplus.fit` account.
- Rejection of Gmail and other unauthorized accounts.
- Rejection of similar-looking unauthorized domains.
- Protected Dashboard access.
- Logout functionality.
- Authentication loading and error states.
- Authentication session restoration.

## Live Application

**Deployment Link:** https://hbplus-team-portal.netlify.app

The web application is deployed using Netlify.

---

**Developed as part of the HB+ IT Intern Assignment.**
