import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Mahasiswa } from 'src/app/mahasiswa';
import { Dosen } from 'src/app/dosen';
import { KETUA, PENDAMPING, ANGGOTA, TUNGGAL} from 'src/app/listDosen';
import { Tabel1 } from 'src/app/tabel1';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent  implements OnInit {
  @Input() mahasiswa: Mahasiswa;
  tabel1: Tabel1;
  tabel2: Tabel1;
  tabel3: Tabel1;
  tabel4: Tabel1;

  dosen1: Dosen;
  dosen2: Dosen;
  dosen3: Dosen;

  listKetua = KETUA;
  listPendamping = PENDAMPING;
  listAnggota = ANGGOTA;
  listTunggal = TUNGGAL;



  constructor() {

  }

  ngOnInit() {
    this.mahasiswa = new Mahasiswa();
    this.tabel1 = new Tabel1();
    this.tabel2 = new Tabel1();
    this.tabel3 = new Tabel1();
    this.tabel4 = new Tabel1();

    this.dosen1 = new Dosen();
    this.dosen2 = new Dosen();
    this.dosen3 = new Dosen();
  }




}

