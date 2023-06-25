import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.page.html',
  styleUrls: ['./proposal.page.scss'],
})
export class ProposalPage implements OnInit {
  id:any
  proposal:any 
  constructor(
    private activated_route:ActivatedRoute,
    private data_service:DataService
  ) { }

  ngOnInit() {
    this.id = this.activated_route.snapshot.paramMap.get('id')
  }

get_proposal(){
  this.data_service.get_one_proposal(this.id).subscribe(res=>{
    console.log(res);
    
  })
}


}
