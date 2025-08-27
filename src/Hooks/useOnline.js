import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineFunc = () => setIsOnline(true);
    const offlineFunc = () => setIsOnline(false);

    window.addEventListener("online", onlineFunc);
    window.addEventListener("offline", offlineFunc);

    return () => {
      window.removeEventListener("online", onlineFunc);
      window.removeEventListener("offline", onlineFunc);
    };
  }, []);

  return isOnline;
};

export default useOnline;
