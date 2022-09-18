const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
async function promiseOutput(emosi) {
  const theater1 = await promiseTheaterIXX();
  const theater2 = await promiseTheaterVGC();
  const gabung = theater1.concat(theater2);
  return new Promise((resolve) => {
    if (emosi === "marah") {
      const marah = gabung.filter((item) => item.hasil === "marah").length;
      resolve(marah);
    } else if (emosi === "tidak marah") {
      const tidakMarah = gabung.filter((item) => item.hasil === "tidak marah").length;
      resolve(tidakMarah);
    }
  });
};
module.exports = {
  promiseOutput,
};