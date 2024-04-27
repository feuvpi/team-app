<script lang="ts">
	import type { PageData } from './$types';


</script>

<div class="bg-slate-100 flex h-screen">
    <div class="w-full max-w-xs m-auto rounded bg-white p-5 border-b-8 border-orange-300 shadow-md">   


          <header>
            <img class="w-28 h-28 mx-auto mb-5 transform hover:scale-110 transition duration-300" src="/salvadorfc1.png"/>

          </header>   
          <form method="POST" action="?/login">
            <div >
              <label class="block mb-2 text-orange-500 font-medium" for="username">E-mail</label>
              <input class=" hover:border-orange-500 focus:border-orange-700 hover:shadow-sm font-medium border-2  bg-gray-100 placeholder-gray-500 text-sm focus:outline-none w-full p-2 mb-6 text-orange-700 border-b-2 focus:border-orange-500 border-orange-300 outline-none" type="text" name="email">
            </div>
            <div>
              <label class="block mb-2 text-orange-500 font-medium" for="password">Senha</label>
              <input class="shadow-sm hover:border-orange-500 focus:border-orange-700 hover:shadow-sm border-2 focus:border-orange-500 font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none w-full p-2 mb-6 text-orange-700 border-b-2 border-orange-300 outline-none" type="password" name="password">
            </div>
            <div>          
              <button class="w-full bg-orange-400 hover:bg-orange-600 hover:shadow-md text-white font-bold py-2 px-4 mb-6 rounded">Entrar</button>
            </div>       
          </form>  
          <footer>
            <a class="text-black hover:text-orange-600 text-sm float-left text-2xl" href="#">Esqueceu a senha?</a>
            <a class="text-orange-400 hover:text-orange-600 text-sm float-right" href="#">Criar uma conta</a>
          </footer>   
    </div>
</div>
