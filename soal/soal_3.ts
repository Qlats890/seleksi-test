const fetchUserData = () => new Promise((resolve) => {
  setTimeout(() => resolve({ name: 'John Doe', age: 30 }), 2000);
});

const getUserData = async () => {
  try {
      const userData = await fetchUserData(); 
      console.log(userData); 
      return userData; 
  } catch (error) {
      console.error('Error fetching user data:', error);
  }
};

getUserData();