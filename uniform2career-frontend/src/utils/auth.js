// src/utils/auth.js

// Save logged user to localStorage
export function setLoggedUser(user) {
  localStorage.setItem("loggedUser", JSON.stringify(user));
}

// Get logged user from localStorage
export function getLoggedUser() {
  const user = localStorage.getItem("loggedUser");
  return user ? JSON.parse(user) : null;
}

// Logout user (remove from localStorage)
export function logoutUser() {
  localStorage.removeItem("loggedUser");
}
