import Form from "../Form";
import styles from "../../styles/Email.module.scss";

const Email = () => {
  return (
    <section className={styles.email} id="messageMe">
      <h2>Send me a message!</h2>
      <Form />
    </section>
  );
};

export default Email;
