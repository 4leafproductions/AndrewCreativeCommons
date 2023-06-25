'use client'
import Image from 'next/image'
import styles from './tourswitch.module.css'
import { Switch } from "@nextui-org/react";
export default function Tourswitch(props: any) {


  

  return (
    <div className={styles.row}>
      <span>Technical Tour</span> <Switch  onChange={props.tourMode}/>
    </div>
    
  )
}


