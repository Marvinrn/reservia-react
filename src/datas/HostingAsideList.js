import cannebiere from '../assets/hebergements/AubergelaCannebière.jpg'
import duPort from '../assets/hebergements/Hôtelduport.jpg'
import lesMouettes from '../assets/hebergements/HôtelLesmouettes.jpg'
import deLaMer from '../assets/hebergements/Hôteldelamer.jpg'
import lePanier from '../assets/hebergements/AubergeLePanier.jpg'
import chezAmina from '../assets/hebergements/HôtelchezAmina.jpg'
import soleilDuMatin from '../assets/hebergements/HôtelLesoleildumatin.jpg'
import coeurDeleau from '../assets/hebergements/Aucoeurdeleau.jpg'
import bleuBlanc from '../assets/hebergements/HôtelToutbleuetBlanc.jpg'


export const homeHostingList = [
    {
        name: ' Auberge la Cannebiere',
        id: '1epk',
        category: 'économique',
        gradeUp: 4,
        gradeDown: 1,
        cover: cannebiere,
        price: 25
    },

    {
        name: 'Hôtel du port ' ,
        id: '2jryt',
        category: 'familial',
        gradeUp: 5,
        gradeDown: 0,
        cover: duPort,
        price:52
    },

    {
        name: 'Hôtel les mouettes' ,
        id: '3bre',
        category: 'romantique',
        gradeUp: 4,
        gradeDown: 1,
        cover: lesMouettes,
        price:76
    },

    {
        name: 'Hôtel de la mer',
        id: '4fzg',
        category: 'animaux autorisés',
        gradeUp: 3,
        gradeDown: 2,
        cover: deLaMer,
        price:46
    },

    {
        name: 'Auberge le panier',
        id: '5ht',
        category: 'économique',
        gradeUp: 4,
        gradeDown: 1,
        cover: lePanier,
        price:23
    },

    {
        name: 'Hôtel chez Amina',
        id: '6gr',
        category: 'familial',
        gradeUp: 5,
        gradeDown: 0,
        cover: chezAmina,
        price:96
    },

]

export const asideList = [
    {
        name: 'Hôtel Le soleil du matin',
        id: '6grt',
        category: 'romantique',
        gradeUp: 5,
        gradeDown: 0,
        cover: soleilDuMatin,
        price:128
    },
    {
        name: "Au cœur de l'eau chambres d'hôtes",
        id: '7mse',
        category: 'romantique',
        gradeUp: 4,
        gradeDown: 1,
        cover: coeurDeleau,
        price: 71
    },
    
    {
        name: 'Hôtel Tout bleu et Blanc',
        id: '8vss',
        category: 'familial',
        gradeUp: 4,
        gradeDown: 1,
        cover: bleuBlanc,
        price:68
    }
]

