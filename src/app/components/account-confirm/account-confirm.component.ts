import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-account-confirm',
  templateUrl: './account-confirm.component.html',
  styleUrls: ['./account-confirm.component.less']
})
export class AccountConfirmComponent implements OnInit {
  public accountInfo:any = {
    currency:localStorage.getItem("account-currency"),
    type:localStorage.getItem("account-type")
  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  doSubmit() {
    let boo = this.validate(this.accountInfo);
    if (boo) {
      console.log(this.accountInfo);
      //do submit.
    } else {
      // show warnings
    }
  }
  validate(info):boolean{
    if(undefined != info.currency &&null !=info.currency&&""!=info.currency&&undefined != info.type &&null !=info.type&&""!=info.type){
      return true;
    }else {
      return false;
    }
  }
  cancel() {
    localStorage.clear();
    //route
    this.router.navigate(['/home']);
  }
}
