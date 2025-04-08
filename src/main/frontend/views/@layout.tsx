import {useAppStore} from "Frontend/store/app.store";
import {Outlet} from "react-router";

export default function Layout() {
  const page = useAppStore((state) => state.page);

  return (
      <>
        <h1>{page}</h1>
        <nav style={{display: 'flex', gap: 12}}>
          <a href="/">Home</a>
          <a href="/page2">Page 2</a>
        </nav>
        <Outlet/>
      </>
  );
}