/**
 * Auto Delete All Facebook Messages
 *
 * This script automatically deletes all Facebook messages on messenger.com.
 * You can run this code from the console, but the best way to run it is by
 * saving it as a bookmark in your bookmark bar.
 *
 * To save it as a bookmark, create a new bookmark in your browser's bookmark bar,
 * edit the URL field, and paste the entire script code into the URL field.
 * Give the bookmark a name like "Delete All Messages" and save it.
 *
 * To use the script, go to https://www.messenger.com/, log in to your account,
 * and then click on the bookmark you created. The script will start running and
 * deleting all your messages one by one.
 *
 * Original Author:
 * @link http://matthewdunham.net
 * @link http://linkedin.com/in/matthewdunham
 *
 * Updated for the latest messenger.com by Seth Rose:
 * @link https://www.sethrose.dev
 * @link https://github.com/TheSethRose
 * @link https://x.com/TheSethRose
 */

(function (querySelector) {
  /**
   * Finds and clicks the three-dot menu button to open the chat actions menu.
   * If the button is not found, logs a message indicating that there are no more messages to delete.
   */
  function openChatActionsMenu() {
    var menuButton =
      window.location.href.includes("archived") ? querySelector('div[aria-label="Menu"]') : querySelector('div[aria-label="Menu"]');
    
    if (menuButton !== null) {
      menuButton.click();
      setTimeout(findDeleteChatButton, 200);
    } else {
      console.log("No messages to delete");
    }
  }

  /**
   * Finds and clicks the "Delete chat" button in the chat actions menu.
   * If the button is not found, logs a message indicating that the delete button was not found.
   */
  function findDeleteChatButton() {
    var deleteButton = Array.from(document.querySelectorAll('div[role="menuitem"]')).find(function (element) {
      return element.textContent.includes("Delete chat");
    });

    if (deleteButton !== undefined) {
      deleteButton.click();
      setTimeout(confirmDeleteChat, 200);
    } else {
      console.log("Delete button not found");
    }
  }

  /**
   * Finds and clicks the confirmation button to delete the chat.
   * If the button is not found, logs a message indicating that the confirm button was not found.
   */
  function confirmDeleteChat() {
    var confirmButton = querySelector('div[aria-label="Delete chat"][role="button"]');

    if (confirmButton !== null) {
      confirmButton.click();
      setTimeout(checkForMoreMessages, 600);
    } else {
      console.log("Confirm button not found");
    }
  }

  /**
   * Checks if there are more messages to delete by looking for the three-dot menu button.
   * If the button is found, restarts the process by calling openChatActionsMenu.
   * If the button is not found, logs a message indicating that there are no more messages.
   */
  function checkForMoreMessages() {
    var menuButton =
      window.location.href.includes("archived") ? querySelector('div[aria-label="Menu"]') : querySelector('div[aria-label="Menu"]');
    
    if (menuButton !== null) {
      setTimeout(openChatActionsMenu, 600);
    } else {
      console.log("No more messages");
    }
  }

  console.log("Deleting messages");
  openChatActionsMenu();
})(function (selector) {
  return document.querySelector(selector);
});
