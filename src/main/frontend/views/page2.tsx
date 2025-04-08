import {ViewConfig} from "@vaadin/hilla-file-router/types.js";
import {useAppStore} from "Frontend/store/app.store";
import {useEffect} from "react";

export const config: ViewConfig = {
  title: 'Page 2',
  loginRequired: false,
}

export default function Page2() {
  const setPage = useAppStore((state) => state.setPage);

  useEffect(() => {
    setPage('Page 2');
  }, []);

  return (
      <>
        Page 2
      </>
  );
}