import { Role } from './role.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
