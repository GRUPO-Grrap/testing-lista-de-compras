import http from "k6/http";
import { check, sleep } from "k6";

import { uuidv4 } from "https://jslib.k6.io/k6-utils/1.4.0/index.js";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "load.test.html": htmlReport(data),
    };
}

export const options = {
    stages: [
        { duration: "5m", target: 125 },
        { duration: "5m", target: 125 },
        { duration: "5m", target: 0 },
    ],
    thresholds: {
        http_req_duration: ["p(95)<200"],
        http_req_failed: ["rate<0.01"],
    },
};

export default () => {
    const url = "http://localhost:9000/";

    const headers = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.get(url, headers);

    check(res, {
        "status code === 200": (res) => res.status === 200,
    });

    sleep(1);
};
