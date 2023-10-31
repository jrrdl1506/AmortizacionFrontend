import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public URL = "http://localhost:4000/api/amortizadora";
  constructor() { }

}
