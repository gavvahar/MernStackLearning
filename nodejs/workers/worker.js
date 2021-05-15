const { workerData, parentPort } = require("worker_threads");
let count = 0;
let n = 5000000000;

for (let i = 0; i <= n; i++) {
  count += i;
}

console.log("Worker got message " + workerData);

parentPort.postMessage({ fileName: workerData, count, status: "Done" });
