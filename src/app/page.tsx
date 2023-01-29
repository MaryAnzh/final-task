import styles from './page.module.scss'


export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className='hi'><span className='hi2'>Final Task</span></h2>
      <style>{`          
        h2 {
          color: red;
        }
      
      `}</style>
    </main>
  )
}
