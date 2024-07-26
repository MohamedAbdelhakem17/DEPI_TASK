"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from "three";
import Link from "next/link";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const background = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: background.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x0,
        points: 20.00,
        maxDistance: 23.00,
        spacing: 20.00
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <main className={`${styles.main} d-flex justify-content-center  align-items-center`} ref={background}>
    <div className={`w-75 p-3 rounded-2 shadow-lg ${styles.list}`}>
      <h2 className="text-center text-white font-mono"> Tasks List</h2>
      <Link href={"/news-app"} className={`${styles.item}`}> News App  </Link>
      <Link href={"/school-system"} className={`${styles.item}`}> School System  </Link>
      <Link href={"/portfolio"} className={`${styles.item}`}> Multi Page App  </Link>
      <Link href={"/news-app"} className={`${styles.item}`}> Clock   </Link>
    </div>
  </main>;
}
