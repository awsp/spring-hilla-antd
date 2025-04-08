import {useAppStore} from "Frontend/store/app.store";
import {Outlet, useNavigate} from "react-router";
import {createMenuItems} from "@vaadin/hilla-file-router/runtime.js";
import {useAuth} from "Frontend/util/auth";
import {useEffect} from "react";
import {Button} from "antd";

export default function Layout() {
  const page = useAppStore((state) => state.page);
  const navigate = useNavigate();

  const {state, logout} = useAuth();

  useEffect(() => {
    console.log(state.user);
    console.log(logout);
  }, []);

  return (
      <>
        <h1>{page}</h1>
        {state.user ? <>Logged In</> : (
            <Button onClick={() => {
              document.location.assign('/oauth2/authorization/control-center');
            }}>Sign in</Button>
        )}

        <div>
          <header>
            ---
          </header>
          <nav style={{display: 'flex', gap: 12}}>
            {createMenuItems().map(({to, title}) => (
                <div onClick={() => navigate(to)} key={to}>{title}</div>
            ))}
          </nav>
          <footer>
            ---
          </footer>
        </div>
        <Outlet/>
      </>
  );
}