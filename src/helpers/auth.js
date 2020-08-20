export function loginUser(user) {
  if (user) {
    const {
      app_metadata,
      created_at,
      confirmed_at,
      email,
      id,
      user_metadata,
    } = user;

    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...app_metadata,
        created_at,
        confirmed_at,
        email,
        id,
        ...user_metadata,
      }),
    );
  }
}

export function logoutUser() {
  localStorage.removeItem('currentUser');
}
