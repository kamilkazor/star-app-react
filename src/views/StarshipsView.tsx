import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ReactComponent as MillenniumIcon } from "../assets/icons/millenniumIcon.svg";
import BrowseStarships from "../components/BrowseStarships";

function StarshipsView() {
  return (
    <>
      <Helmet>
        <title>Starships - Star App</title>
        <meta
          name="description"
          content="Star Wars starship database provided by SWAPI"
        />
      </Helmet>
      <motion.div
        className="mt-20"
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
        <header className="flex justify-center items-end">
          <MillenniumIcon className="fill-blue-300 w-16 min-[400px]:w-20 shrink-0 mr-2" />
          <div>
            <p className="opacity-50 text-sm min-[450px]:text-base">
              MILLENNIUM FALCON'S
            </p>
            <h1 className="text-xl min-[450px]:text-2xl min-[550px]:text-3xl sm:text-4xl">
              STARSHIP DATABASE
            </h1>
          </div>
        </header>
        <BrowseStarships />
      </motion.div>
    </>
  );
}

export default StarshipsView;
