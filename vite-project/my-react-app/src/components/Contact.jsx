import React from 'react';

const Contact = () => (
  <section id="contact" className="container mx-auto py-12">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
      <input type="text" placeholder="Name" required className="w-full p-2 border mb-4" />
      <input type="email" placeholder="Email" required className="w-full p-2 border mb-4" />
      <textarea placeholder="Message" required className="w-full p-2 border mb-4"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Send</button>
    </form>

    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold mb-6">Hungry? Visit us here:</h3>
      <div className="w-full flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.671851937993!2d-73.89085310000002!3d40.74724560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f91c92d48f1%3A0x6df870c4c15046e2!2sNepali%20Momo%20Cafe!5e0!3m2!1sen!2sus!4v1747026160717!5m2!1sen!2sus"
          width="750" height="450" style={{ border: 0 }} allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
);

export default Contact;