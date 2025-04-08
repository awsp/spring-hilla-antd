import {ViewConfig} from "@vaadin/hilla-file-router/types.js";

export const config: ViewConfig = {
  title: 'Secured Page',
  loginRequired: true
};

export default function Secured() {
  return (
      <>
        Secured Page
      </>
  );
}