import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import  {RestUrlService} from '../../rest-url/rest-url.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showForm1:any=true;
  showForm2:any=false;  
  showForm3:any=false;
  email:any='';
  mobile:any='';
  password:any='';
  name:any='';
  card_number:any='';
  expiry_date:any='';
  cvv:any='';
  model:any={};
  showProcessing:boolean=false;
 

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
  }

  /*firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;*/
  constructor(private restUrlService:RestUrlService,private http:Http,private route: ActivatedRoute, private router: Router ) {}

  
  /*constructor(private _formBuilder: FormBuilder) { }*/

  ngOnInit(): void {
    /*this.firstFormGroup = this._formBuilder.group({
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      createPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
    });
    this.thirdFormGroup = this._formBuilder.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });*/
  }
  showFirstForm()
  {
    this.showForm1=true;
    this.showForm2=false;
    this.showForm3=false;
   
  }
  showSecondForm(){
    this.showForm1=false;
    this.showForm3=false;
    this.showForm2=true;
  }

  showThirdForm(){
    this.showForm1=false;
    this.showForm2=false;
    this.showForm3=true;
  }

  checkForm(){
    var result=false;
    if(this.email != null && this.mobile != null && this.password != null){
      result=true;
    }
    return result;
  }

  insertId:any='';
  emailExist:boolean=false;
  register(){
    this.emailExist=false;
    this.showProcessing=true;
    const joParams = {
    "email_id":this.model.email,
    "mobile_no":this.model.mobile,
    "password":this.model.password
    };
    this.http
        .post(
          this.restUrlService.getRestUrl().register.url, joParams).subscribe(
            response => {
              var result=response.json();
              this.showProcessing=false;
              this.insertId=result.insertId;
              if(this.insertId == 'already_exist'){
                this.emailExist=true;
              }else{                
                this.showForm1=false;
                this.showForm3=false;
                this.showForm2=true;
              }
            });
  }
  

  card(){
    this.showProcessing=true;   
    const joParams = {
    "name":this.model.name,
    "card_number":this.model.card_number,    
    "cvv":this.model.cvv
    };
    this.http
        .post(
          this.restUrlService.getRestUrl().card.url, joParams).subscribe(
            response => {
              this.showProcessing=false;
              this.model={};
              this.router.navigate(['index']);
            });
  }

  btnSelected:any='';  
  checkButton(btn){
   this.btnSelected=btn;
  }

    plan(){
      var plan='';
      if(this.btnSelected=='1'){
       plan='Yearly Plan';
      }else if(this.btnSelected=='2'){
        plan='Monthly Plan';
      }
      this.showProcessing=true;
      const joParams = {
      "plan":plan,
      "id":this.insertId
      };
      this.http
          .post(
            this.restUrlService.getRestUrl().plan.url, joParams).subscribe(
              response => {
                this.showProcessing=false;
                this.model={};
                this.showForm1=false;
                this.showForm2=false;
                this.showForm3=true;
              });
    }
  
    navigateTopage(page){
      this.router.navigate([page]);
    }
    
}
