import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
  providers: [RoleService],
  imports: [TypeOrmModule.forFeature([RoleRepository]), SharedModule],
  exports: [RoleService],
})
export class RoleModule {}
