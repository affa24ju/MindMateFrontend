# MindMateFrontend
This application is cloned from MyJournalFront end and has been develpoed to add new features. 
This is an Angular frontend application for mental health tracking and journalig. This application allows users to record their daily emotional state and visualize their mental health patterns over time. The application also has an API build with Spring boot and MongoDb database. 

The project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Features
**Authentication**
- User registration and login system
- Secure authentication flow

**Daily Journaling**
- Record daily mental condition with text descriptions
- Select emotions from an emoji dropdown
- Save and manage daily entries
- Edit and delete your entries

**Organization & Views**
- Today's entries: View all current day entries in a dedicated list
- Previous entries: View all entries (including today's) in a seperate list

**Analytics**
- Date range statistics: Compare emotional pattern between two selected dates
- Trend analysis: Track emotional changes over time
- Visual analysis:
  - Percentage breackdown of emotions (e.g. Glad: 40%, Sad:15%, Worried:20%...)
  - Interactive pie chart
 
## Architecture
This is a frontend-only application built with
- Angular
- TypeScript

## Backend Integration
The application connects to a seperate backend service (https://github.com/affa24ju/MyJournalApi) built with:
- *Spring Boot* (Java)
- *MongoDB* database
- REST API

## Getting started
**Prerequisites**
These have to be installed:
- npm manager
- Node.js
- Angular CLI

## Installation
**Clone the repository**
```bash
git clone https://github.com/affa24ju/MyJournalFrontend.git
cd MyJournalFrontend 
```

**Install dependencies**
```bash
npm install
```

**Configure backend API**
- Clone backend API
- Make sure that backend is running

**Run the application**
To start a local development server, run:

```bash
ng serve
```
**Access the application**
Once the server is running, open your browser and navigate to `http://localhost:4200/`. 

## Good To Know
- Language is swedish inside the application!
