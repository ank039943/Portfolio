import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    emailjs
      .send(
        "service_n4w09sl",      // 🔁 PASTE your Service ID here
        "template_kiznboe",     // 🔁 PASTE your Template ID here
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "mkKcLvkbWv4bw5Im7"     // 🔁 PASTE your Public Key here
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Contact
        </h2>

        {/* Split layout: left wider than right */}
        <div className="grid gap-12 md:grid-cols-[3fr_2fr] items-start text-justify hyphens-auto">

          {/* LEFT: Contact Form (slightly wider) */}
          <div>
            <p className="text-gray-600 mb-6 max-w-xl">
              Feel free to reach out for collaboration, opportunities,
              or just a quick hello.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600 text-sm">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-600 text-sm">
                  {error}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: Supporting Info (slightly narrower) */}
          <div className="text-gray-600 space-y-6 max-w-md">
            <p>
              I’m always open to discussing interesting problems,
              system design challenges, and collaboration opportunities.
            </p>

            <p>
              If you’re reaching out regarding a role, freelance work,
              or a technical discussion, feel free to share a bit of
              context — I’ll get back as soon as I can.
            </p>

            <div className="pt-4 space-y-2">
              <p>
                <span className="font-medium text-gray-900">Location:</span>{" "}
                India (Remote-friendly)
              </p>

              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                iamankurjaiswal@gmail.com
              </p>

              <p>
                <span className="font-medium text-gray-900">Availability:</span>{" "}
                Open to full-time & freelance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
