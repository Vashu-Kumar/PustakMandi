import React from "react";

const Contact = () => {
    return (
        <div className="pt-18 pb-30 min-h-screen bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center text-white p-4 rounded-lg shadow-md">
                    Contact Us
                </h2>

                <p className="text-lg text-white text-center mb-12   p-6 rounded-lg shadow-md">
                    Have a question, feedback, or need assistance? We’re here to help!
                    Reach out via email, phone, or visit us in person.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Library Address */}
                    <div className="  p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Library Address
                        </h3>
                        <p>PushtakMandi Library</p>
                        <p>123 Library Lane</p>
                        <p>Haridwar, Uttarakhand - 249401</p>
                    </div>

                    {/* Contact Details */}
                    <div className="  p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Get In Touch
                        </h3>
                        <p>
                            Email:{" "}
                            <a
                                className="text-blue-400 hover:underline"
                                href="mailto:pushtakmandi@gmail.com"
                            >
                                pushtakmandi@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{" "}
                            <a
                                className="text-blue-400 hover:underline"
                                href="tel:+911234567890"
                            >
                                +91-1234567890
                            </a>
                        </p>
                    </div>
                </div>

                {/* Library Hours */}
                <div className="  p-6 rounded-lg shadow-lg mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                        Library Hours
                    </h3>
                    <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>

                {/* Frequently Asked Questions */}
                <section className="mt-12">
                    <h3 className="text-3xl font-bold mb-6 text-center text-white">
                        Frequently Asked Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "How can I become a member?",
                                answer:
                                    "You can sign up online or visit the library to complete a membership form.",
                            },
                            {
                                question: "Do you offer digital resources?",
                                answer:
                                    "Yes! We provide access to eBooks, audiobooks, and research databases.",
                            },
                            {
                                question: "Can I request a specific book?",
                                answer:
                                    "Absolutely! We welcome book requests and will do our best to source them.",
                            },
                            {
                                question: "Do you host community events?",
                                answer:
                                    "Yes! We organize book clubs, author meetups, and reading sessions regularly.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="  p-6 rounded-lg shadow-md">
                                <h4 className="font-semibold text-xl mb-3 text-white">
                                    {faq.question}
                                </h4>
                                <p className="text-white">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Media Links */}
                <div className="  p-6 rounded-lg shadow-lg mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Follow Us</h3>
                    <p>Stay updated with events and new arrivals!</p>
                    <p className="text-blue-400 mt-4 ">
                        <span className="hover:underline" > Facebook </span>|<span className="hover:underline" > Instagram </span>| <span className="hover:underline" > Twitter </span> <br />
                        @PushtakMandi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
