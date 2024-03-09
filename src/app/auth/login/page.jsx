import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import loginbg from "../../../public/assets/rajkalp/loginbg.png";
import Footer from "@/components/footer/Footer";
import logo from "./../../../public/assets/rajkalp/logo2.png";
import Link from "next/link";

function Login() {
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
          <div className={styles.head1}>Login to Your Account</div>
          <input
            type="text"
            placeholder="Email Address"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.submitBtn}>Signin</button>
        </div>
        <div className={styles.col2}>
          <div className={styles.head2}>Don't have an account?</div>
          <div className={styles.head3}>
            Signup and discover a great amount of new opportunities!
          </div>
          <Link href="/signup" className={styles.link}>
            <button className={styles.signup}>Signup</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
