// My Conkeror theme
// Just changes to the interface like the popup numbers.
let (sheet = get_home_directory()) {
  sheet.append(".conkerorrc");
  sheet.append("stylesheets");
  sheet.append("chrome.css");
  register_user_stylesheet(make_uri(sheet));
}

let (sheet = get_home_directory()) {
  sheet.append(".conkerorrc");
  sheet.append("stylesheets");
  sheet.append("hints.css");
  register_user_stylesheet(make_uri(sheet));
}
