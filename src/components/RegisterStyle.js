import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    textField:{
        margin:'5px',
        padding:'5px',
 
    },
    body:{
        backgroundColor:'#212121',
        color:'#ed4b82'
        
    },
   
    grid:{
        alignSelf:'center',
        alignItems: 'center',
        width: '500px',
        padding: '70px',
        border: '30px',
        backgroundColor:'#455a64',
        borderRadius:50,
        margin:30,
        
    },
    button:{
        alignSelf:'center',
        width:'100%',
        padding:'10px',
        margin:'10px',
        // backgroundColor:'#311b92',
        borderRadius:20,
    },
    header:{
        color:'#212121',
        fontWeight:'bold',
        margin:'7px',
        marginLeft:'10px'

    }
}))

