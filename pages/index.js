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
                  <Image className="rounded-full"  src={profilePic} 
                  alt="Picture of the author" width={125} height={125}
                  />
              </div>
        <article className="pt-5 mx-auto prose lg:prose-xl">        
           <h1 className="text-center">Henrique Elias Silva
           </h1>
          <p>
          Web developer with +10 years of experience building websites, web applications, and connecting technologies to help companies grow.
          </p>
          <p>
          Desenvolvedor web com mais de 10 anos de experiência criando websites, aplicativos para web e integrando tecnologias para ajudar empresas a crescerem.
          </p>
        </article>
        <div className="mx-auto p-10">
         <a  className="hover:underline hover:text-blue-700 text-xl" href="https://api.whatsapp.com/send/?phone=5548998114079">👋 Say Hello</a>
        </div>
        </main>
    </>
  )
}
