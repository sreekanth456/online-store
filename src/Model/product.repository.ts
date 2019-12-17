
import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';


@Injectable()

export class ProductRepository{

    private products: Product[] = [];
    private categories: string[] = [];

    constructor (private datasource: StaticDataSource){

        datasource.getProducts().subscribe( data =>{

            this.products = data;
            this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c)==index).sort();
        });

    }

    getProducts(category:string =null) {

        return this.products.filter(p=>category==null || category==p.category);

    }

    getProduct(id:number) {

        return this.products.find(p=> p.id == id);
    }

    getCategories() {

        return this.categories;

    }


}

