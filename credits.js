// זיהוי דפדפן
const isFirefox = typeof browser !== 'undefined';
const api = isFirefox ? browser : chrome;

/**
 * סגירת הטאב הנוכחי
 * מנסה לסגור את הטאב דרך ה-API, אם זה לא עובד - סוגר את החלון
 */
function closeTab() {
  if (api && api.runtime) {
    api.runtime.sendMessage({ action: 'closeCurrentTab' }, () => {
      if (api.runtime.lastError) {
        window.close();
      }
    });
  } else {
    window.close();
  }
}

// הוספת event listener לכפתור הסגירה
document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.close-btn');
  if (closeButton) {
    closeButton.addEventListener('click', closeTab);
  }
});
