// Define a new component called todo-item
Vue.component('cat-card', {
    // The cat-card component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called cat.
    props: ['cat'],
    template: '<div class="card mb-4 box-shadow"><div class="card-header"><h4 class="my-0 font-weight-normal">{{cat.name}}</h4></div><div class="card-body"><p>{{cat.description}}</p><button  v-if="!cat.sponsored" type="button" class="btn btn-lg btn-block btn-outline-primary">Apadrinhar</button><span v-if="cat.sponsored">Apadrinhado por: <b>{{cat.sponsor}}</b></span></div></div></div>'
});

var cats = [
    {
        name: 'Pipoca',
        sponsored: true,
        sponsor: 'Sofia Simões',
        description: 'A Pipoca é uma gatinha muito doce'
    },
    { 
        name: 'Faísca', 
        sponsored: false, 
        description: 'O Faísca é um gatinho muito brincalhão' 
    },
    { 
        name: 'Pantufa', 
        sponsored: false, 
        description: 'A Pantufa é uma gatinha muito dorminhoca' 
    }
];

Object.freeze(cats);

var vm = new Vue({
    el: '#vueapp',
    data: {
        cats: cats,
        tab: 'main'
    }
});

