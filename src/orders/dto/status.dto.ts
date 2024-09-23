import { IsEnum, IsOptional, IsUUID } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum/order.enum";
import { PartialType } from "@nestjs/mapped-types";
import { CreateOrderDto } from "./create-order.dto";

export class StatusDto {


    @IsOptional()
    @IsEnum( OrderStatusList, {
      message: `Valid status are ${ OrderStatusList }`
    })
    status: OrderStatus;
  
  }



  export class UpdateOrderDto extends PartialType(CreateOrderDto) 
  {
    @IsUUID(4)
    id: string;
  }