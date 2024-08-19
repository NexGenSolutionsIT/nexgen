import "@/styles/global.scss";
import "@/styles/reset.scss";
import Home from "./Home/page";
import { ThemeProvider } from "@/Context/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}
