function Type () {
    return <>
            <div className="p-4 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500 text-5xl md:text-7xl font-bold mx-auto max-w-6xl">Cadastre-se
                            </h1>
                            <p className=" text-center mb-5 text-lg text-white">Cadastre-se para mais informações.</p>
                        </div>
                        <div className="bg-gray-800 p-11 rounded">
                                    <form  method="POST" action="https://henrique94039.activehosted.com/proc.php" id="_form_1_"  noValidate> 
                                            <input type="hidden" name="u" value="1" />
                                            <input type="hidden" name="f" value="1" />
                                            <input type="hidden" name="s" />
                                            <input type="hidden" name="c" value="0" />
                                            <input type="hidden" name="m" value="0" />
                                            <input type="hidden" name="act" value="sub" />
                                            <input type="hidden" name="v" value="2" />
                                            
                                            <input className="mb-2 w-full border border-gray-200 rounded" type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
                                            <input className="mb-2 w-full border border-gray-200 rounded" type="text" id="email" name="email" placeholder="Digite seu e-mail" required/>
                                                <button className="w-full text-center rounded py-2  bg-green-500 text-white hover:bg-green-600 focus:outline-none" id="_form_1_submit" type="submit">
                                                    Enviar
                                                </button>
                                    </form>
                     </div>
             </div>  
              
         </>
  }
  
  export default Type