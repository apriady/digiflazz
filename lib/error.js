class InvalidSignature extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidIP extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class TransactionError extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InsufficientBalance extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidParams extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class Conflict extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class CustomerBlocked extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class CustomerNotFound extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ProductNotFound extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ProductUnavailable extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BillUnavailable extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

class SellerUnavailable extends Error {
  constructor(message, data = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = '41';
    if(data) this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

const parseError = (err) => {
  const rc = err.error.data.rc;
  const { error } = err;
  if(rc === '01' || rc === '61' || rc === '64' || rc === '99') throw new Error(error.data.message);
  if(rc === '02' || rc === '03' || rc === '46' || rc === '47' || rc === '50' || rc === '63') throw new TransactionError(error.data.message, error.data);
  if(rc === '40' || rc === '42' || rc === '43' || rc === '52') throw new InvalidParams(error.data.message, error.data);
  if(rc === '41') throw new InvalidSignature(error.data.message, error.data);
  if(rc === '44') throw new InsufficientBalance(error.data.message, error.data);
  if(rc === '45') throw new InvalidIP(error.data.message, error.data);
  if(rc === '49') throw new Conflict(error.data.message, error.data);
  if(rc === '51') throw new CustomerBlocked(error.data.message, error.data);
  if(rc === '53') throw new ProductNotFound(error.data.message, error.data);
  if(rc === '54') throw new CustomerNotFound(error.data.message, error.data);
  if(rc === '55' || rc === '56') throw new ProductUnavailable(error.data.message, error.data);
  if(rc === '60') throw new BillUnavailable(error.data.message, error.data);
  if(rc === '62') throw new SellerUnavailable(error.data.message, error.data);
};

module.exports = parseError;