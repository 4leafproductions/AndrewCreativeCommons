import { useState } from 'react';
import styles from './rssWidget.module.css'
const contentOptions = [{value: 'PDF', label: 'Books'},{value: 'RSS', label: 'Podcasts'}];
import { getData } from '../rssDas';


export default function RSSWidget(props: any) {

  type enclosure ={url: string};
  type CustomItem = { pubDate: string, title: string, enclosure: enclosure};
  const [contentOption, setContentOption] = useState(contentOptions[0]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pubdate, setPubDate] = useState('');
  const [audio, setAudio] = useState('');
  let items: any = null;
  const [itemsFeed, setItemsFeed] = useState(items);
  const data = getData(props.url).then(results =>{
    let url = results.items[0]?.enclosure?.url;
    let urlDefault = url ? url : '';
    let date = new Date(results.items[0].pubDate);
    setPubDate(date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}));
    setAudio(urlDefault);
    setTitle(results.title);
    setDescription(results.description);
  });

  function AudioClip(){
    return(
      <audio controls>
          <source src={audio} type="audio/mp3"/>
        Your browser does not support the audio element.
        </audio> 
    )
  }



    return(
      <div className={styles.rssWidget}>
        <h1>{title}</h1>
        <span className={styles.description}>{description}</span>
        <hr className={styles.divider}/>
        <div className={styles.option} key={pubdate}>{pubdate}</div>
        <AudioClip/>
      </div>
    )
}


