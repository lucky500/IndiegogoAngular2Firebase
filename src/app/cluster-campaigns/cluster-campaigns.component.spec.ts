import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterCampaignsComponent } from './cluster-campaigns.component';

describe('ClusterCampaignsComponent', () => {
  let component: ClusterCampaignsComponent;
  let fixture: ComponentFixture<ClusterCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
