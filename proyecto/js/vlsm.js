function CalcularRed()
{//apertura funcion
     ip=document.getElementById('ip').value;
     mascara=document.getElementById('Mascara').value;
     var bit = 0;
     for (cadena = 0; cadena <= ip.length-1; cadena++)
        {// apertura for ip
          if (mascara >= 1 && mascara <= 8)
           {// apertura if mascara
             bit = mascara - 1;
             if (cadena > 0 || cadena <3)
              {// apertura if cadena
               var resultado = parseInt(ip.substring(0, 3));
                   resultado = resultado.toString(2);
               for (cadena = 0; cadena <= resultado.length-1; cadena++) 
                 { //apertura for resultado
                   resultado1 = parseInt(resultado.substring(bit, 7));
                   resultado2 = resultado - resultado1;
                   resultado3 = parseInt(resultado2,2);
                   document.getElementById('Binario').value=innerHTML=resultado;
                   document.getElementById('BinarioMod').value=innerHTML=resultado2;
                   document.getElementById('Decimal').value=innerHTML=resultado3;
                 }//cierre for resultado
              }//cierre if cadena
           }else{
	       document.getElementById('hidden').value=innerHTML="Introdujo una mascara Superior a 8 o menor que 1, introduzca una de 1 a 8";//cierre if mascara 
	    }
        }//cierre for ip
}//cierre funcion
