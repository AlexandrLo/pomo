/**
 * Requests notification permissions and sends notifications
 *
 * @param {*} title Notification title
 * @param {*} [options={}] Notification options
 */
export const notifyMe = (title, options = {}) => {
  if (window.Notification && Notification.permission === "granted") {
    try {
      const n = new Notification(title, options);
      n.onclick = () => {
        window.focus();
        this.close();
      };
      return n;
    } catch (e) {
      console.error(e);
    }
  }
};

/**
 * Request permissions for notifications
 *
 * @return {Promise} Promise from Notification.requestPermission()
 */
export const requestNotifications = () => {
  if (window.Notification && Notification.permission !== "denied") {
    return Notification.requestPermission();
  }
};
