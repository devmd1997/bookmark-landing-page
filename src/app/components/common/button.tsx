import "./buttonStyles.css";
export type CustomButtonType =
  | "button-primary"
  | "button-secondary"
  | "button-tertirary";

interface CustomButtonProps {
  text: string;
  type: CustomButtonType;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button
      className={`${props.type} ${props.fullWidth ? "w-full" : "w-fit"} ${
        props.className ?? ""
      } h-fit`}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </button>
  );
}
