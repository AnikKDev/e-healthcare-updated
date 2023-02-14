import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log('user inside hook', user)
    const email = user?.user?.email;
    // console.log(email);
    const currentUser = { email: email };
    if (email) {
      console.log(currentUser);
      fetch(`https://e-healthcare-server.onrender.com/api/v1/users/${email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.data.accessToken;
          localStorage.setItem("token", accessToken);
          setToken(accessToken);
          console.log(accessToken);
        });
    }
  }, [user]);

  return token;
};

export default useToken;
