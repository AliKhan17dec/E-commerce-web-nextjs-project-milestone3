export default function Contact1() {
    return (
      <div className="bg-gray-100 py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">CONTACT INFO:</h2>
            <p className="text-lg mb-4">
              Got an idea or something exciting to share? Don’t hesitate to get in touch – I’d love to hear your stories, explore new opportunities, and create something amazing together!
            </p>
            <p className="text-lg">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ali-khan-8694162b7"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/ali-khan-8694162b7
              </a>
            </p>
          </div>
  
          {/* Feedback Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Feedback</h2><p className="text-lg mb-4">
              We value your feedback! Share your thoughts, suggestions, or any ideas you have to help us improve. Your input is important to us.
            </p>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                /></div>
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-lg mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Message"
                  />
                </div>
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-600 mt-4">
                Your feedback helps us grow and improve. Thank you for being a part of this journey!{' '}
                
              </p>
            </div>
          </div></div>
    );
  }
  