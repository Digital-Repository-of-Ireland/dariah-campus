import React from 'react'
import clsx from 'clsx'

import styles from './TOC.module.css'

const createTocItems = (items, depth = 0) => (
  <ul className={clsx(!depth && styles.border, styles.items)}>
    {items.map(item => (
      <li key={item.url} className={styles.item}>
        <a href={item.url}>{item.title}</a>
        {item.items && createTocItems(item.items, depth + 1)}
      </li>
    ))}
  </ul>
)

const TOC = ({ className, toc }) => (
  <div className={clsx(styles.container, className)}>
    <div className={styles.toc}>
      <h2 className={styles.tocHeading}>Table of contents</h2>
      {createTocItems(toc.items)}
    </div>
  </div>
)

export default TOC
