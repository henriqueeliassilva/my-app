function Forms () {
    return <>
              <div className="min-h-screen flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold mx-auto max-w-6xl">Forms</h1>

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
        <label for="fullname" >
          Nome completo
        </label>
        <div>
          <input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
        </div>
      </div>
      <div>
        <label for="email" >
          E-mail*
        </label>
        <div >
          <input type="text" id="email" name="email" placeholder="Digite seu e-mail" required/>
        </div>
      </div>
      <div>
        <button id="_form_1_submit" type="submit">
          Enviar
        </button>
      </div>
    </div>
  </form>
              </div>
         </>
  }
  
  export default Forms