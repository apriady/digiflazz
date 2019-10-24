## <center>Un-Official digiflazz client library for NodeJS</center>

### Instalasi

`npm install digiflazz` atau `yarn add digiflazz`

### Dokumentasi
```js
const Digiflazz = require('digiflazz');
const digiflazz = new Digiflazz('username', 'apikey');
```

#### Buyer Area
##### Cek Saldo
```js
let saldo = await digiflazz.cekSaldo();
```

##### Daftar Harga
```js
let harga = await digiflazz.daftarHarga();
```

##### Tiket Deposit
```js
let deposit = await digiflazz.deposit(nominal,'BANK','Nama Pemilik Rekening');
```

##### Topup & Status Topup
```js
let deposit = await digiflazz.transaksi('sku', 'tujuan', 'ref_id');
```

##### Inquiry Pascabayar
```js
let deposit = await digiflazz.transaksi('sku', 'tujuan', 'ref_id', 'CEK');
```

##### Bayar Pascabayar
```js
let deposit = await digiflazz.transaksi('sku', 'tujuan', 'ref_id', 'BAYAR');
```

##### Status Pascabayar
```js
let deposit = await digiflazz.transaksi('sku', 'tujuan', 'ref_id', 'STATUS');
```

##### Webhook (Coming Soon)


#### Seller Area (Coming Soon)



### License

[MIT](https://github.com/apriady/nodejs-bca-scraper/blob/master/LICENSE)

### Author

[Achmad Apriady](mailto:achmad.apriady@gmail.com)