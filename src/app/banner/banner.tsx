
import styles from './banner.module.css'
import Image from 'next/image';
import bannerImg from '/public/bookBanner.jpg'

export default function Banner(props: any) {


  

  return (
    <div className={styles.backgroundBanner}>
      <div className={styles.banner}></div>
    </div>
  )
}


