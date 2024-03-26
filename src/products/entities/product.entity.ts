import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity('products')

export class Product {
    @PrimaryGeneratedColumn()
    id:number;  

    @Column({type:'varchar', length:255})
    name:string;

    @Column('int')
    price:number;

    @OneToMany((type) => Supplier, supplier => supplier.id)
    supplier_id:number;
}
