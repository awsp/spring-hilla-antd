import {useAppStore} from "Frontend/store/app.store";
import {useEffect} from "react";

export default function Page2() {
  const setPage = useAppStore((state) => state.setPage);

  useEffect(() => {
    setPage('Page 2');
  }, []);

  return (
      <>
      </>
  );
}