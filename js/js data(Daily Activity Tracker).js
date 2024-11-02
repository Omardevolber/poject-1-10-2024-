// Load activities from Session Storage
function loadActivities() {
    const activities = JSON.parse(sessionStorage.getItem('activities')) || [];
    const activityTableBody = document.getElementById('activity-table').querySelector('tbody');

    activities.forEach(activity => {
        const activityRow = document.createElement('tr');
        activityRow.innerHTML = `
            <td><input type="checkbox" onchange="updateProgress()"></td>
            <td>${activity.activity}</td>
            <td>${activity.time}</td>
        `;
        activityTableBody.appendChild(activityRow);
    });

    updateProgress();
}

// Update progress percentage
function updateProgress() {
    const totalActivities = document.querySelectorAll('#activity-table tbody tr').length;
    const completedActivities = document.querySelectorAll('#activity-table tbody tr input:checked').length;
    const progress = totalActivities > 0 ? (completedActivities / totalActivities) * 100 : 0;
    document.getElementById('progress').innerText = `${Math.round(progress)}%`;
}

// Load notes from Session Storage
function loadNotes() {
    const note = sessionStorage.getItem('note');
    document.getElementById('notes-content').innerText = note || "No notes added.";
}

// Initialize the page
window.onload = function() {
    loadActivities();
    loadNotes();
};
// Function to convert 24-hour format time to 12-hour format with AM/PM
function convertTo12HourFormat(time24) {
    let [hours, minutes] = time24.split(':');
    hours = parseInt(hours);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hour '0' to '12'
    return `${hours}:${minutes} ${ampm}`;
}

// Load activities from Session Storage
function loadActivities() {
    const activities = JSON.parse(sessionStorage.getItem('activities')) || [];
    const activityTableBody = document.getElementById('activity-table').querySelector('tbody');

    activities.forEach(activity => {
        const activityRow = document.createElement('tr');
        const time12Hour = convertTo12HourFormat(activity.time); // Convert time to 12-hour format
        activityRow.innerHTML = `
            <td><input type="checkbox" onchange="updateProgress()"></td>
            <td>${activity.activity}</td>
            <td>${time12Hour}</td>
        `;
        activityTableBody.appendChild(activityRow);
    });

    updateProgress();
}
// Clear all activities from the table and Session Storage
function clearActivities() {
    sessionStorage.removeItem('activities'); // Remove activities from Session Storage
    document.querySelector('#activity-table tbody').innerHTML = ''; // Clear table rows
    updateProgress(); // Reset progress
}

// Initialize the page
window.onload = function() {
    loadActivities();
    loadNotes();
};