import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-account-type-select',
  templateUrl: './account-type-select.component.html',
  styleUrls: ['./account-type-select.component.less']
})
export class AccountTypeSelectComponent implements OnInit {
  public radioList:any[] = [
    {
      "value":"sub",
      "name":"Sub Account",
      "tips":"This account will be shared between two or more individuals."
    },
    {
      "value":"saving",
      "name":"Saving Account",
      "tips":"This account will be owned by one individual."
    },
    {
      "value":"super",
      "name":"Super Saving Account",
      "tips":"This account will be owned by one individual."
    }
  ];
  public accountInfo:any = {
    name:localStorage.getItem("account-name"),
    tips:localStorage.getItem("account-tips"),
    type:"",
    currency:"",
    currencyList: ['GBP','CHF','USD']
  }
  constructor(public router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('account-type');
    localStorage.removeItem('account-currency');
  }
  changeType(val) {
    switch (val) {
      case 'sub':
        this.accountInfo.currencyList = ['EUR','CHF','CNY'];
        break;
      case 'saving':
        this.accountInfo.currencyList = ['GBP','CHF','USD'];
        break;
      case 'super':
        this.accountInfo.currencyList = ['GBP','CHF','USD','PLN','EUR'];
        break;
      default:
        break;
    }
  }
  doNext() {
    let boo = this.validate(this.accountInfo);
    if(boo) {
      //localstorage
      localStorage.setItem("account-type",this.accountInfo.type);
      localStorage.setItem("account-currency",this.accountInfo.currency);
      //route
      this.router.navigate(['/confirm']);
    } else {
      //show warnings
      alert('At least one account should be choosed');
    }
  }
  validate(info):boolean{
    if(undefined != info.type &&null !=info.type&&""!=info.type&&undefined != info.currency &&null !=info.currency&&""!=info.currency){
      console.log("passed");
      return true;
    }else {
      console.log(info.type);
      console.log(info.currency);
      return false;
    }
  }
  cancel() {
    localStorage.clear();
    //route
    this.router.navigate(['/home']);
  }
}
