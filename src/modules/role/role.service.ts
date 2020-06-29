import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}

  async getByName(name: string): Promise<Role> {
    if (!name) {
      throw new BadRequestException('role name must be sent');
    }

    return await this._roleRepository.findOne({
      where: { name },
    });
  }
}
