import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Layout() {
  return (
    <>
      <header>
        <nav />
      </header>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
