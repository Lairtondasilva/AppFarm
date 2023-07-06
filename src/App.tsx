import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./routers";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
