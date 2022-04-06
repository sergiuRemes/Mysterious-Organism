// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
//console.log(returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand());
    
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      let mutantGene = this.dna[Math.floor(Math.random() * this.dna.length)]
  //console.log(mutantGene);
      const dnaBases = ['A', 'T', 'C', 'G'];
      let randonGene = dnaBases[Math.floor(Math.random() * 4)];
  //console.log(randonGene);
       const newGene = []
       if(mutantGene === randonGene) {
         this.mutate()
       } else {
         newGene.push(randonGene)
       };
       const index = this.dna.indexOf(mutantGene);
         if (index !== -1) {
         this.dna[index] = newGene;
       }
//console.log(newGene)
     },
     compareDNA(otherObj) {
      const similarGene = this.dna.reduce((a, b, c, d) => {
        if (d[c] === otherObj.dna[c]) {
          return a + 1;
        } else {
          return a;
        }
      }, 0);
      const commonDna = (similarGene / this.dna.length) * 100;
      const decimals = commonDna.toFixed(2);
      console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${decimals}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)     