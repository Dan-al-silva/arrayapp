

import ReactApp,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,Image,ScrollView} from 'react-native';
import  {useFonts, Abel_400Regular,Mirza_400Regular}from'@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';


export default function App() {

 let[fontsLoaded] = useFonts({
   Abel_400Regular,
   Mirza_400Regular,
   Mirza_400Regular
 });

 if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return (
  

 
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style = {styles.titulo}>
        Rede Social - Encontro no Senac
      </Text>
      <Text style ={styles.titulo2}>
        Você tem um projeto integrador
      </Text>
      <Text style ={styles.titulo3}>
        Quer involver novas ares
      </Text>
      <Text style ={styles.titulo4}>
        Então...vamos encontartr os alunos aqui.
      </Text>
      <FlatList
        data={pessoas}
        renderItem={({item})=>
      <View  style = {styles.container2}>

        <View style = {styles.container3}>
        <Image style={styles.img} source={item.img}/>
                <Text style ={styles.nome1}>Nome:{item.nome}</Text>

        </View>

        <Text style ={styles.cod1}>ID:{item.uid}</Text>
        <Text style ={styles.curso1}>Curso:    {item.curso}</Text>
        <Text style ={styles.periodo1}>Periodo: {item.periodo}</Text>
        <Text style ={styles.gosto1}>Gosto:   {item.gosto}</Text>
        <Text style ={styles.bio1}>Bio:       {item.bio}</Text>
        
        
        
      </View>
        }
      />

      
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container3:{
    flax:1,
    flexDirection:'row',
    textAlign:'center'
  },
  container2:{
      backgroundColor:'#F8B651',
      marginBottom:50,
      borderRadius:50
  },
 
  container:{
    flex: 1,
    backgroundColor: '#FFC300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:100,
    width:100,
    marginTop:30,
    borderRadius:50,
    justifyContent: 'center',
    marginBottom:3,
  },
  titulo:{
    backgroundColor:"#EF0864",
    fontSize:35,
    color:'white',
    borderColor:'#AE08EF',
    borderRadius:20,
    textAlign: 'center',
    marginTop:30,
  },
  titulo2:{
    backgroundColor:'#35007C',
    fontSize:30,
    color:'white',
    borderRadius:10,
    marginTop:5,
    textAlign:'center'
    
  },
  titulo3:{
    backgroundColor:'#005F7C',
    fontSize:25,
    color:'white',
    borderRadius:8,
    marginTop:5,

  },
  titulo4:{
    backgroundColor:'#006B2C',
    fontSize:20,
    color:'white',
    borderRadius:8,
    marginTop:5,
  },
  cod1:{
    backgroundColor:'white',
    paddingLeft:10,
    borderRadius:20,
    fontSize:15,
  },
  nome1:{
    marginTop:50,
    height:30,
    backgroundColor: '#900C3F',
    color:'white',
    marginBottom:5,
    borderRadius:20,
    paddingLeft:10,
    fontSize:20,
    fontFamily:'Mirza_400Regular'
    
  },
  curso1:{
    backgroundColor:'#FF5733',
    color:'white',
    borderRadius:20,
    paddingLeft:10,
    fontSize:15,
    marginBottom:5,
  },
  periodo1:{
    
    color:'white',
    backgroundColor:'#C38080',
    borderRadius:20,
    paddingLeft:10,
    fontSize:15,
    marginBottom:5,
  },
  gosto1:{
    
    color:'white',
    backgroundColor:'#005457',
    borderRadius:20,
    paddingLeft:10,
    fontSize:15,
    marginBottom:5,
  },
  bio1:{
    width:300,
    color:'white',
    backgroundColor:'#603CD2',
    borderRadius:15,
    paddingLeft:10,
    fontSize:15
  }
});


const pessoas=[
  {
    uid:160,
    nome:'Danilo Soares',
    curso:'Tecnico de informatica',
    periodo: 'Manhã',
    gosto:'Ti10',
    bio:'Curto a vida de um geito bem leve, gosto de sair com os amigos aos finis de semana e compartilahr informações é o meu forte',
    img:require('./assets/img/DaniloAlves.png')
  },
  {
    uid:161,
    nome:'Silvio Santos',
    curso:'Gestão de negócios',
    periodo: 'Manhã',
    gosto:'Apresentador,Administração',
    bio:'Curto a vida de um geito bem leve, gosto de sair com a minha familia aos finais de semana, sou comunicador e gosto de ser apresentador de TV esse é o meu forte',
    img:require('./assets/img/silvio.png')
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:require('./assets/img/bruno.jpg')
  },
  {
    uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img:require('./assets/img/bosonaro.png')
  },
  {
    uid:420,
      nome:'Caio elias',
      curso:'Tecnico de informatica',
      periodo:'Manhã',
      turma:'TI10m',
      gosto:'Hardware,Banco de dados,C#',
      bio:'garoto de programa junior',
      img:require('./assets/img/DaniloAlves.png')
  },
  {
  uid:159,
  nome:'Cauãzinho chavão',
  curso: 'Técnico de Informática',
  periodo: 'Manhã',
  turma: 'Ti10',
  gosto:'Livia, hosana, laura, Mol e casadas', 
  bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
  img:require('./assets/img/123.jpg')
  },
  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img:require('./assets/img/washington.jpg')
  },
  { 
    uid:130,
    nome:'Pedro Santiago',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10m',
    gosto:'HTML, Games',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img:require('./assets/img/DaniloAlves.png')
  }
];