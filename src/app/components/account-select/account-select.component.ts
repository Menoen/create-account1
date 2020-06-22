import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html',
  styleUrls: ['./account-select.component.less']
})
export class AccountSelectComponent implements OnInit {
  public accountInfo:any = {
    name:"",
    tips:""
  }
  public radioList:any[] = [
    {
      "value":"joint",
      "name":"Joint/And",
      "tips":"This account will be shared between two or more individuals.",
      "checked":"0"
    },
    {
      "value":"sole",
      "name":"Sole Owner",
      "tips":"This account will be owned by one individual.",
      "checked":"0"
    }
  ]
  constructor(public router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  doChange(val) {
    this.accountInfo.tips = val;
  }
  doNext() {
    let boo = this.validate(this.accountInfo);
    if(boo) {
      //localstorage
      localStorage.setItem("account-name",this.accountInfo.name);
      localStorage.setItem("account-tips",this.accountInfo.tips);
      //route
      this.router.navigate(['/type']);
    } else {
      //show warnings
      alert('At least one account should be choosed');
    }
  }
  validate(info):boolean{
    if(undefined != info.name &&null !=info.name&&""!=info.name&&undefined != info.tips &&null !=info.tips&&""!=info.tips){
      console.log("passed");
      return true;
    }else {
      console.log(info.name);
      console.log(info.tips);
      return false;
    }
  }
  cancel() {
    localStorage.clear();
  }
}
