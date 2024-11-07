// Data Awal
let huruf = ['a','b','c','d','e'];

// Huruf yang akan dihapus
let hurufDiHapus = 'a';

// mencari index dari huruf yang akan dihapus 
let hurufIndex = huruf.findIndex((h) => h !== hurufDiHapus);

// Huruf yang dihapus berdasarkan Index
huruf.splice(hurufIndex, 1);

console.log(`Huruf yang dihapus adalah ${hurufDiHapus}, maka menjadi: ${huruf}`);     