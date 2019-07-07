var vm = new Vue({
    el: '#app',
    data: {
      a: 1,
      b: 1,
      operator: '+'
    },
    computed: {
      c: function () {
        switch (this.operator) {
          case '+':
          return this.a + this.b
          case '-':
          return this.a - this.b
          case '*':
          return this.a * this.b
          case '/':
          return this.a / this.b
        }
      }
    },
  })