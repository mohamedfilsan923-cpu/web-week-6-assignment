// Requirement 2: Use arrays to store multiple expense records
let expenses = [];
const totalBudget = 1000; // Base total budget setting

// Select DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalSpentSpan = document.getElementById('total-spent');
const remainingBudgetSpan = document.getElementById('remaining-budget');
const budgetFeedback = document.getElementById('budget-feedback');

// Requirement 5: Handle User Interactions via Event Listeners
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default page refresh on form submit

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name && !isNaN(amount)) {
        // Store item into array object
        const newExpense = { name: name, amount: amount };
        expenses.push(newExpense);

        // Reset form inputs
        expenseForm.reset();

        // Update the visual dashboard
        updateDashboard();
    }
});

// Function to calculate totals, render items, and evaluate status
function updateDashboard() {
    // Clear list to prevent duplicate DOM rendering during iteration
    expenseList.innerHTML = '';

    let totalSpent = 0;

    // Requirement 3: Process data with loops
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        totalSpent += currentExpense.amount;

        // Requirement 4: Update the DOM dynamically
        const li = document.createElement('li');
        li.innerHTML = `<span>${currentExpense.name}</span> <span>$${currentExpense.amount.toFixed(2)}</span>`;
        expenseList.appendChild(li);
    }

    // Calculate remaining balance
    let remaining = totalBudget - totalSpent;

    // Update text nodes on screen
    totalSpentSpan.textContent = totalSpent.toFixed(2);
    remainingBudgetSpan.textContent = remaining.toFixed(2);

    // Requirement 1: Implement decision making using conditional statements
    if (remaining < 0) {
        budgetFeedback.textContent = "Warning: You have exceeded your budget!";
        budgetFeedback.className = "feedback-box warning";
    } else if (remaining < 200) {
        budgetFeedback.textContent = "Caution: You are running low on budget.";
        budgetFeedback.className = "feedback-box warning";
    } else {
        budgetFeedback.textContent = "Status: Finances look healthy!";
        budgetFeedback.className = "feedback-box";
    }
}