import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.Container}>
        <div>
            <span>
                <Link to="/">Inflearn</Link>
            </span>
            <span>
                <Link to="course">강의</Link>
            </span>
            <span>
                <Link to="roadmaps">Roadmaps</Link>
            </span>
        </div>
    </header>
  )
}
