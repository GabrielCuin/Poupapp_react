import styles from "./searchinput.module.css";
import { IconSearch } from "../Icons";

export const SearchInput = (props) => {
  return (
    <div className={styles.container}>
      <IconSearch />
      <input className={styles.input} {...props} />
    </div>
  );
};
