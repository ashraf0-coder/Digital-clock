function updateClock() {
    const now = new Date();
  
    // Extract hours, minutes, seconds, and AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    // Format time with leading zeros
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${amPm}`;
  
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
  
    // Update the clock elements
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock on load
  updateClock();
  