import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/me.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10 flex flex-col justify-center">
        <div className="mx-auto">
          <Image className="rounded-full"  src={profilePic} alt="Picture of the author"   width={125}
      height={125}/></div>
    
        <article className="pt-5 mx-auto prose lg:prose-xl">
        
  <h1 className="text-center">Henrique Elias Silva</h1>
  <h4>
    I build Websites, Web Apps and connect technologies to help companies to grow.
  </h4>
  <p>
    Ajudo empresas a crescerem criando websites, aplicativos para web e integrando as melhores tecnologias.
  </p>
</article>
      </main>
    </>
  )
}
