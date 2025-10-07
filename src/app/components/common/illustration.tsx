import { CSSProperties } from "react";
import "./illustration.css";
import Image from "next/image";

interface IllustrationProps {
  image: string;
  border?: boolean;
  orientation: "left" | "right";
  fillHeight?: boolean;
}

export const Illustration = (props: IllustrationProps) => {
  const style: CSSProperties = {
    objectFit: "contain",
    width: "100%",
    height: "auto",
  };
  if (props.fillHeight) {
    style.height = "100%";
    style.width = "auto";
  }
  return (
    <div className="illustration-container">
      <div className={`illustration-image ${props.border ? "border" : ""}`}>
        <Image
          src={`${props.image}`}
          alt="Illustration"
          width={536}
          height={382}
          priority={true}
          style={style}
        />
      </div>
      <div className={`pill-illustration ${props.orientation}`} />
    </div>
  );
};
