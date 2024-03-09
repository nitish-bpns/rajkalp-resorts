import React from "react";
import styles from "../login/login.module.css";
import Image from "next/image";
import loginbg from "../../../../public/assets/rajkalp/loginbg.png";
import Footer from "@/components/footer/Footer";
import logo from "./../../../../public/assets/rajkalp/logo2.png";
import Link from "next/link";

function Signup() {
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
          <div className={styles.head4}>
            Personalize Your Experience: <br />
            Let's Get to Know You
          </div>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.inputcol1}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={styles.inputcol2}
            />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className={styles.input2}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className={styles.input3}
          />
          <span className={styles.phone}>+91</span>

          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="DOB (DD/MM/YYYY)"
              className={styles.inputcol1}
            />
            <select
              type="text"
              placeholder="Gender"
              className={styles.inputcol2}
            >
              <option value="Gender">Gender</option>
              <option value="Gender">Male</option>
              <option value="Gender">Female</option>
              <option value="Gender">Other</option>
            </select>
          </div>

          <Link className={styles.link2} href="/auth/signup2">
            <button className={styles.submitBtn2}>Next</button>
          </Link>
        </div>
        <div className={styles.col2}>
          <div className={styles.head2}>Already have an account?</div>
          <div className={styles.head3}>
            Sign In and discover a great amount of new opportunities!
          </div>
          <Link href="/auth/signup2" className={styles.link}>
            <button className={styles.nextBtn}>Signin</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
