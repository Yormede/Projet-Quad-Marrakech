import logo from "./images/logo yanis Quad.png"


const data = {
    avantages: [
        {id: 101,
        name: "",
        description :"Des balades en dromadaire offertes sur certaines prestations !"
        },
        {id: 102,
            name: "",
            description :"Une pause thé traditionnelle est incluse dans le prix de votre aventure"
        },
        {id: 103,
            name: "",
            description :"Nous offrons la possibilité d'une navette aller-retour depuis le lieu de séjour de nos clients"
        },
        {id: 104,
            name: "",
            description :"Choisissez parmi plusieurs itinéraires autour du désert d'Agafay, de la palmeraie et du lac Takerkoust."
        },
    ],
    gallerie: ["./images/gallerie"],
    activities : [
        {id: 1,
        name: "Quad",
        image: "./images/",
        prix: "199"
        },
        {id: 2,
            name: "Buggy",
            image: "./images/",
            prix: "1199"
        },
        {id: 3,
            name: "Motocross",
            image: "./images/",
            prix: "1299"
        },      
        {id: 4,
            name: "Dromadaire",
            image: "./images/",
            prix: "1"
        },
    ]
}

export function getData() {
    return data
}
