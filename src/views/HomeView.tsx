import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function HomeView() {
  return (
    <>
      <Helmet>
        <title>Home - Star App</title>
        <meta
          name="description"
          content="Star Wars themed training project made with React"
        />
      </Helmet>
      <motion.div
        className="flex flex-col justify-center items-center min-h-[calc(100vh-64px)]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <header className="w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-sans text-blue-300">
            Not long time ago in your browser...
          </h1>
          <img
            src={logo}
            alt="Star App"
            className="my-5 w-full max-w-screen-lg"
          />
        </header>
        <ul className="flex sm:text-2xl">
          <li className="p-5">
            <Link to="/starships">Starships</Link>
          </li>
          <li className="p-5">
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default HomeView;
