import style from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
   
    <div className={style.app}>
      
    <div className={style.background}></div>

   <div className={style.content}>

   <header>
      <Image
        src="https://www.igormello.com/wp-content/uploads/2023/12/Prancheta-1-copia-8-1024x1024-logo.webp"
        alt="Logo"
        width={320}
        height={320}
        style={{ marginTop: '-2rem' }}
      />
    </header>

    <main className={style.main}>
      <a
        className={style.btnForm}
        href="https://provisaocompany.pro.typeform.com/kickoff?utm_source=instagram&utm_medium=bio&utm_campaign=kickoff"
      >
        CONTRATAR TRÁFEGO PAGO E ESTRATÉGIA
      </a>

      <a className={style.btnLandingPage} href="https://www.igormello.com/mentoria-o-unico-caminho/">
        <p>
          Aplicação Mentoria <br /> O Único Caminho
        </p>

        <p>
          A única mentoria do Brasil para lojistas com foco em posicionamento
          digital, estratégia e vendas.{' '}
        </p>
      </a>
    </main>

    <footer className={style.footer}>
      <p>2023 © Todos os direitor reservados</p>
      <p>Provisão Company</p>
    </footer> 

   </div>

    </div>
   
  )
}
