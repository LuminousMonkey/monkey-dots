// My Conkeror config

loaded_init = false;

require("theme.js");

// Correct the path on Windows
if (WINDOWS && cwd.path.indexOf("Roaming") < 0) {
  cwd.append("AppData");
  cwd.append("Roaming");
}

// Use the home row as base for the hint numbers
hint_digits = "jklmqsdf";

// Complete new urls with history
url_completion_use_history = true;
url_completion_use_bookmarks = false;

// Open downloads in a buffer
download_buffer_automatic_open_target = OPEN_NEW_BUFFER;

// Autocompletion in the minibuffer
minibuffer_auto_complete_default = true;

// Don't quit when kill the last buffer
can_kill_last_buffer = false;

// To check if this page was successfull loaded.
loaded_init = true;
