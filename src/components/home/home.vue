<template>
  <div>
   
    <h1 class="centralizado" > {{ titulo }} </h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <input type="search" class="filtro" @input="filtro =  $event.target.value" placeholder="filtre pelo titulo">
  
    <ul class ="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of  fotoscomfiltro">
        
        <meu-painel :titulo="foto.titulo" >

            <imagem-responsiva v-meu-transform:scale.animate='1.2' :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
          tipo="button" 
          rotulo="Remover" 
          @botaoAtivado="remove(foto)"
          :confirmacao="false"
          estilo="padrao"
          />

        </meu-painel>   

      </li>
    </ul>  

  </div>
</template>

<script>
import painel from '../shared/painel/painel.vue';
import imagemresponsiva from '../shared/painel/imagem-responsiva/imagemresponsiva.vue';
import Botao from '../shared/botao/botao.vue';
export default {

  components:{

    'meu-painel' : painel,
    'imagem-responsiva': imagemresponsiva,
    'meu-botao' : Botao
  },

   data () {

    return {

      titulo: "Alurapic",
      fotos: [],
      filtro: '',
      mensagem:''
     }
  },
  
  computed: {

    fotoscomfiltro() {
 
      if(this.filtro) {
       let exp = new RegExp(this.filtro.trim(), 'i');
       return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {

    remove(foto) {
      
        if(confirm('Confirma operação?')){
          this.$http
          .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
          .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          } , err => {
              console.log(err)
              this.mensagem = 'Não foi possivel remover a foto'
          

          });
        }
     }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log("errooooooooooooo"));
     },
}

</script>
<style>
  
  .centralizado{

    text-align: center;
  }
  .lista-fotos{

    list-style: none;
  }
  .lista-fotos .lista-fotos-item{

    display: inline-block
  }

  .filtro{

    display: block;
    width: 100%;
  }
  
</style>
