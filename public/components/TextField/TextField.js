import style from "./style.module.css";
export default function TextField({ label, name, type = "text", ...props }) {
  return (
    <div class={style.container}>
      <label for={name}>{label}</label>
      <input id={name} required type={type} name={name} {...props} />
    </div>
  );
}
