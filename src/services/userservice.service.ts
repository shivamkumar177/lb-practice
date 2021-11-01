import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {UserRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class UserserviceService {
  constructor(@repository(UserRepository) public userRepo: UserRepository) {}

  /*
   * Add service methods here
   */
  getUserDetails(id: number): Promise<string> {
    return this.userRepo.findById(id).then(data => {
      return data.name;
    });
  }
}
