import React from 'react'
import styles from "./header.module.css"
const header = (props) => {
    return (
        <div className={styles.header}>
            <h3 className={styles.logo}>{props.user}</h3>
            <button className={styles.btn}>Login</button>
        </div>
    )
}

export default header
