import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import StarshipsView from "./views/StarshipsView";
import TasksView from "./views/TasksView";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-screen-xl px-5 sm:px-10 text-white [text-shadow:0px_0px_5px_black] font-orbitron flex flex-col items-center">
          <Navbar />
          <main className="w-full max-w-screen-lg">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeView />} />
                <Route path="/starships" element={<StarshipsView />} />
                <Route path="/tasks" element={<TasksView />} />
                <Route path="*" element={<NotFoundView />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
        <ReactQueryDevtools position="bottom-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
