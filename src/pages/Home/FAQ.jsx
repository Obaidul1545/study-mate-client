const FAQ = () => {
  return (
    <section className="container mx-auto px-2 sm:px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">Find answers to common questions</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">What is StudyMate?</div>
          <div className="collapse-content text-sm text-gray-600">
            StudyMate is an online platform that helps students find compatible
            study partners based on subject, location, and study preferences.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I find online study partners?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Yes, you can filter partners by online or offline study modes.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is StudyMate free to use?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Yes, StudyMate is free for basic features. Premium options may be
            available in the future.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
