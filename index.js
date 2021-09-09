var cantidadOpciones = $(".seleccion-porcentaje").length;

//Para la propina personalizada
$("#custom")[0].addEventListener("keyup",function(){

    let valor = this.value;
    obtener(valor);

});
//Para las propinas predeterminadas
for (let i=0; i < cantidadOpciones; i++){
  $(".seleccion-porcentaje")[i].addEventListener("click",function(){
    let valor = this.value;
    obtener(valor);
  });
}

//La funcion obtiene el valor de la propina y hace los calculos asi como la configuracion(visual) necesaria
function obtener(valor){
  let valorFactura = $("#factura").val();
  let cantidadPersonas = $("#personas").val();
  let propinaPersona =((valorFactura*valor)/100)/cantidadPersonas;
  let facturaPersona = (valorFactura/cantidadPersonas);

  if(valorFactura === "" || valorFactura === "0"){
    $(".validacion").first().css("visibility","visible");
    $(".validacion").last().css("visibility","hidden");

    $(".input").eq(0).css("border-color","red");
    $(".input").eq(1).css("border-color","#48F0D0");
  }
  else if(cantidadPersonas === "" || cantidadPersonas === "0"){
    $(".validacion").eq(1).css("visibility","visible");
    $(".validacion").eq(0).css("visibility","hidden");

    $(".input").eq(1).css("border-color","red");
    $(".input").eq(0).css("border-color","#48F0D0");
  }
  else{
    $("#valor-tip").text("$"+propinaPersona.toFixed(2));
    $("#valor-total").text("$"+facturaPersona.toFixed(2));
    $(".validacion").eq(0).css("visibility","hidden");
    $(".validacion").eq(1).css("visibility","hidden");

    $(".input").eq(0).css("border-color","#48F0D0");
    $(".input").eq(1).css("border-color","#48F0D0");
  }
}
//Devuelve todos los inputs a su valor inicial
$("#resetear")[0].addEventListener("click",function(){
  $("#factura").val("");
  $("#personas").val("");
  $("#valor-tip").text("$0.00");
  $("#valor-total").text("$0.00");
})
