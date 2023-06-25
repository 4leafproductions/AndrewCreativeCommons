'use client';
import Image from 'next/image'
import { useState } from 'react';
import { Dropdown } from "@nextui-org/react";
import styles from './library.module.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"

export default function Library(props: any) {

  const [showBox, setShowBox] = useState(false);
  const menuItems = props.libraryIndex.map(book =>
    <Dropdown.Item key={book.name}>{book.title}</Dropdown.Item>
    );


  return (
    <div>
      <Dropdown>
        <Dropdown.Button className={styles.menu}>Choose a Book</Dropdown.Button>
        <Dropdown.Menu onAction={props.pickBook}>
          {menuItems}
        </Dropdown.Menu>
      </Dropdown>    
    </div>
    
  )
}


