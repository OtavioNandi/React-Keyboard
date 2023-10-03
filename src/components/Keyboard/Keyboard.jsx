import styles from './styles.module.scss'

const Keyboard = () => {

  document.addEventListener('keydown', (e) => {
    const key  = document.getElementById(e.key)
      if(key != null) {
        document.getElementById(e.key)
        .classList.add(`${styles.current}`)
      }
  })
  document.addEventListener('keyup', (e) => {
    const key = document.getElementById(e.key)
    if(key != null) {
      document.getElementById(e.key)
      .classList.remove(`${styles.current}`)
    }
  })

  return (
    <>
      <div className={styles.keyboard}>
        <div id="q">Q</div>
        <div id="w">W</div>
        <div id="e">E</div>
        <div id="r">R</div>
        <div id="t">T</div>
        <div id="y">Y</div>
        <div id="u">U</div>
        <div id="i">I</div>
        <div id="o">O</div>
        <div id="p">P</div>
      </div>
      <div className={`${styles.keyboard} ${styles.second}`}>
        <div id="a">A</div>
        <div id="s">S</div>
        <div id="d">D</div>
        <div id="f">F</div>
        <div id="g">G</div>
        <div id="h">H</div>
        <div id="j">J</div>
        <div id="k">K</div>
        <div id="l">L</div>
        <div id="ç">Ç</div>
      </div>
      <div className={`${styles.keyboard} ${styles.third}`}>
        <div id="\">\</div>
        <div id="z">Z</div>
        <div id="x">X</div>
        <div id="c">C</div>
        <div id="v">V</div>
        <div id="b">B</div>
        <div id="n">N</div>
        <div id="m">M</div>
        <div id=",">,</div>
        <div id=".">.</div>
      </div>
      <div className={styles.keyboard}>
        <div className={styles.spaceBar} id=" "></div>
      </div>
    </>
  )
}

export default Keyboard
