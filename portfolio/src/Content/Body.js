import Header from "./Header";
import MyImage from "./MyImage";
import styles from "./Body.module.css";
function Body(props) {
  return (
    <>
      <div className={styles.outercontainer}>
        <div className={styles.flexcontainer}>
          <div className={styles.header}>
            Hey there,I'm
            <br />
            Vibhav Sharma
          </div>
          <div className={styles.content}>
            I am learning how to build products on the web keeping design in
            mind.
            <br />
            I'm currently in my final year of undergrad in Computer Science and
            Engineering.
          </div>
        </div>
        <MyImage />
      </div>
    </>
  );
}
export default Body;
