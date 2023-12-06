import { LocaleType } from "./index";

const en_us: LocaleType = {
  Error: {
    Unauthorized: "Currently not logged in.",
    MustAuthorized: "Currently not logged in, please log in and use.",
    Network: "The network has wandered off, please try again later!",
    LocalCache: "Oops, something went wrong!",
    LocalCacheTry: "Please clean the cache and try again!",
    LocalCacheClean: "Clear All Cache",
  },
  Auth: {
    LoginTitle: "Sign in account",
    RegisterTitle: "Sign up account",
    Tips: "The first login will generate a new account after verification",
    Username: "username",
    Email: "email",
    Password: "password",
    Code: "code",
    Send: "Send",
    Register: "Sign up",
    Login: "Sign in",
    Later: "Later",
    SendSuccess: "Send Success",
    LoginSuccess: "Login Success",
    RegisterSuccess: "Register Success",
    Expiration: "Login has expired, please log in again",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    Lang: {
      Name: "Language",
      All: "All Languages",
    },
    FontSize: {
      Title: "Font Size",
      SubTitle: "Adjust font size",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    Theme: "Theme",
    TightBorder: "Tight Border",
  },
  Store: {
    Error: "Something went wrong, please try again later.",
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
  },
};

export default en_us;
