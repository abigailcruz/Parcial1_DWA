module.exports  = {
    PrecioEmpleado: PrecioEmpleado
  }
var empleado1 =0;
var empleado2 =0;
var empleado3 =0;
var empleado4 =0;
var precioHora = 14;
var horasemp1= 50;
var horasemp2= 60;
var horasemp3= 50;
var horasemp4= 65;

function PrecioEmpleado()
{
  empleado1 = (precioHora*horasemp1);
  empleado2 = (precioHora*horasemp2);
  empleado3 = (precioHora*horasemp3);
  empleado4 = (precioHora*horasemp4);
  console.log('El precio del empleado 1 es =' + empleado1)
  console.log('El precio del empleado 2 es =' + empleado2)
  console.log('El precio del empleado 3 es =' + empleado3)
  console.log('El precio del empleado 4 es =' + empleado4)
};
    

