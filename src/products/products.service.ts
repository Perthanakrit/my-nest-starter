import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}


  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() : Promise<Product[]> {
    return  await this.productRepository.find();
  }

  async findOne(id: number) : Promise<Product> {
    return await this.productRepository.findOne({
      where: {id}
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
