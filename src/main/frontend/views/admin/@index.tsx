import {ViewConfig} from "@vaadin/hilla-file-router/types.js";

export const config: ViewConfig = {
  title: 'Admin',
  rolesAllowed: ['ADMIN'],
}

export default function Admin() {
  return (
      <>
        Admin
      </>
  )
}