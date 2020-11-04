import Jean from "../../../assets/img/male/jean.jpg"
import Sque from "../../../assets/img/male/squelette.jpg"
import Afro from "../../../assets/img/male/afro.jpg"
import Watch from "../../../assets/img/accessories/casio.jpg"
import Cap from "../../../assets/img/accessories/cap.jpg"
import Bag from "../../../assets/img/accessories/bag.jpg"
import Short from "../../../assets/img/female/short.jpg"
import Fsque from "../../../assets/img/female/squelette.jpg"
import Leg from "../../../assets/img/female/leggin.jpg"

const db = [
    {
        name: "T-shirt motif",
        brand: "Kityo",
        gender: "male",
        categrorie: "tshirt",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 26.90,
        image: Sque 
    },
    {
        name: "Veste tenue de soirée violette ",
        brand: "Roquettes",
        gender: "male",
        categrorie: "veste",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 49.90, 
        image: Afro
    },
    {
        name: "Veste en jean oversier",
        brand: "Kityo",
        gender: "male",
        categrorie: "veste",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 69.90,
        image: Jean 
    },
    {
        name: "T-shirt motifs",
        brand: "Kityo",
        gender: "female",
        categrorie: "tshirt",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 20.90,
        image: Fsque 
    },
    {
        name: "Leggin sportif",
        brand: "Sportner",
        gender: "female",
        categrorie: "sportswear",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 19.90, 
        image: Leg
    },
    {
        name: "Short en jean dechiré",
        brand: "Kityo",
        gender: "female",
        categrorie: "short",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 28.90, 
        image: Short
    },
    {
        name: "Sac tendance urbain",
        brand: "Itnel",
        gender: "mixte",
        categrorie: "accessories",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 59.90, 
        image: Bag
    },
    {
        name: "Casquette Ogbenie Farabel Noir",
        brand: "LDC",
        gender: "mixte",
        categrorie: "accessories",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 29.90, 
        image: Cap
    },
    {
        name: "Montre noir electronique futuriste",
        brand: "Casio",
        gender: "mixte",
        categrorie: "accessories",
        sizes: {
            s: 1,
            m: 4,
            l: 2,
            xl: 6
        },
        price: 49.90,
        image: Watch 
    },
]
export default db