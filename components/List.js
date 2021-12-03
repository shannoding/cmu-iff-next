import Link from 'next/link'
import styles from '../styles/list.module.css'


export default function List(props) {
  const Item = props.Item
  const data = props.data
  if (!data || data.length == 0) {
    return (
      <div className={styles.emptyListSection}>
      <p>{props.emptyText || "Not found"}</p>
      </div>
      )
  }
  const allItems = data.map((e, i) => (<Item {...e} key={i} />));
  return (
    <div className={styles.listSection}>
    {allItems}
    </div>
  );
}