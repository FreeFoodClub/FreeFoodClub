import * as XLSX from "xlsx";
import { detectSurplus } from "../../services/surplusDetector";
import { PARTNERS } from "../../config/partners";


/*
    Excel Inventory Connector

    Purpose:

    1. Read inventory spreadsheet exported from POS/ERP
    2. Match rows to partner locations
    3. Normalize inventory data
    4. Run surplus detection per location
    5. Return surplus alerts

*/


export interface ExcelInventoryRow {


    locationId: string;

    sku: string;

    productName: string;

    category: string;


    quantity: number;


    expiryDate?: string;


    averageDailySales: number;


    cost: number;

}



export interface SurplusAlert {


    locationId: string;

    locationName: string;


    items: {

        sku: string;

        product: string;

        surplusQuantity: number;

        reason: string;

    }[];

}



export class ExcelInventoryConnector {



    private filePath: string;



    constructor(filePath:string){

        this.filePath =
            filePath;

    }




    /*
        Load Excel file exported by partner

        Example spreadsheet:

        locationId | sku | product | qty | expiry | sales/day

        sobeys-waterloo | MILK001 | Milk | 40 | 2026-07-12 | 15

    */


    async loadInventoryFile()
        : Promise<ExcelInventoryRow[]> {



        const workbook =
            XLSX.readFile(
                this.filePath
            );


        const sheet =
            workbook.Sheets[
                workbook.SheetNames[0]
            ];



        const rows =
            XLSX.utils.sheet_to_json(
                sheet
            );



        return rows.map(
            (row:any)=>({


                locationId:
                    row.locationId,


                sku:
                    row.sku,


                productName:
                    row.productName,


                category:
                    row.category,


                quantity:
                    Number(row.quantity),


                expiryDate:
                    row.expiryDate,


                averageDailySales:
                    Number(
                        row.averageDailySales
                    ),


                cost:
                    Number(row.cost)

            })

        );

    }






    async processLocations()
        : Promise<SurplusAlert[]> {



        const inventory =
            await this.loadInventoryFile();



        const grouped =
            this.groupByLocation(
                inventory
            );



        const alerts:SurplusAlert[] = [];




        for(
            const locationId
            in grouped
        ){


            const partner =
                PARTNERS.find(
                    p =>
                    p.id === locationId
                );



            if(!partner)
                continue;




            const items =
                grouped[locationId];



            const surplus =
                detectSurplus(

                    items.map(item=>({

                        sku:
                            item.sku,


                        name:
                            item.productName,


                        quantity:
                            item.quantity,


                        cost:
                            item.cost,


                        expiryDate:
                            item.expiryDate
                            ?
                            new Date(
                                item.expiryDate
                            )
                            :
                            undefined

                    })),



                    items.map(item=>({


                        sku:
                            item.sku,


                        averageDailySales:
                            item.averageDailySales


                    }))

                );





            if(surplus.length > 0){


                alerts.push({


                    locationId,


                    locationName:
                        partner.brand
                        +
                        " - "
                        +
                        partner.address,



                    items:
                        surplus


                });

            }


        }



        return alerts;

    }





    private groupByLocation(

        rows:ExcelInventoryRow[]

    ){


        return rows.reduce(

            (groups,row)=>{


                if(!groups[row.locationId]){

                    groups[row.locationId] = [];

                }


                groups[row.locationId].push(
                    row
                );


                return groups;


            },

            {} as Record<
                string,
                ExcelInventoryRow[]
            >

        );

    }

}
