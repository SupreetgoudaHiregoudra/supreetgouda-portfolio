import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, message: '', success: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7uu0i3y',
        'template_jyvumrb',
        form.current,
        'U3lMO--UHYSxZ0dKS'
      )
      .then(
        (result) => {
          setModal({ show: true, message: 'Message sent successfully! 🚀', success: true });
          form.current.reset();
        },
        (error) => {
          setModal({ show: true, message: 'Message failed to send. Please try again.', success: false });
          console.error(error.text);
        }
      );
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600 dark:text-indigo-400">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your full name"
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="user_email"
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
              <input type="checkbox" id="urgent" className="accent-indigo-600" />
              <label htmlFor="urgent" className="text-sm">Mark as urgent</label>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold"
            >
              Send Message 🚀
            </button>
          </form>

          {/* WhatsApp + Availability Card */}
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">💬 Quick Chat on WhatsApp</h3>
              <p className="mb-3">Need a quick response? Let's chat directly on WhatsApp!</p>
              <a
                href="https://wa.me/918971759646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">📢 Open to Work</h3>
              <p>I’m open to internships, freelance projects, and collaborations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center max-w-md mx-auto">
            <p className={`text-lg font-semibold mb-4 ${modal.success ? 'text-green-600' : 'text-red-500'}`}>
              {modal.message}
            </p>
            <button
              onClick={closeModal}
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
