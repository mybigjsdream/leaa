import { ArgsType } from '@nestjs/graphql';

import { ItemsArgs } from '@leaa/common/src/dtos/_common';

@ArgsType()
export class AddressesArgs extends ItemsArgs {}
