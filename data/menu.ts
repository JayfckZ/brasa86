import { images } from './images'

// Preços fictícios, apenas para o projeto demonstrativo
export const dishes = [
  { name: 'Tomahawk', price: 'R$ 189,90', description: 'Corte robusto, sabor intenso e marmoreio marcante.', image: images.dishes.tomahawk },
  { name: 'Ancho', price: 'R$ 89,90', description: 'Maciez e suculência em perfeito equilíbrio.', image: images.dishes.ancho },
  { name: 'Picanha na brasa', price: 'R$ 79,90', description: 'Um clássico preparado com o ponto certo da brasa.', image: images.dishes.picanha },
  { name: 'Costela premium', price: 'R$ 96,90', description: 'Preparação lenta, textura macia e sabor marcante.', image: images.dishes.costela },
  { name: 'Burger da casa', price: 'R$ 54,90', description: 'Blend artesanal, queijo especial e molho exclusivo.', image: images.dishes.burger },
]

export const fullMenu = [
  { group: 'Da brasa', items: [
    { name: 'Tomahawk', price: 'R$ 189,90' },
    { name: 'Ancho', price: 'R$ 89,90' },
    { name: 'Picanha na brasa', price: 'R$ 79,90' },
    { name: 'Costela premium', price: 'R$ 96,90' },
    { name: 'Fraldinha', price: 'R$ 74,90' },
    { name: 'Vazio', price: 'R$ 82,90' },
  ] },
  { group: 'Da casa', items: [
    { name: 'Burger da casa', price: 'R$ 54,90' },
    { name: 'Batata rústica', price: 'R$ 29,90' },
    { name: 'Salada da casa', price: 'R$ 32,90' },
  ] },
]

export const drinks = [
  { name: 'Brasa Old Fashioned', description: 'Bourbon, açúcar de cana tostado e bitter de laranja.', image: images.drinks.oldFashioned },
  { name: 'Copper Negroni', description: 'Gin, vermute rosso e Campari, finalizado com laranja flambada.', image: images.drinks.negroni },
  { name: 'Smoked Boulevardier', description: 'Bourbon, vermute e Campari com toque defumado.', image: images.drinks.boulevardier },
]
