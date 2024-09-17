// Function to convert time string "HH:MM" to minutes
function timeStringToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

// Function to convert minutes back to "HH:MM" format
function minutesToTimeString(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}h`;
}

// Function to calculate worked time
function calculateWorkedTime() {
    // Get selected start time
    const startTimeValue = document.querySelector('input[name="startTime"]:checked').value;
    const startTimeMinutes = timeStringToMinutes(startTimeValue);

    // Get selected break time
    const breakTimeValue = document.querySelector('input[name="breakTime"]:checked').value;
    const breakTimeMinutes = timeStringToMinutes(breakTimeValue);

    // Get selected end time
    const endTimeValue = document.querySelector('input[name="endTime"]:checked').value;
    const endTimeMinutes = timeStringToMinutes(endTimeValue);

    // Calculate worked time in minutes
    let workedMinutes = endTimeMinutes - startTimeMinutes - breakTimeMinutes;

    // Handle negative values
    if (workedMinutes < 0) {
        workedMinutes += 24 * 60; // Adjust for next day
    }

    // Convert worked minutes back to time string
    const workedTimeString = minutesToTimeString(workedMinutes);

    // Display the result
    document.getElementById('result').textContent = `Worked Time: ${workedTimeString}`;
}

// Add event listeners to all radio buttons
const allRadioButtons = document.querySelectorAll('input[type="radio"]');
allRadioButtons.forEach(function(radio) {
    radio.addEventListener('change', calculateWorkedTime);
});

// Initial calculation
calculateWorkedTime();
