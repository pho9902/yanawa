import styles from "@/styles/write.module.scss";

export default function CheckBox({ idx, tag, onChange, isSub }) {
  return (
    <div className={styles.label}>
      <div>{tag}</div>
      <input
        type="checkbox"
        id={idx}
        onChange={({ target: { checked, id } }) => onChange(checked, id, isSub)}
      />
    </div>
  );
}
