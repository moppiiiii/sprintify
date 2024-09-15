// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@mantine/core/styles.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import HomePage from "./pages/home/Home.page";

export function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
