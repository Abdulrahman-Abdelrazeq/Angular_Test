import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for isAuthenticated', () => {
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should return true for login', () => {
    expect(service.login()).toBeTrue();
  });

  it('should return true for logout', () => {
    expect(service.logout()).toBeTrue();
  });

  it('should return true for register', () => {
    expect(service.register()).toBeTrue();
  });

  it('should return true for hasRole', () => {
    expect(service.hasRole('admin')).toBeTrue();
  });
});