const getUserInfo = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
  };

export default getUserInfo;