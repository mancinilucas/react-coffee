import tradicional from './tradicional.svg'
import americano from './americano.svg'
import cremoso from './exp-cremoso.svg'
import expGelado from './cof-gelado.svg'
import cafeComLeite from './cafe-leite.svg'
import latte from './latte.svg'
import capuccino from './capuccino.svg'
import macchiato from './macchiato.svg'
import mochaccino from './mochaccino.svg'
import chocolateQuente from './choc-quente.svg'
import cubano from './cubano.svg'
import havaiano from './havaiano.svg'
import arabe from './arabe.svg'
import irlandes from './irlandes.svg'

export const ProductList = [
  {
    id: 1,
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    category: ['tradicional'],
    price: 9.9,
    image: tradicional,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    category: ['tradicional'],
    price: 9.9,
    image: americano,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    category: ['tradicional'],
    price: 9.9,
    image: cremoso,
  },
  {
    id: 4,
    title: 'Expresso gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    category: ['tradicional', 'gelado'],
    price: 9.9,
    image: expGelado,
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: cafeComLeite,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: mochaccino,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    category: ['tradicional', 'leite'],
    price: 9.9,
    image: chocolateQuente,
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    category: ['especial', 'gelado', 'alcoolico'],
    price: 9.9,
    image: cubano,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    category: ['especial'],
    price: 9.9,
    image: havaiano,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    category: ['especial'],
    price: 9.9,
    image: arabe,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    category: ['especial', 'alcoolico'],
    price: 9.9,
    image: irlandes,
  },
]
