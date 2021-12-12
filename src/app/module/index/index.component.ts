import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import  {RestUrlService} from '../../rest-url/rest-url.service';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  showOtp:any=false;
  modalRef: BsModalRef;
  userLoggedIn:boolean;
  email:any='';
  model:any={};
  showProcessing:boolean=false;
  constructor(private restUrlService:RestUrlService,private http:Http,private modalService: BsModalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.model.otp='8585';
    localStorage.removeItem('userLoggedIn');
  }

  openModal(template: TemplateRef<any>) {
    this.showOtp=false;
    this.modalRef = this.modalService.show(template);
  }
otpFailed:boolean=false;
  navigateTopageLogin(page){
    this.otpFailed=false;
    if(this.model.otp == '8585'){
    this.userLoggedIn=true;
    localStorage.setItem('userLoggedIn', 'true');
    this.close();
    this.router.navigate([page]);
    }else{
    this.otpFailed=true;
    }
  }

  openTemplateOtp(){
    this.showOtp=true;
  }

  close(){
    this.modalRef.hide();
  }
  emailNotExist:boolean=false;
  checkEmail(){   
    this.emailNotExist=false;
    this.showProcessing=true;
    const joParams = {
    "email_id":this.model.email
    };
    this.http
        .post(
          this.restUrlService.getRestUrl().checkEmailExist.url, joParams).subscribe(
            response => {
              this.showProcessing=false;
              var result=response.json();
              console.log("emailExistRESULT:::",result);
              if(result.length > 0){
                  this.showOtp=true;      
              }else{
                this.emailNotExist=true;
              }

              setTimeout (() => {
                this.emailNotExist=false;
              }, 2500);
            });
  }

  logout(){
    this.userLoggedIn=false;
    localStorage.removeItem('userLoggedIn');
  }
  navigateTopage(page){
    this.router.navigate([page]);
  }
}
