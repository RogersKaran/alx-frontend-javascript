function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Positon outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array;
  int8Array[position] = value;

  return new DataView(buffer);
}

export default createInt8TypedArray;
