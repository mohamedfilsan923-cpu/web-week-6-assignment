# SpendWise Interactive Budgeting Application

## Overview
This repository contains the interactive version of the **SpendWise** budgeting application developed during Week 6 of the Power Learn Project training. It upgrades the static HTML/CSS layout into a dynamic, event-driven web application using JavaScript.

## Improvements Made This Week
- Replaced hardcoded values with a dynamic JavaScript array and loops to process multiple user-submitted expense entries.
- Added a fully functional input form that listens for `submit` events to capture expenses in real-time.
- Implemented conditional decision-making to evaluate remaining budget levels and display warning alerts or healthy status updates dynamically.
- Built DOM manipulation functions to render list elements and update budget summaries instantly without reloading the page.

## How Conditionals Are Used in the Project
Conditional statements (`if...else if...else`) evaluate the remaining budget after every new expense is added:
- If the remaining budget drops below zero, a warning alert triggers stating that the budget has been exceeded.
- If the balance falls below a specific threshold (under $200), a caution warning is displayed.
- Otherwise, a positive status indicator confirms that finances are on track.

## How Arrays Are Used to Store Data
An array named `expenses` acts as the data repository:
- Every time a user submits an expense, a new object containing the `name` and `amount` is pushed into the `expenses` array using `.push()`.
- This avoids using individual variables and allows storing multiple expense records seamlessly.

## How the DOM Is Updated
DOM manipulation connects JavaScript data to the webpage interface:
- The script targets screen elements using `document.getElementById`.
- Using `document.createElement('li')` and `appendChild()`, the app dynamically generates list items for each expense record.
- Text content properties (`textContent`) update in real-time to show total spent and remaining balances.

## How User Interactions Are Handled Through Events
User interaction is managed through an event listener attached to the form element (`expense-form`) listening for the `'submit'` event. Calling `event.preventDefault()` stops default page refreshes, capturing inputs and updating the interface smoothly.

## Challenges Encountered & Resolutions
- **Challenge:** Adding a new expense re-rendered all previous items alongside the new ones, duplicating list entries on the screen.
- **Resolution:** Fixed by clearing the container (`expenseList.innerHTML = ''`) at the beginning of `updateDashboard()` before looping over the array.