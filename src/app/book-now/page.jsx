import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <center>
          <p className={styles.para}>under maintainance</p>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default page;
