function simulateNetworkRequest() {
  const delay = Math.random() * 3000 + 1000; // Random delay between 1 and 4 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ message: "Request succeeded", delay });
      } else {
        reject(new Error(`Request failed. Delay: ${delay}`));
      }
    }, delay);
  });
}
async function executeNetworkRequest() {
  try {
    const response = await simulateNetworkRequest();
    console.log(response.message);
    console.log("Delay:", response.delay);
  } catch (error) {
    console.error(error);
    if (error.message.includes("Delay")) {
      const delay = error.message.match(/Delay: (\d+)/);
      if (delay) {
        console.log("Delay:", delay[1]);
      }
    }
  }
}
executeNetworkRequest();
