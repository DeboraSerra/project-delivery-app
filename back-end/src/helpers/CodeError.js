module.exports = class CodeError extends Error {
  _code;
  constructor(message, code) {
    super(message);
    this._code = code;
  }

  get code() { return this._code; }
}
