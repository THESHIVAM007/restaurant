import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32}/>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW!!!</div>
          <div className={styles.text}> 011 22 33 445</div>
        </div>
      </div>

      <div className={styles.item}> 
        <ul className={styles.list}>
        <li className={styles.listItem}>Home</li>
        <li className={styles.listItem}>Product</li>
        <li className={styles.listItem}>Menu</li>
        <Image src="/img/logo.png" alt="" width={120} height={70}/>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contact us</li>
        </ul></div>
      <div className={styles.item}> 
        <div className={styles.cart}>
        <Image src="/img/cart.png" alt="" width={30} height={30}/>
<div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
