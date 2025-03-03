import { FormEvent } from "react";
import "./App.css";
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const contact = {
    name: formData.get("name"),
    email: formData.get("email"),
    reason: formData.get("reason"),
    notes: formData.get("notes"),
  } as Contact;
  console.log("Submitted details:", contact);
  return redirect(`/thank-you/${formData.get("name")}`);
}

export function ContactPage() {
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we'll get back to you as soon as we can.
      </p>
      <form method="post">
        <div className="flex flex-col mb-2">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Your email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
            pattern="\S+@\S+\.\S+"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label
            htmlFor="reason"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Reason you need to contact us
          </label>
          <select
            id="reason"
            name="reason"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <label
            htmlFor="notes"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Additional notes
          </label>
          <textarea
            id="notes"
            name="notes"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
