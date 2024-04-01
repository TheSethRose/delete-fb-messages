# Auto Delete All Facebook Messages

*Last Updated: 04/01/2024*

JavaScript utility that allows you to auto delete all your Facebook messages, including archived chats. Adds a feature to Facebook that should have already been added.

## Usage Instructions

### Easiest Method: Bookmark Button

The easiest way to use this code is by saving it as a bookmark on your browser's bookmark bar.

### How to use the bookmark

1. Log in to your Facebook account and go to [messenger.com](https://www.messenger.com/).
2. Once the page loads, click the bookmark you created in the next step.
3. Stay on the messages page until all your messages are deleted. Once a message is deleted, it's gone forever. There is no undelete.

**To stop the delete process, simply leave the messages page or refresh the page.**

**Note:** If you're on the "Archived Chats" page and the script redirects you back to the regular "Chats" page, simply close the tab, re-open messenger.com, navigate to the "Archived Chats" page, and click the bookmarklet again.

### Creating the Bookmark

1. Press `Ctrl+D` (Windows) or `Cmd+D` (Mac) on your keyboard to open the "Create a new bookmark" window.
2. Title it "Delete FB Messages".
3. Click the "Edit" button to change the URL of the bookmark.
4. Delete everything in the URL field and replace it with the following code:

```javascript
javascript:!function(e){var t=function(){var n=window.location.href.includes("archived")?e('div[aria-label="Menu"]'):e('div[aria-label="Menu"]');null!==n?(n.click(),setTimeout(o,200)):console.log("There are no messages to delete")},o=function(){var t=Array.from(document.querySelectorAll('div[role="menuitem"]')).find(e=>e.textContent.includes("Delete chat"));null!==t?(t.click(),setTimeout(n,200)):console.log("Delete chat button not found")},n=function(){var t=e('div[aria-label="Delete chat"][role="button"]');null!==t?(t.click(),setTimeout(i,600)):console.log("Confirmation delete button not found")},i=function(){var o=window.location.href.includes("archived")?e('div[aria-label="Menu"]'):e('div[aria-label="Menu"]');null!==o?setTimeout(t,600):console.log("No more messages")};console.log("Deleting Facebook Messages"),t()}(function(e){return document.querySelector(e)});
```

5. Save the bookmark, preferably to your bookmarks bar for faster access.

### Running it without a bookmark

You can also run this code using your web browser's console:

1. Navigate to [messenger.com](https://www.messenger.com/).
2. Press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac) to open the developer tools.
3. If you don't see the console at the bottom of the window, press the `Esc` key.
4. Copy the code from the bookmark creation section above and paste it into the console.
5. Press `Enter` to run the code.

The console will display "Deleting Facebook Messages" to indicate that the script is working. Your messages should start deleting. When the script has finished deleting all your messages, it will display "No more messages" in the console.

You can stop the delete process at any time by closing your browser, refreshing the page, or navigating away from messenger.com.

## Security Info

If you see a warning that says "Stop" in red, don't worry. It's just a precaution to stop people from accidentally XSS attacking themselves. This code does not make any external calls and only contains a few lines of code. If you are not comfortable running things from your web console, then don't! Always read and understand what any code will do before running it in the console, regardless of whether you're on Facebook or another site.

## Disclaimer

This script is provided "as is" without warranty of any kind. The authors are not responsible for any consequences that may arise from using this script. Use at your own risk. Always backup important data before running scripts that can modify or delete your data.

## Troubleshooting

If the script doesn't seem to be working:

- Make sure you are logged into your Facebook account and on messenger.com.
- Check that you have pasted the script correctly into the bookmark URL or console.
- If you get an error in the console, try refreshing the page and running the script again.
- If messages are not being deleted, the script may need to be updated due to changes in Facebook's UI. Please open an issue on the GitHub repository.

## Limitations

- This script can only delete messages that are loaded on the current page. If you have a large number of messages, you may need to scroll down to load more messages and then run the script again.
- The script may need to be updated in the future if Facebook changes the structure of their messages page or archived chats page.

## Contributing

If you'd like to contribute to this project, please:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Update Log

- **2024-04-01:** Updated script to work with the latest version of messenger.com, including archived chats. Improved selectors, deletion process, error handling, and documentation.
  - Updated by Seth Rose
  - [https://www.sethrose.dev](https://www.sethrose.dev)
  - [@TheSethRose on 𝕏](https://x.com/TheSethRose)

- **2017-01-28:** Originally created by Matthew Dunham.
  - [http://matthewdunham.net](http://matthewdunham.net)
  - [matthewdunham on LinkedIn](http://linkedin.com/in/matthewdunham)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
