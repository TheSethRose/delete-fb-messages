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

(function($) {
  /**
   * Step 1: Find and click the three-dot menu button.
   * If the button is found, click it and proceed to Step 2.
   * If the button is not found, log a message indicating that there are no more messages to delete.
   */
  var stepOne = function() {
    var menuButton = $('div[aria-label="Menu"]');
    if (menuButton !== null) {
      menuButton.click();
      setTimeout(stepTwo, 200);
    } else {
      console.log('There are no messages to delete');
    }
  };

  /**
   * Step 2: Find and click the "Delete chat" button from the menu.
   * If the button is found, click it and proceed to Step 3.
   * If the button is not found, log a message indicating that the delete chat button was not found.
   */
  var stepTwo = function() {
    var deleteButton = Array.from(document.querySelectorAll('div[role="menuitem"]'))
      .find(e => e.textContent.includes("Delete chat"));
    if (deleteButton !== undefined) {
      deleteButton.click();
      setTimeout(stepThree, 200);
    } else {
      console.log('Delete chat button not found');
    }
  };

  /**
   * Step 3: Find and click the confirmation "Delete Chat" button.
   * If the button is found, click it and proceed to Step 4.
   * If the button is not found, log a message indicating that the confirmation delete button was not found.
   */
  var stepThree = function() {
    var confirmDeleteButton = $('div[aria-label="Delete chat"][role="button"]');
    if (confirmDeleteButton !== null) {
      confirmDeleteButton.click();
      setTimeout(stepFour, 600);
    } else {
      console.log('Confirmation delete button not found');
    }
  };

  /**
   * Step 4: Check if there are more messages to delete.
   * If the three-dot menu button is found, there are more messages to delete, so go back to Step 1.
   * If the three-dot menu button is not found, log a message indicating that there are no more messages to delete.
   */
  var stepFour = function() {
    var menuButton = $('div[aria-label="Menu"]');
    if (menuButton !== null) {
      setTimeout(stepOne, 600);
    } else {
      console.log('No more messages to delete');
    }
  };

  console.log('Deleting all Facebook messages');
  stepOne();
})(function(sel) { return document.querySelector(sel); });
