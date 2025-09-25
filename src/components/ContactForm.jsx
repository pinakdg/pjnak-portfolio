// src/components/ContactForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgqgvwq"; // your endpoint
const EMAILJS_SERVICE_ID = "service_bvehjzp";
const EMAILJS_TEMPLATE_ID = "template_bn4c4n7";
const EMAILJS_PUBLIC_KEY = "fr4QUeQhNg7D1--MT";

export default function ContactForm(){
  const formRef = useRef(null);
  const [state, setState] = useState({ sending: false, ok: null, msg: "" });

  async function handleSubmit(e){
    e.preventDefault();
    setState({ sending: true, ok: null, msg: "" });

    const form = formRef.current;
    const data = new FormData(form);

    try {
      // 1) Send to Formspree (delivers to you)
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      // 2) Fire EmailJS autoresponse (sends to user)
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      form.reset();
      setState({ sending: false, ok: true, msg: "Thanks! I’ll get back to you soon." });
    } catch (err) {
      console.error(err);
      setState({ sending: false, ok: false, msg: "Submission failed." });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
      <div className="grid gap-3">
        <label className="text-sm">
          Name
          <input name="from_name" required className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2"/>
        </label>
        <label className="text-sm">
          Email
          <input name="reply_to" type="email" required className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2"/>
        </label>
        <label className="text-sm">
          Message
          <textarea name="message" rows="5" required className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2"/>
        </label>
      </div>
      <button disabled={state.sending} className="mt-3 px-4 py-2 rounded-lg bg-white text-gray-900">
        {state.sending ? "Sending..." : "Send"}
      </button>
      {state.ok !== null && (
        <p className={`mt-3 text-sm ${state.ok ? "text-green-400" : "text-red-400"}`}>{state.msg}</p>
      )}
    </form>
  );
}
