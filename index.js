const crypto = require('crypto');
const rp = require('request-promise-native');
const parseError = require('./lib/error');

class Digiflazz {
  constructor(username, key) {
    this._user = username;
    this._key = key;
    this._endpoint = 'https://api.digiflazz.com/v1';
  }

  cekSaldo() {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/cek-saldo`,
      body: {
        cmd: 'deposit',
        username: this._user,
        sign: crypto.createHash('md5').update(`${this._user}${this._key}depo`).digest('hex')
      },
      json: true
    };

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        throw parseError(err);
      });
  }

  daftarHarga() {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/price-list`,
      body: {
        username: this._user,
        sign: crypto.createHash('md5').update(`${this._user}${this._key}pricelist`).digest('hex')
      },
      json: true
    };

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        throw parseError(err);
      });
  }

  /**
 * @param {number} amount - Nominal yang akan dideposit
 * @param {string} bank - Nama Bank (BCA / MANDIRI / BRI)
 * @param {string} name - Nama pemilik rekening yang akan digunakan untuk transfer
 */
  deposit(amount, bank, name) {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/deposit`,
      body: {
        username: this._user,
        amount,
        Bank: bank,
        owner_name: name,
        sign: crypto.createHash('md5').update(`${this._user}${this._key}deposit`).digest('hex')
      },
      json: true
    };

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        throw parseError(err);
      });
  }

  /**
 * @param {string} sku - Kode produk anda
 * @param {string} customer - Nomor pelanggan yang akan ditopup
 * @param {string} refID - Ref ID unik Anda
 * @param {string} cmd - Jenis transaksi pascabayar (CEK, BAYAR)
 * @param {string} msg - Pesan tambahan
 */
  transaksi(sku, customer, refID, cmd = null, msg = null) {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/transaction`,
      body: {
        username: this._user,
        buyer_sku_code: sku,
        customer_no: customer,
        ref_id: refID,
        msg,
        sign: crypto.createHash('md5').update(`${this._user}${this._key}${refID}`).digest('hex')
      },
      json: true
    };

    if(cmd === 'CEK') options.body.commands = 'inq-pasca';
    if(cmd === 'BAYAR') options.body.commands = 'pay-pasca';
    if(cmd === 'STATUS') options.body.commands = 'status-pasca';

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        throw parseError(err);
      });
  }


}

module.exports = Digiflazz;