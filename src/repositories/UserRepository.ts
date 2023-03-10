import { EntityRepository, Repository, AbstractRepository } from 'typeorm';

import { User } from '../entities/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  // Custom Repository Functions go here.
}
