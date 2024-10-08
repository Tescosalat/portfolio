import { sendEmail } from "@/actions/sendEmail";
import Button from "../Button";
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";

export default function Form() {
  const { nav, setNav } = useAppContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setNav(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [nav]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNav("Sending...");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    const result = await sendEmail(formData);

    if (result.success) {
      setNav("Message sent!");
      setEmail("");
      setMessage("");
    } else {
      setNav("Ooops, something went wrong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          placeholder="your email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="message"
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button text={"Submit"} type={"submit"} />
      </form>
    </>
  );
}
