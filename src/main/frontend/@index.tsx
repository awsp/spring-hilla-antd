import {router} from "Frontend/generated/routes";
import {RouterProvider} from "react-router";
import {createRoot} from "react-dom/client";
import {createElement} from "react";
import {AuthProvider} from "Frontend/util/auth";

function App() {
  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  );
}

const outlet = document.getElementById('outlet');
if (outlet) {
  const root = (outlet as any)._root ?? createRoot(outlet);
  (outlet as any)._root = root;
  root.render(createElement(App))
}