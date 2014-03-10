function convertdec()
{
       //return (i<1)?"":dec2bin((i-(i%2))/2)+i%2;
       var decimal = parseInt(document.getElementById('decimal').value);
       document.getElementById('binario').value=decimal.toString(2);

       var decimal = parseInt(document.getElementById('decimal').value);
       document.getElementById('octal').value=decimal.toString(8);
       
       var decimal = parseInt(document.getElementById('decimal').value);
       document.getElementById('hexadecimal').value=decimal.toString(16);
       //var decimal = document.form1.decimal.value;
}

function convertbin()
{
       //return (i<1)?"":dec2bin((i-(i%2))/2)+i%2;
       var decimal = parseInt(document.getElementById('binario').value);
       document.getElementById('decimal').value=decimal.toString(10);

       var decimal = parseInt(document.getElementById('binario').value);
       document.getElementById('octal').value=decimal.toString(8);
       
       var decimal = parseInt(document.getElementById('binario').value);
       document.getElementById('hexadecimal').value=decimal.toString(16);
       //var decimal = document.form1.decimal.value;
}

