import Image from "next/image";
import styles from "./page.module.css";
import hero from "./../../public/assets/hero.png";
import mhero from "./../../public/assets/mhero.png";
import Form from "@/components/form/Form";
import About from "@/components/about/About";
import Products from "@/components/products/Products";
import Packages from "@/components/packages/Packages";
import Tadoba from "@/components/tadoba/Tadoba";
import Testimonials from "@/components/testimonials/Testimonials";
import ShopBtn from "@/components/shopBtn/ShopBtn";
import SecurityForm from "@/components/securityForm/SecurityForm";
import Shop from "@/components/shop/Shop";
import Experience from "@/components/experience/Experience";
import Safari from "@/components/safari/Safari";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <Image src={hero} className={styles.heroImg} placeholder="blur" />
        <Image src={mhero} className={styles.heroImg2} placeholder="blur" />
        <div className={styles.heroInfo}>
          <div className={styles.heroTitle}>
            RAJKALP RESORTS & <br />
            PRECIOUS SERVICES
          </div>
          <div className={styles.heroDesc}>
            Elevate your lifestyle with Rajkalp Resorts & Precious Services -
            where <br /> dreams meet investments, and every stay is a royal
            experience
          </div>
          <Link href="/#footer">
            <div className={styles.heroBtn}>EXPLORE</div>
          </Link>
        </div>
      </div>

      <About />
      <Products />
      {/* <ShopBtn /> */}
      <Packages />
      <Tadoba />
      <Experience />
      <Safari />

      <Testimonials />
      {/* <SecurityForm /> */}
      <br />
      <br />
      {/* <Shop /> */}
    </div>
  );
}
