import { IsOptional } from 'class-validator';
import { Field, InputType, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdatePromoInput {
  @IsOptional()
  @Field(() => String, { nullable: true })
  type?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  quantity?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  redeemed_quantity?: number;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  amount?: number;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  over_amount?: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  available_product_ids?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  unavailable_product_ids?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  start_time?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  expire_time?: Date;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  status?: number;
}
