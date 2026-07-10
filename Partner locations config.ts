export interface PartnerLocation {
    id: string;
    brand: string;
    category: "grocery" | "restaurant" | "bakery" | "retail";

    address: string;
    city: string;
    province: string;
    postalCode: string;

    phone: string;

    googlePlacesId: string;

    integrations: {
        quickbooks: {
            enabled: boolean;
            companyId: string;
            inventorySync: boolean;
            purchaseOrderSync: boolean;
        };

        pos: {
            enabled: boolean;
            provider: string;
            locationId: string;
            sync: string[];
        };

        inventory: {
            enabled: boolean;
            expiryTracking: boolean;
            batchTracking: boolean;
        };
    };

    surplusRules: {
        enabled: boolean;
        expiryWarningHours: number;
        minimumSurplusQuantity: number;
    };
}


export const PARTNERS: PartnerLocation[] = [

/*
====================================================
SOBEYS
====================================================
*/


{
    id: "sobeys-columbia-waterloo",

    brand: "Sobeys",
    category: "grocery",

    address:
    "450 Columbia St W",

    city:
    "Waterloo",

    province:
    "ON",

    postalCode:
    "N2T 2W1",

    phone:
    "(519) 880-9143",

    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations: {

        quickbooks: {

            enabled:true,

            companyId:
            "sobeys-waterloo-qb",

            inventorySync:true,

            purchaseOrderSync:true
        },


        pos: {

            enabled:true,

            provider:
            "Sobeys Retail POS",

            locationId:
            "SOB-WAT-001",

            sync:[
                "sales",
                "products",
                "discounts",
                "returns"
            ]
        },


        inventory: {

            enabled:true,

            expiryTracking:true,

            batchTracking:true
        }

    },


    surplusRules: {

        enabled:true,

        expiryWarningHours:48,

        minimumSurplusQuantity:5
    }

},



{
    id:"sobeys-strasburg-kitchener",

    brand:"Sobeys",

    category:"grocery",

    address:
    "245 Strasburg Rd",

    city:
    "Kitchener",

    province:
    "ON",

    postalCode:
    "N2E 3W7",

    phone:
    "PHONE",

    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations: {

        quickbooks:{
            enabled:true,
            companyId:"sobeys-strasburg-qb",
            inventorySync:true,
            purchaseOrderSync:true
        },


        pos:{
            enabled:true,
            provider:"Sobeys Retail POS",
            locationId:"SOB-KIT-001",
            sync:[
                "sales",
                "inventory",
                "pricing"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:true,
            batchTracking:true
        }
    },


    surplusRules:{
        enabled:true,
        expiryWarningHours:48,
        minimumSurplusQuantity:10
    }

},




/*
====================================================
REAL CANADIAN SUPERSTORE
====================================================
*/


{
    id:"superstore-waterloo",

    brand:
    "Real Canadian Superstore",

    category:
    "grocery",

    address:
    "875 Erb St W",

    city:
    "Waterloo",

    province:
    "ON",

    postalCode:
    "N2J 3Z4",

    phone:
    "PHONE",


    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations:{

        quickbooks:{
            enabled:true,
            companyId:"loblaw-waterloo-qb",
            inventorySync:true,
            purchaseOrderSync:true
        },


        pos:{
            enabled:true,
            provider:"Loblaw POS",
            locationId:"RCSS-WAT-001",
            sync:[
                "sales",
                "inventory",
                "markdowns",
                "waste"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:true,
            batchTracking:true
        }

    },


    surplusRules:{
        enabled:true,
        expiryWarningHours:72,
        minimumSurplusQuantity:10
    }

},




{
    id:"superstore-kitchener",

    brand:
    "Real Canadian Superstore",

    category:
    "grocery",

    address:
    "875 Highland Rd W",

    city:
    "Kitchener",

    province:
    "ON",

    postalCode:
    "N2N 2Y2",

    phone:
    "PHONE",

    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations:{

        quickbooks:{
            enabled:true,
            companyId:"loblaw-kitchener-qb",
            inventorySync:true,
            purchaseOrderSync:true
        },


        pos:{
            enabled:true,
            provider:"Loblaw POS",
            locationId:"RCSS-KIT-001",
            sync:[
                "sales",
                "inventory",
                "expiry"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:true,
            batchTracking:true
        }

    },


    surplusRules:{
        enabled:true,
        expiryWarningHours:72,
        minimumSurplusQuantity:10
    }

},



/*
====================================================
TIM HORTONS
====================================================
*/


{
    id:"tim-hortons-university-waterloo",

    brand:
    "Tim Hortons",

    category:
    "restaurant",


    address:
    "200 University Ave W",

    city:
    "Waterloo",

    province:
    "ON",

    postalCode:
    "N2L 3G1",

    phone:
    "PHONE",


    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations:{

        quickbooks:{
            enabled:true,
            companyId:"tim-waterloo-qb",
            inventorySync:true,
            purchaseOrderSync:true
        },


        pos:{
            enabled:true,
            provider:"Tim Hortons POS",
            locationId:"TH-WAT-001",
            sync:[
                "sales",
                "baked_goods",
                "daily_waste"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:true,
            batchTracking:false
        }

    },


    surplusRules:{
        enabled:true,
        expiryWarningHours:24,
        minimumSurplusQuantity:15
    }

},




/*
====================================================
CRUMBL COOKIES
====================================================
*/


{
    id:"crumbl-waterloo",

    brand:
    "Crumbl Cookies",

    category:
    "bakery",


    address:
    "200 Northfield Dr W",

    city:
    "Waterloo",

    province:
    "ON",

    postalCode:
    "N2L 0C7",

    phone:
    "PHONE",


    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations:{

        quickbooks:{
            enabled:true,
            companyId:"crumbl-waterloo-qb",
            inventorySync:true,
            purchaseOrderSync:true
        },


        pos:{
            enabled:true,
            provider:"Crumbl POS",
            locationId:"CRUMBL-WAT-001",
            sync:[
                "cookies",
                "orders",
                "production"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:true,
            batchTracking:true
        }

    },


    surplusRules:{
        enabled:true,
        expiryWarningHours:24,
        minimumSurplusQuantity:20
    }

},



/*
====================================================
BATH & BODY WORKS
====================================================
*/


{
    id:"bath-body-works-conestoga",

    brand:
    "Bath & Body Works",

    category:
    "retail",


    address:
    "550 King St N",

    city:
    "Waterloo",

    province:
    "ON",

    postalCode:
    "N2L 5W6",

    phone:
    "PHONE",


    googlePlacesId:
    "GOOGLE_PLACE_ID",


    integrations:{

        quickbooks:{
            enabled:true,
            companyId:"bbw-waterloo-qb",
            inventorySync:true,
            purchaseOrderSync:false
        },


        pos:{
            enabled:true,
            provider:"Bath Body Works POS",
            locationId:"BBW-WAT-001",
            sync:[
                "sales",
                "inventory",
                "returns"
            ]
        },


        inventory:{
            enabled:true,
            expiryTracking:false,
            batchTracking:false
        }

    },


    surplusRules:{
        enabled:false,
        expiryWarningHours:0,
        minimumSurplusQuantity:0
    }

}

];
