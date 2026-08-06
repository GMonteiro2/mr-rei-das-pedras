// =============================================
// CONFIGURAÇÃO DO TAILWIND — Mr Rei das Pedras
// Registra a paleta de cores e as fontes da marca como "atalhos"
// Sempre que quiser usar, no HTML: bg-marmore-preto, text-marmore-bronze etc.
// =============================================
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'marmore-preto': '#0B0B0A',       // preto matte de fundo
        'marmore-nero': '#161513',        // nero marquina (cards)
        'marmore-off': '#F1EEE7',         // off-white travertino (texto claro)
        'marmore-cinza': '#3A3937',       // cinza granito (bordas/textos secundários)
        'marmore-bronze': '#D4A017',      // dourado forte (tom da logo do leão)
        'marmore-bronze-claro': '#E8BE4D' // variação clara do dourado para hover 
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],  // fontes de título
        'sans': ['"Plus Jakarta Sans"', 'sans-serif']  // fonte de corpo/leitura
      },
      letterSpacing: {
        'wider2': '0.15em'
      }
    }
  }
}