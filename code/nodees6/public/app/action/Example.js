class Example {
    constructor() {
        this.init();
    }
    init() {
        let map = new Map();
        map.set('id', '3017');
        map.set('fname', 'Kraipob');
        map.set('lname', 'Saengkhunthod');
        map.set('age', '25');
        map.set('address', '176 M.17 Prathai');
        map.set('phone', '0989234011');

        let enties = [...map.entries()];
        let len = (enties.length / 2) - 1;
        let array2 = [ 
            ['a', '1'],
            ['b', '2'],
            ['c', '3'],
         ];
        let _map = new Map( array2 );
        console.log( [..._map.entries()][0] );
    }
}