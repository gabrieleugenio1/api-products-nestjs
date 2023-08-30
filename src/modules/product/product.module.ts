import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../../database/prisma.service';
import { CategoryService } from '../category/category.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, CategoryService],
  exports: [ProductService],
})
export class ProductModule {}
