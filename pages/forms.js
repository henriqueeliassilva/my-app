function Forms () {
    return <>
    <div className="bg-gray-100 min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
             <form method="POST" action="https://henrique94039.activehosted.com/proc.php" id="_form_1_"  noValidate>
                    <input type="hidden" name="u" value="1" />
                    <input type="hidden" name="f" value="1" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />
                  <div>
                    <div>
                      <div>
                      <h1 class="mb-8 text-3xl text-center">Cadastre-se</h1>

                        <input className="w-full border border-gray-200  p-3 rounded mb-4" type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <input className="w-full border border-gray-200  p-3 rounded mb-4" type="text" id="email" name="email" placeholder="Digite seu e-mail" required/>
                      </div>
                    </div>
                    <div>
                      <button className="w-full text-center py-3 rounded  bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1" id="_form_1_submit" type="submit">
                        Enviar
                      </button>
                    </div>
                  </div>
            </form>
            </div>
        </div>
    </div>
         </>
  }
  
  export default Forms