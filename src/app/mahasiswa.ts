export class Mahasiswa {
  npm: string;
  nama: string;
  judul: string;
  tgl: any;
  bulanIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  tglIndo: number;

  pemTunggal: any;
  pemPendamping: any;
  pemKetua: any;
  pemAnggota: any;
  tahunAkademik: any;

  public getTgl($tgl, $bulan, $tahun){
    this.setAkademik($tahun);
    switch ($bulan) {
      case '01': {
      $bulan = this.bulanIndo[0];
      break;
    }
      case '02': {
        $bulan = this.bulanIndo[1];
        break;
      }
      case '03': {
        $bulan = this.bulanIndo[2];
        break;
      }
      case '04': {
        $bulan = this.bulanIndo[3];
        break;
      }
      case '05': {
        $bulan = this.bulanIndo[4];
        break;
      }
      case '06': {
        $bulan = this.bulanIndo[5];
        break;
      }
      case '07': {
        $bulan = this.bulanIndo[6];
        break;
      }
      case '08': {
        $bulan = this.bulanIndo[7];
        break;
      }
      case '09': {
        $bulan = this.bulanIndo[8];
        break;
      }
      case '10': {
        $bulan = this.bulanIndo[9];
        break;
      }
      case '01': {
        $bulan = this.bulanIndo[10];
        break;
      }
      case '12': {
        $bulan = this.bulanIndo[11];
        break;
      }
      default: {
        return ;
      }
    }
    this.tglIndo = $tgl.concat(' ' + $bulan.concat(' ' + $tahun));
  }

  public setDosenPembimbing($pembimbing) {
    this.pemTunggal = $pembimbing;
  }

  public setAkademik($tahun){
    const tahun1 = $tahun;
    this.tahunAkademik = tahun1 + ' / ' + ++tahun1;
  }
}

