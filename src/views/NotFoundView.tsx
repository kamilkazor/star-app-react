import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFoundView() {
  return (
    <>
      <Helmet>
        <title>404 - Star App</title>
        <meta name="description" content="There is nothing here" />
      </Helmet>
      <motion.div
        className="my-20"
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
        <h1 className="text-yellow-500 text-6xl">404</h1>
        <div className="card card-shape mt-5">
          <p className="mb-5">
            The galaxy is full of wonders but there is nothing here...
          </p>
          <Link to="/" className="card-text-important">
            Go to home page
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default NotFoundView;
