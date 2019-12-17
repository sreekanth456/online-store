
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable,from} from 'rxjs';


@Injectable()

export class StaticDataSource{

    private producuts : Product[]=[

        new Product ( 1, " Shoes ","Category 1"," Fila runningshoes (Category 1)",2499),
        new Product ( 2, " T-shirt ","Category 1"," Petter England (Category 1)",1299),
        new Product ( 3, " Laptop ","Category 1"," Soney Laptop (Category 1)",54999),
        new Product ( 4, " Mobile Phone ","Category 1"," Apple 11 Pro (Category 1)",119999),
        new Product ( 5, " Televison ","Category 1"," One Plus one Pro (Category 1)",59999),
        new Product ( 6, " Mobile Charger ","Category 1"," Usb Type C (Category 1)",599),
        new Product ( 7, " Watch ","Category 1"," Fastrac Watch (Category 1)",2999),
        new Product ( 8, " HeadSet ","Category 1"," Soney HeadSet (Category 1)",3999),
        new Product ( 9, " Clothes ","Category 1"," Celebrity Brand (Category 1)",1199),
       


    ];

    getProducts():Observable<Product[]>{

        return from([this.producuts])

    }
}