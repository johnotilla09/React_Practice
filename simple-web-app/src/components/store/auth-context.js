import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

const AuthContextProvider = (props) => {
    const [isLoggeIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

      if (storeUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggeIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
};

export default AuthContext;