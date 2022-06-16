import styles from "./NavBar.module.css";
import image from "../Images/logo.png";
import SocialFollow from "../utilities/SocialFollow";
function NavBarComponent(props) {
  return (
    <>
      <a href="/" className={styles.component}>
        {props.component}
      </a>
    </>
  );
}
function NavBar(props) {
  const Navfields = props.navfields;

  return (
    <>
      <div className={styles.outercontainer}>
        <img className={styles.image} src={image} alt={"image of logo"} />
        <div className={styles.navcontainer}>
          {Navfields.map((ele) => {
            return <NavBarComponent component={ele}></NavBarComponent>;
          })}

          <SocialFollow />
        </div>
      </div>
    </>
  );
}
export default NavBar;
