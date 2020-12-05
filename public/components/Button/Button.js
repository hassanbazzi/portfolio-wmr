import styles from "./style.module.css";

export default function Button({ ...props }) {
  return (
    <button type="submit" {...props}>
      {props.children}
    </button>
  );
}
