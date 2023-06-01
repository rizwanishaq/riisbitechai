import fs from "fs";
export const createFile = (id) => {
  const name = `${id}.wav`;
  return fs.createWriteStream(name);
};

export const concat = (buffer1, buffer2) => {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);

  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);

  return tmp.buffer;
};

export const withWaveHeader = (data, numberOfChannels, sampleRate) => {
  // http://soundfile.sapp.org/doc/WaveFormat/
  const header = new ArrayBuffer(44);
  const SubChunk2Size = data.byteLength;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;

  const dataView = new DataView(header);

  dataView.setUint8(0, "R".charCodeAt(0));
  dataView.setUint8(1, "I".charCodeAt(0));
  dataView.setUint8(2, "F".charCodeAt(0));
  dataView.setUint8(3, "F".charCodeAt(0));

  dataView.setUint32(4, SubChunk2Size + 36, true);

  dataView.setUint8(8, "W".charCodeAt(0));
  dataView.setUint8(9, "A".charCodeAt(0));
  dataView.setUint8(10, "V".charCodeAt(0));
  dataView.setUint8(11, "E".charCodeAt(0));
  dataView.setUint8(12, "f".charCodeAt(0));
  dataView.setUint8(13, "m".charCodeAt(0));
  dataView.setUint8(14, "t".charCodeAt(0));
  dataView.setUint8(15, " ".charCodeAt(0));

  dataView.setUint32(16, 16, true); // 16 for PCM
  dataView.setUint16(20, 1, true); // 1 for PCM
  dataView.setUint16(22, numberOfChannels, true);
  dataView.setUint32(24, sampleRate, true);
  dataView.setUint32(28, sampleRate * numberOfChannels * bytesPerSample, true);
  dataView.setUint16(32, numberOfChannels * bytesPerSample, true);
  dataView.setUint16(34, bitsPerSample, true);

  dataView.setUint8(36, "d".charCodeAt(0));
  dataView.setUint8(37, "a".charCodeAt(0));
  dataView.setUint8(38, "t".charCodeAt(0));
  dataView.setUint8(39, "a".charCodeAt(0));
  dataView.setUint32(40, SubChunk2Size, true);

  return concat(header, data);
};

export default createFile;
