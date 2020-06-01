import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { User, UserService } from '../../core';

=======
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor() {}

<<<<<<< HEAD
  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
=======
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
}
