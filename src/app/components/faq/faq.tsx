import "./faq.css";
import TextContainer from "../common/textContainer";
import CustomButton from "../common/button";

const Acordian = () => {
  const sections = [
    "What is Bookmark?",
    "How can I request a new browser?",
    "Is there a mobile app?",
    "What about other Chromium browsers?",
  ];

  const bodyText =
    "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.";

  return (
    <div className="accordian">
      {sections.map((section) => (
        <details key={section}>
          <summary>{section}</summary>
          <p>{bodyText}</p>
        </details>
      ))}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="faq-container">
      <TextContainer
        title="Frequently Asked Questions"
        body="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
        type="compact"
      />
      <Acordian />
      <CustomButton text="More Info" type="button-primary" />
    </section>
  );
}
