(() => {
  'use strict';
  function a(a, n) {
    (this.name = a), (this.age = n);
  }
  const n = ['Gobi', 'Tharani', 'Jayanthi', 'Thiyagarajan'].map(
    (n) => new a(n, 20)
  );
  console.log(n), console.log(`Thank you ${'Welcome again'}`);
})();
