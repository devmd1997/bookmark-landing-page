import "./heroStyles.css";
import CustomButton from "../common/button";
import TextContainer from "../common/textContainer";
import { Illustration } from "../common/illustration";

export default function Hero() {
  return (
    <section className="hero-container">
      <Illustration
        image="/illustration-features-tab-1.svg"
        border={true}
        orientation="right"
      />
      <div className="hero-content">
        <TextContainer
          title="A Simple Bookmark Manager"
          body="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
          type="extend"
          headerDisplay={true}
        />
        <div className="button-container">
          <CustomButton text="Get it on Chrome" type="button-primary" />
          <CustomButton text="Get it on Firefox" type="button-secondary" />
        </div>
      </div>
    </section>
  );
}
