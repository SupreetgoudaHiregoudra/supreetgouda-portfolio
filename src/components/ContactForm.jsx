import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7uu0i3y',           // ✅ Your service ID
        'template_jyvumrb',          // ✅ Your template ID
        form.current,
        'U3lMO--UHYSxZ0dKS'          // ✅ Your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('✅ Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('❌ Message failed to send.');
        }
      );

    e.target.reset(); // clear form after send
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <div>
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          placeholder="Tell me about your project or how we can collaborate..."
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="urgent"
          id="urgent"
          className="accent-indigo-600"
        />
        <label htmlFor="urgent" className="text-sm">
          Mark as urgent (I'll prioritize your message)
        </label>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold"
      >
        Send Message 🚀
      </button>
    </form>
  );
};

export default ContactForm;
