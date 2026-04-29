  function updateDateTime() {
      const el = document.getElementById('datetime');
      const now = new Date();

      // Intl.DateTimeFormat: built-in JS way to format dates
      // 'en-IN' = Indian English locale (dd/mm/yyyy style)
      const dateStr = now.toLocaleDateString('en-IN', {
        day:   '2-digit',
        month: 'short',
        year:  'numeric'
      });
      const timeStr = now.toLocaleTimeString('en-IN', {
        hour:   '2-digit',
        minute: '2-digit',
        hour12: true
      });
      el.textContent = `${dateStr} | ${timeStr} IST`;
    }
    updateDateTime();                   // run once immediately
    setInterval(updateDateTime, 1000);  // then every second

    updateDateTime()