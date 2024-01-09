import styles from "../styles/Footer.module.css";
import { Panel, Anchor } from "react95";

const footerStyle = {
  display: "block",
  width: "calc(100% - 1rem)",
  margin: "0.1rem auto 0.5rem",
  padding: "0 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

const Footer = ({ showDog }) => {
  return (
    <div className={styles.positioning}>
      <p
        style={{
          display: "block",
          margin: "0 auto",
          textAlign: "center",
          color: "#848584",
        }}
      >
        built with{" "}
        <Anchor style={{ color: "#848584" }} href="https://react95.io/">
          react95
        </Anchor>
      </p>
      <Panel style={footerStyle} variant="well">
        <Anchor href="https://github.com/FaranakNSR">Github</Anchor>
        <Anchor href="https://www.linkedin.com/in/faranak-nasoori/">
          LinkedIn
        </Anchor>
        <Anchor className={styles.pointer} onClick={showDog}>
          My Dog
        </Anchor>
      </Panel>
    </div>
  );
};

export default Footer;
