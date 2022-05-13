/**
 * Requests notification permissions and sends notifications
 *
 * @param {*} title Notification title
 * @param {*} [options={}] Notification options
 */
export const notifyMe = (title, options = {}) => {
  if ("Notification" in window && Notification.permission === "granted") {
    const n = new Notification(title, options);
    n.onclick = () => {
      window.focus();
      this.close();
    };
  }
};

/**
 * Request permissions for notifications
 *
 * @return {Promise} Promise from Notification.requestPermission()
 */
export const requestNotifications = () => {
  if ("Notification" in window && Notification.permission !== "denied") {
    return Notification.requestPermission();
  }
};
