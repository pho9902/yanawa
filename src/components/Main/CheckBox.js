import styles from "@/styles/CheckBox.module.scss";

export default function CheckBox({ idx, tag, onChange, isSub }) {
  return (
    <label className={styles.label}>
      {tag}
      <input
        type="checkbox"
        id={idx}
        onChange={({ target: { checked, id } }) => onChange(checked, id, isSub)}
      />
    </label>
  );
}
