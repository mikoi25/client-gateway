import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NastsModule } from 'src/transports/nasts.module';

@Module({
  controllers: [ProductsController],
  imports: [
    NastsModule
  ],
})
export class ProductsModule { }
