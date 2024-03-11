const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count++;
  weakMap.set(endpoint, count);

  if (count >= 0) {
    throw new Error("Endpoint load is high");
  }
}

export default queryAPI;

