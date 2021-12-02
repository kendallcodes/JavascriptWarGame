var expect = chai.expect; 


describe('MyFunctions', function() {
    describe('#createDeck', function() {
        it('should create a deck of 52 cards', function() {
            let testerDeck = createDeck();
            expect(testerDeck.cards.length).to.equal(52);
        }); 
     
    });
});