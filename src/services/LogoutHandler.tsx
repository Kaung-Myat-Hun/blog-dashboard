export const LogoutHandler = () => {
  localStorage.clear();
  window.location.assign("/");
};
