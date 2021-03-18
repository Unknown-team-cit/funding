import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({

   paper:{
       backgroundColor:'#455a64',
       width:'60%',
       margin:'30px',
       borderRadius:20,
       padding:'30px'
       
       
   },
   input:{
       width:'75%',
       margin:20,
       marginLeft:35

       
   },
   button:{
       margin:10,
       padding:10,
       alignSelf:'center',
       width:'80%',
    //    backgroundColor:'#311b92',
       borderRadius:20,
       marginLeft:35,


   },
   heading:{
       color:'#212121',
        fontWeight:'bold',
        margin:'7px',
       marginLeft:35

   },
   body:{
       backgroundColor:' #212121'
   }
   
}))