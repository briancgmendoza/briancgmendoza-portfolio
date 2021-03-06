import * as React from "react";
import emailjs from "@emailjs/browser";

import styles from "../../styles/Form.module.scss";
type Props = {
  onClose?: (e: React.SyntheticEvent) => void;
};

type Message = {
  sender: string;
  emailAddress?: string;
  message: string;
};

const Form = ({ onClose }: Props) => {
  const form = React.useRef();
  const [sendMessage, setSendMessage] = React.useState<Message[]>([
    {
      sender: "",
      emailAddress: "",
      message: "",
    },
  ]);

  const handleFormChange = (
    index: number,
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    let data: Message[] = [...sendMessage];
    if (e.currentTarget.name === "sender") {
      data[index].sender = e.currentTarget.value;
    } else if (e.currentTarget.name === "emailAddress") {
      data[index].emailAddress = e.currentTarget.value;
    } else if (e.currentTarget.name === "message") {
      data[index].message = e.currentTarget.value;
    }
    setSendMessage(data);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1e779tc",
        "template_o1sojn6",
        form.current,
        "zkHjTBD5q4_b82pBr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message sent!");

    setSendMessage([
      {
        sender: "",
        emailAddress: "",
        message: "",
      },
    ]);
  };

  const renderForm = () => {
    return sendMessage.map((input, index) => {
      return (
        <div key={index}>
          <div className={styles.formGroup}>
            <input
              type="text"
              value={input.sender}
              onChange={(e) => handleFormChange(index, e)}
              name="sender"
              required
              className={styles.formControl}
              placeholder="Your Name"
            />
            <label htmlFor="sender" className={styles.formLabel}>
              Your Name
            </label>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              value={input.emailAddress}
              onChange={(e) => handleFormChange(index, e)}
              name="emailAddress"
              className={styles.formControl}
              placeholder="Your Email address (Optional)"
            />
            <label htmlFor="emailAddress" className={styles.formLabel}>
              Your Email address (Optional)
            </label>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={input.message}
              onChange={(e) => handleFormChange(index, e)}
              name="message"
              required
              className={styles.formControl}
              placeholder="Message"
            />
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
          </div>
        </div>
      );
    });
  };

  return (
    <form ref={form} onSubmit={(values) => onSubmitHandler(values)}>
      {renderForm()}
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
        <button
          type="reset"
          className={styles.btnReset}
          onClick={() =>
            setSendMessage([
              {
                sender: "",
                emailAddress: "",
                message: "",
              },
            ])
          }
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
