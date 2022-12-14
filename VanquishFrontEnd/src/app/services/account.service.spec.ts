import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

imports: [HttpClientModule]

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    }).compileComponents();
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
