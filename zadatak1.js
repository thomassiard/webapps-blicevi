let objekt1 = {
    a: 1,
    b: "A"
};

let objekt2 = {
    a: 1,
    b: "C",
    c: 2,
    d: "A"
};

let objekt3 = {
    a: 2,
    b: "C"
};

function objekti(o1,o2,o3){
    let kljuc1 = JSON.stringify(Object.keys(o1));
    let kljuc2 = JSON.stringify(Object.keys(o2));
    let kljuc3 = JSON.stringify(Object.keys(o3))
    console.log(kljuc1 == kljuc2 == kljuc3);
}

objekti(objekt1, objekt2, objekt3);