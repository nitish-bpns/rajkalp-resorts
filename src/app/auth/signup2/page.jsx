"use client";
import React, { useState } from "react";
import styles from "../login/login.module.css";
import Image from "next/image";
import loginbg from "./../../../../public/assets/rajkalp/loginbg.png";
import Footer from "@/components/footer/Footer";
import logo from "./../../../../public/assets/rajkalp/logo2.png";
import Link from "next/link";

function Signup2() {
  const [ref, setRef] = useState(true);

  const handleRefYes = () => {
    setRef(true);
  };

  const handleRefNo = () => {
    setRef(false);
  };

  return (
    <>
      <Image
        src={loginbg}
        alt="img"
        width={2000}
        height="auto"
        className={styles.loginbg}
      />
      <div className={styles.container}>
        <div className={styles.col1}>
          <Image
            src={logo}
            alt="img"
            width={1500}
            height="auto"
            className={styles.logo}
          />
          <div className={styles.head1}>Secure Your Access</div>

          <input
            type="password"
            placeholder="Enter Password"
            className={styles.input5}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input5}
          />
          <div className={styles.ref}>
            Referal Id:
            <div>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="yes"
                className={styles.radio}
                onChange={handleRefYes}
              />
              <label for="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="no"
                className={styles.radio}
                onChange={handleRefNo}
              />
              <label for="no">No</label>
            </div>
          </div>

          {ref && (
            <input
              type="text"
              placeholder="Enter Referal Key"
              className={styles.input5}
            />
          )}
          <Link className={styles.link2} href="/auth/confirmation">
            <button className={styles.submitBtn2}>Set Password</button>
          </Link>
        </div>
        <div className={styles.col2}>
          <div className={styles.head2}>Already have an account?</div>
          <div className={styles.head3}>
            Sign In and discover a great amount of new opportunities!
          </div>
          <Link href="/auth/login" className={styles.link}>
            <button className={styles.nextBtn}>Signin</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup2;
