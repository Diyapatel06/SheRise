let hydrationInterval;

function setHydrationReminder() {
    const interval = parseInt(document.getElementById('hydration-interval').value, 10);
    const hydrationMessage = document.getElementById('hydration-message');

    if (hydrationInterval) {
        clearInterval(hydrationInterval);
    }

    if (interval > 0) {
        hydrationMessage.innerText = `Reminder set! Drink water every ${interval} minutes.`;
        hydrationInterval = setInterval(() => {
            alert("Time to drink water!");
        }, interval * 60000); 
    } else {
        hydrationMessage.innerText = "Please enter a valid interval.";
    }
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoItems = document.getElementById('todo-items');
    
    if (todoInput.value) {
        const li = document.createElement('li');
        li.textContent = todoInput.value;
        todoItems.appendChild(li);
        todoInput.value = '';
    }
}

function addEmergencyContact() {
    const emergencyInput = document.getElementById('emergency-input');
    const emergencyItems = document.getElementById('emergency-items');
    
    if (emergencyInput.value) {
        const li = document.createElement('li');
        li.textContent = emergencyInput.value;
        emergencyItems.appendChild(li);
        emergencyInput.value = '';
    }
}