import { useState } from "react"
import Buscador from "./buscador"
import styles from "./cardapio.module.scss"
import logo from "assets/logo.svg"
import Filtro from "./filtros"
import Ordenador from "pages/ordenador"
import Itens from "./itens"

export default function Cardapio(){
    const [busca,setBusca]=useState("")
    const [filtro,setFiltro]=useState<number | null>(null)
    const [ordenador,setOrdenador]=useState("")
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo}/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text} >
                    O seu restaurante persolizado
                </div>
            </header>
            <section className={styles.cardapio}>
                <h2 className={styles.cardapio__titulo}>Cardápio</h2>
                <Buscador busca={busca} setBusca={setBusca}
                />
                <div className={styles.cardapio__filtros}>
                    <Filtro filtro={filtro} setFiltro={setFiltro}/>
                </div>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
        </main>
    )
}