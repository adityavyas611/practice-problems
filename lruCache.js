const LRUCache = (capacity) => {
  this.size = capacity;
  this.map = new Map();
};

LRUCache.protoype.get = (key) => {
  if(!this.map.has(key)){
    return -1;
  }
  const value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

LRUCache.prototype.put = (key, value) => {
  if(this.map.has(key)){
    this.map.delete(key);
  }
  
  if(this.map.size === this.size){
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value);
}

const newobj = new LRUCache(capacity);
let param1 = newobj.get(key);
newobj.put(key, value);
