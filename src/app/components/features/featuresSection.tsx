"use client";

import "./featuresStyles.css";
import TextContainer from "../common/textContainer";
import { useState } from "react";
import { Illustration } from "../common/illustration";
import CustomButton from "../common/button";

interface Feature {
  name: string;
  descriptionTitle: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    name: "Simple Bookmarking",
    descriptionTitle: "Bookmark in\none click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/illustration-features-tab-1.svg",
  },
  {
    name: "Speedy Searching",
    descriptionTitle: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/illustration-features-tab-2.svg",
  },
  {
    name: "Easy Sharing",
    descriptionTitle: "Share your\nbookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/illustration-features-tab-3.svg",
  },
];
interface FeatureListProps {
  selectedFeature: number;
  onSelectFeature: (index: number) => void;
}

const FeaturesList = ({
  selectedFeature,
  onSelectFeature,
}: FeatureListProps) => {
  return (
    <>
      <div className="features-list-container">
        <ul className="features-list">
          {features.map((feature, index) => (
            <li
              key={feature.name}
              className={selectedFeature === index ? "selected" : ""}
              onClick={() => onSelectFeature(index)}
            >
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="bookmark-details">
        <Illustration
          image={features[selectedFeature].image}
          orientation="left"
          fillHeight={true}
        />
        <div className="bookmark-section">
          <TextContainer
            title={features[selectedFeature].descriptionTitle}
            body={features[selectedFeature].description}
            type="compact"
          />
          <CustomButton text="More Info" type="button-primary" />
        </div>
      </div>
    </>
  );
};

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleSelectFeature = (index: number) => {
    setSelectedFeature(index);
  };
  return (
    <section className="features-container">
      <TextContainer
        title="Features"
        body="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        type="compact"
        maxWidth="540px"
      />
      <FeaturesList
        selectedFeature={selectedFeature}
        onSelectFeature={handleSelectFeature}
      />
    </section>
  );
}
