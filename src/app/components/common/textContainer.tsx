import "./textContainer.css";

interface TextContainerProps {
  title: string;
  body: string;
  type: "extend" | "compact";
  maxWidth?: string;
  headerDisplay?: boolean;
}

export default function TextContainer(props: TextContainerProps) {
  return (
    <div
      className={`text-container ${props.type}`}
      style={{ maxWidth: props.maxWidth }}
    >
      <h1 className={props.headerDisplay ? "display" : ""}>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}
