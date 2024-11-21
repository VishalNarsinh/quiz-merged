// isLoggedIn to check if token exists in the local storage
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

// doLogin to set the token in the local storage
export const doLogin = (data, next) => {
  const { jwtToken, user } = data; // Destructure to get token and user info
  const userData = {
    jwtToken,
    user: {
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      userImageUrl: user.userImageUrl,
      roles: user.roles,
    },
  };

  try {
    localStorage.setItem("data", JSON.stringify(userData));
    next();
  } catch (error) {
    console.error("Failed to save login data", error);
  }
  next();
};

// doLogout to remove the token from the local storage
export const doLogout = (next) => {
  // Remove tokens and username from local storage
  localStorage.removeItem("data");
  next();
};

// getCurrentUser to get current user
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return null;
  }
};

export const getTokens = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).jwtToken;
  } else {
    return null;
  }
};

// export const updateLoggedInUser = (data) => {};
