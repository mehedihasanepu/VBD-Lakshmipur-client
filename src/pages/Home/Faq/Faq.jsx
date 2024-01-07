
const Faq = () => {
    const faq = [
        {
            question: "Do I need any specific qualifications to volunteer?",
            answer:
                "No, we welcome volunteers from all backgrounds and skill levels. Your willingness to contribute and make a difference in our community is what matters most.",
        },
        {
            question: "What types of volunteer opportunities does VBD Lakshmipur offer?",
            answer:
                "We provide a wide range of opportunities, including educational support, environmental initiatives, healthcare outreach, and more. Visit our 'Volunteer Opportunities'. page to explore the current projects and find one that aligns with your interests",
        },
        {
            question:
                "How can I support VBD Lakshmipur if I don't have the time to volunteer?",
            answer:
                "We greatly appreciate your support! You can make a donation on our 'Support Us' page. Your contributions help us fund our projects and make a positive impact in Lakshmipur.",
        },
        {
            question: "Is VBD Lakshmipur a registered non-profit organization?",
            answer:
                " Yes, we are a registered non-profit organization committed to improving the lives of Lakshmipur's residents. You can find our registration details on our 'About Us' page.",
        },
    ];

    return (
        <div className="max-w-screen-lg mx-auto mt-16">
            <h2 className="lg:text-5xl text-3xl text-[#134d22] font-bold mb-10 text-center">
                FAQ
            </h2>
            <div className="space-y-2" data-aos="zoom-in-up">
                {
                    faq.map((f, inx) => <div key={inx} className="collapse collapse-arrow bg-[#FCFFB2]">
                        <input type="radio" name={`my-accordion-{inx}`} />
                        <div className="collapse-title text-xl font-medium text-[#134d22]">
                            {f.question}
                        </div>
                        <div className="collapse-content text-[#134d22]">
                            <p>{f.answer}</p>
                        </div>
                    </div>)
                }
           </div>

        </div>
    );
};

export default Faq;