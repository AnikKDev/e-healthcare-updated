import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;

    if (email) {
      fetch(
        `https://e-healthcare-server.onrender.com/api/v1/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log('meowwww', data.data.isAdmin)
          setAdmin(data.data.isAdmin);
        });
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
