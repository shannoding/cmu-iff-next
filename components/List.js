import Link from 'next/link'
import styles from '../styles/list.module.css'


export default function List({ Item, data }) {
  const allItems = data.map((e, i) => (<Item {...e} key={i} />));
  return (
    <div className={styles.listSection}>
    {allItems}
    </div>
  );
}