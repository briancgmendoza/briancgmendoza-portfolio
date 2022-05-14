import * as React from "react";

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
    // data[index][e.currentTarget.name] = e.currentTarget.value;
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
    console.log(sendMessage);
    alert("Message sent!");
  };

  const renderForm = () => {
    return sendMessage.map((input, index) => {
      return (
        <div key={index}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={input.sender}
              onChange={(e) => handleFormChange(index, e)}
              name="sender"
              required
              className="form-control"
              placeholder=""
            />
            <label htmlFor="sender">Your Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              value={input.emailAddress}
              onChange={(e) => handleFormChange(index, e)}
              name="emailAddress"
              className="form-control"
              placeholder=""
            />
            <label htmlFor={input.emailAddress}>
              Your Email address(Optional)
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={input.message}
              onChange={(e) => handleFormChange(index, e)}
              name="message"
              required
              className="form-control"
              placeholder=""
            />
            <label htmlFor={input.message}>Message</label>
          </div>
        </div>
      );
    });
  };

  return (
    <form onSubmit={(values) => onSubmitHandler(values)}>
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
