export const checkCurrentTheme = (darkMode) => {
  if (darkMode.forced && darkMode.active) {
    return true;
  }

  if (!darkMode.forced && darkMode) {
    return true;
  }

  return false;
};
