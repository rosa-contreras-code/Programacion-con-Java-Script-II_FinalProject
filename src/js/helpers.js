import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function getJSON(URL) {
    try {
        const fetchPro = fetch(URL);
        const resp = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await resp.json();
        if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
        return data;
    } catch (error) {
        throw new Error(`Error: (${error.message})`);
    }
}