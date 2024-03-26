import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: ""})
    name:string;

    @OneToMany((type) => Product, product => product.supplier_id)
    products: Product[];
    
}
