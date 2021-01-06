import style from "./style.module.css";

export default function Button({ ...props }) {
  return (
    <button class={style.button} type="submit" {...props}>
      {props.children}
    </button>
  );
}
