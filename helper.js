//function to generate random string for short url
const generateRandomString = () => {
    return Math.random().toString(36).slice(2,8);
  };
  
  //function to validate email and password
  const validateEmailPassword = function(email,password, database){
    for(let data in database){
      if(database[data]['email'] === email && database[data]['password'] === password){
        return true; 
      }
    }
    return false;
  };
  
  //function to get user id
  const getUserId = function(email, database){
    for(let data in database){
      if(database[data]['email'] === email){
        return database[data];
      }
    }
  };
  
  //function to get urls based on userID
  const urlsForUser = function(id, database) {
    let userUrls = {};
    for (const shortURL in database) {
      if (database[shortURL]['userID'] === id) {
        userUrls[shortURL] = database[shortURL];
      }
    }
    return userUrls;
  };
  
  module.exports = { generateRandomString,validateEmailPassword, getUserId, urlsForUser};