import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import "./wdyr";
import Router from "./router";

export function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}

export default App;
