<script lang="ts">
	import type { PageData } from './$types';


</script>

<div class="bg-slate-100 flex h-screen">
    <div class="w-full max-w-xs m-auto rounded bg-orange-100 p-5">   
          <header>
            <img class="w-28 h-28 mx-auto mb-5" src="/salvadorfc1.png"/>
          </header>   
          <form>
            <div >
              <label class="block mb-2 text-orange-500" for="username">E-mail</label>
              <input class="w-full p-2 mb-6 text-orange-700 border-b-2 border-orange-500 outline-none focus:bg-gray-300" type="text" name="username">
            </div>
            <div>
              <label class="block mb-2 text-orange-500" for="password">Senha</label>
              <input class="w-full p-2 mb-6 text-orange-700 border-b-2 border-orange-500 outline-none focus:bg-gray-300" type="password" name="password">
            </div>
            <div>          
              <input class="w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
            </div>       
          </form>  
          <footer>
            <a class="text-orange-400 hover:text-orange-600 text-sm float-left text-2xl font-bold" href="#">Esqueceu a senha?</a>
            <a class="text-orange-400 hover:text-orange-600 text-sm float-right" href="#">Criar uma conta</a>
          </footer>   
    </div>
</div>
