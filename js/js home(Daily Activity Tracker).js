// Function to add a new activity entry
function addActivity() {
    const activityList = document.getElementById('activity-list');
    const newActivity = document.createElement('div');
    newActivity.classList.add('activity-entry');
    newActivity.innerHTML = `
        <input type="text" placeholder="Activity" class="activity-input">
        <input type="time" class="activity-time">
        <button class="delete-btn" onclick="removeActivity(this)">X</button>
    `;
    activityList.appendChild(newActivity);
}

// Function to remove an activity entry
function removeActivity(button) {
    const activityEntry = button.parentElement;
    activityEntry.remove();
}

// Function to save activities and navigate to summary page
function saveActivities() {
    const activities = [];
    document.querySelectorAll('.activity-entry').forEach(entry => {
        const activity = entry.querySelector('.activity-input').value;
        const time = entry.querySelector('.activity-time').value;
        if (activity && time) {
            activities.push({ activity, time });
        }
    });
    sessionStorage.setItem('activities', JSON.stringify(activities));
    window.location.href = 'data (Daily Activity Tracker).html';
}

// Function to save a note
function saveNote() {
    const note = document.getElementById('note-input').value;
    if (note) {
        sessionStorage.setItem('note', note);
        alert("Note saved!");
    }
}