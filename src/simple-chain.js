const chainMaker = {
  res: [];
  getLength() {
return this.res.length
  },
  addLink(value) {
    if (!arguments.length){
      this.res.push('()')
    } else {
      this.res.push('( ${value} )');
    }
    return this
  },
  removeLink(position) {
  if (typeof positin !== 'number' || !((position ^ 0) === position) || position >= this.res.length || position < 1){
  this.res=[];
    throw new Error
  }
    this.res.splice(position-1,1);
    return this
  },
  reverseChain() {
    this.res.reverse();
    return this
  },
  finishChain() {
    let finish = this.res;
    this.res=[];
    return finish.join('~~')
    
  }
};

module.exports = chainMaker;
