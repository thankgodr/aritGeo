const assert = require('assert');
const app = require('../aritGeo.js');

describe("aritGeo", ()=>{
    describe("Array has a string", ()=>{
        it("should return -1", ()=>{
            assert.equal(app.aritGeo([2,4,"helo", 5]), -1);
        });
    })
    describe("Not ap or gp", ()=>{
        it("should return -1", ()=>{
            assert.equal(app.aritGeo([1,3,9,17]), -1);
        });
    })

    describe("array is empty", ()=>{
        it("should return 0", ()=>{
            assert.equal(app.aritGeo([]), 0);
        });
    })

    describe("Check Ap", ()=>{
    	it("should return Arithmetic", ()=>{
    		assert.equal(app.aritGeo([1,2,3,4]), "Arithmetic")
    	});
    })

    describe("Check Ap", ()=>{
    	it("should return Arithmetic", ()=>{
    		assert.equal(app.aritGeo([2,4,6,8]), "Arithmetic")
    	});
    })

    describe("Faild Progresion", ()=>{
    	it("should return -1", ()=>{
    		assert.equal(app.aritGeo([2,4,6,50]), -1)
    	});
    })

    describe("Check Gp", ()=>{
    	it("should return Geometric", ()=>{
    		assert.equal(app.aritGeo([2, 6, 18, 54]), "Geometric")
    	});
    })

    describe("Check Gp", ()=>{
    	it("should return Geometric", ()=>{
    		assert.equal(app.aritGeo([1, 3, 9, 27, 81]), "Geometric")
    	});
    })

    describe("Faild Gp", ()=>{
    	it("should return -1", ()=>{
    		assert.equal(app.aritGeo([1, 3, 9, 27, 76]), -1)
    	});
    })

    describe("All string array", ()=>{
    	it("should return -1", ()=>{
    		assert.equal(app.aritGeo(["1, 3, 9, 27, 81","helo"]), -1)
    	});
    })




}
)