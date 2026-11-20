// Todas as imagens do projeto ficam aqui. Para trocar, edite apenas as URLs.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`

export const images = {
  hero: { src: u('1544025162-d76694265947', 2200), alt: 'Corte de carne premium selado na brasa' },
  about: { src: u('1577219491135-ce391730fb2c', 1400), alt: 'Chef preparando carne na parrilla' },
  experience: { src: u('1514933651103-005eec06c04b', 2200), alt: 'Salão contemporâneo com madeira escura e iluminação quente' },
  dishes: {
    tomahawk: { src: u('1558030006-450675393462', 1400), alt: 'Tomahawk com marmoreio marcante' },
    ancho: { src: u('1600891964092-4316c288032e', 1400), alt: 'Ancho grelhado, suculento' },
    picanha: { src: u('1555939594-58d7cb561ad1', 1400), alt: 'Picanha na brasa fatiada' },
    costela: { src: u('1544148103-0773bf10d330', 1400), alt: 'Costela premium de cocção lenta' },
    burger: { src: u('1568901346375-23c9450c58cd', 1400), alt: 'Burger da casa com queijo especial' },
  },
  drinks: {
    oldFashioned: { src: u('1551024709-8f23befc6f87', 1000), alt: 'Brasa Old Fashioned em copo baixo' },
    negroni: { src: u('1514362545857-3bc16c4c7d1b', 1000), alt: 'Copper Negroni com casca de laranja' },
    boulevardier: { src: u('1470337458703-46ad1756a187', 1000), alt: 'Smoked Boulevardier defumado' },
  },
  gallery: [
    { src: u('1544025162-d76694265947', 1200), alt: 'Carne selada na brasa', span: 'md:col-span-2 md:row-span-2' },
    { src: u('1551024709-8f23befc6f87', 900), alt: 'Drink autoral no balcão', span: '' },
    { src: u('1514933651103-005eec06c04b', 900), alt: 'Ambiente do restaurante', span: 'md:row-span-2' },
    { src: u('1577219491135-ce391730fb2c', 900), alt: 'Preparação na parrilla', span: '' },
    { src: u('1414235077428-338989a2e8c0', 1200), alt: 'Prato servido à mesa', span: 'md:col-span-2' },
    { src: u('1514362545857-3bc16c4c7d1b', 900), alt: 'Coquetelaria da casa', span: '' },
  ],
}
