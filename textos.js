// =============================================================
// GREAT SPIRIT OFICIAL — ARCHIVO DE TEXTOS
// Cambia aquí los textos de la tienda sin tocar el código
// =============================================================
// COLORES DE REFERENCIA:
//   🟦 AZUL    = Configuración general de la tienda 
//   🟨 AMARILLO = Mensajes y textos visibles al cliente
//   🟩 VERDE   = Notificaciones y popups
//   🟥 ROJO    = Mensajes urgentes o promociones
// =============================================================

var GS_TEXTOS = {

  // ============================================================
  // 🟨 TICKER — franja negra animada en la parte superior
  // Agrega o quita líneas. Cada una aparece en rotación.
  // ============================================================
  ticker: [
    '🔥  1Envíos a todo Colombia',
    '✨ 2Nuevos productos cada semana',
    '💬 3Pedidos por WhatsApp',
    '🌿 4Espiritualidad · Moda · Tecnología',
    '⭐ 5Calidad garantizada ',
  ],

  // ============================================================
  // 🟨 BANNER AZUL — aparece abajo, solo una vez por cliente
  // Cambia este texto cuando tengas una promo nueva.
  // ============================================================
  bannerAzul: '🛍 Envíos a todo Colombia · Paga con Nequi, Daviplata, PSE y más · Escríbenos por WhatsApp',

  // ============================================================
  // 🟩 GLOBO DE WHATSAPP — burbuja amarilla al lado del botón
  // Aparece cada 12 segundos. Mensajes aleatorios.
  // ============================================================
  globoWhatsapp: [
    '<strong>María R.</strong> compró hace 5 minutos',
    '<strong>Carlos B.</strong> visitó la tienda hace poco',
    '<strong>Luisa P.</strong> compró hace 12 minutos',
    '3 personas viendo la tienda ahora',
    'Te respondemos en menos de 5 min',
    '<strong>Andrés G.</strong> compró hace 2 minutos',
    'Producto más vendido hoy',
    'Envíos a todo Colombia',
    '<strong>Diana M.</strong> acaba de hacer un pedido',
    '¡Escríbenos, estamos en línea!',
  ],

  // ============================================================
  // 🟩 TESTIMONIOS — popup que aparece una vez por cliente
  // Se muestra al entrar a la tienda, dura 10 segundos.
  // ============================================================
  testimonios: [
    { texto: 'Llegó súper rápido, el producto es exactamente como se ve. Muy contenta.', autor: '— Valentina M., Medellín' },
    { texto: 'Excelente atención por WhatsApp, me resolvieron todo. Lo recomiendo.', autor: '— Carlos R., Bogotá' },
    { texto: 'La calidad superó mis expectativas. Ya hice mi segundo pedido.', autor: '— Luisa P., Cali' },
    { texto: 'Muy buen precio y llegó bien empacado. Gracias Great Spirit.', autor: '— Andrés G., Barranquilla' },
    { texto: 'Todo perfecto, rápido y confiable. Volvería a comprar sin dudarlo.', autor: '— María T., Bucaramanga' },
  ],

  // ============================================================
  // 🟥 POPUP DE AVISO — mensaje especial al entrar
  // Cambia el titulo y mensaje cuando tengas una promo.
  // popupActivo: true = se muestra | false = no se muestra
  // ============================================================
  popupActivo: false,
  popupTitulo: '🔥 ¡Oferta especial hoy!',
  popupMensaje: 'Escríbenos por WhatsApp y menciona el código GS15 para obtener un 15% de descuento en tu pedido de hoy.',

  // ============================================================
  // 🟨 MENSAJE DE CIERRE DEL WIDGET COSMICO
  // Aparece cuando el cliente cierra la tarjeta del día.
  // ============================================================
  mensajeCierre: '✨ bummmVisita nuestra tienda espiritual y encuentra lo que tu alma necesita hoy',
  btnCierre: 'Ver tienda →',

};
// =============================================================
// FIN DEL ARCHIVO — no tocar lo que está debajo de esta línea
// =============================================================
