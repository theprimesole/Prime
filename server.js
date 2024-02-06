import express from {
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.18.2",
  "author": "TJ Holowaychuk <tj@vision-media.ca>",
  "contributors": [
    "Aaron Heckmann <aaron.heckmann+github@gmail.com>",
    "Ciaran Jessup <ciaranj@gmail.com>",
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Guillermo Rauch <rauchg@gmail.com>",
    "Jonathan Ong <me@jongleberry.com>",
    "Roman Shtylman <shtylman+expressjs@gmail.com>",
    "Young Jae Sim <hanul@hanul.me>"
  ],
  "license": "MIT",
  "repository": "expressjs/express",
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "http",
    "rest",
    "restful",
    "router",
    "app",
    "api"
  ],
  "dependencies": {
    "accepts": "~1.3.8",
    "array-flatten": "1.1.1",
    "body-parser": "1.20.1",
    "content-disposition": "0.5.4",
    "content-type": "~1.0.4",
    "cookie": "0.5.0",
    "cookie-signature": "1.0.6",
    "debug": "2.6.9",
    "depd": "2.0.0",
    "encodeurl": "~1.0.2",
    "escape-html": "~1.0.3",
    "etag": "~1.8.1",
    "finalhandler": "1.2.0",
    "fresh": "0.5.2",
    "http-errors": "2.0.0",
    "merge-descriptors": "1.0.1",
    "methods": "~1.1.2",
    "on-finished": "2.4.1",
    "parseurl": "~1.3.3",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~2.0.7",
    "qs": "6.11.0",
    "range-parser": "~1.2.1",
    "safe-buffer": "5.2.1",
    "send": "0.18.0",
    "serve-static": "1.15.0",
    "setprototypeof": "1.2.0",
    "statuses": "2.0.1",
    "type-is": "~1.6.18",
    "utils-merge": "1.0.1",
    "vary": "~1.1.2"
  },
  "devDependencies": {
    "after": "0.8.2",
    "connect-redis": "3.4.2",
    "cookie-parser": "1.4.6",
    "cookie-session": "2.0.0",
    "ejs": "3.1.8",
    "eslint": "8.24.0",
    "express-session": "1.17.2",
    "hbs": "4.2.0",
    "marked": "0.7.0",
    "method-override": "3.0.0",
    "mocha": "10.0.0",
    "morgan": "1.10.0",
    "multiparty": "4.2.3",
    "nyc": "15.1.0",
    "pbkdf2-password": "1.2.1",
    "supertest": "6.3.0",
    "vhost": "~3.0.2"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
    "test-ci": "nyc --reporter=lcovonly --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
  }
}
;
import fetch from {
  "name": "node-fetch",
  "version": "3.3.2",
  "description": "A light-weight module that brings Fetch API to node.js",
  "main": "./src/index.js",
  "sideEffects": false,
  "type": "module",
  "files": [
    "src",
    "@types/index.d.ts"
  ],
  "types": "./@types/index.d.ts",
  "engines": {
    "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
  },
  "scripts": {
    "test": "mocha",
    "coverage": "c8 report --reporter=text-lcov | coveralls",
    "test-types": "tsd",
    "lint": "xo"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/node-fetch/node-fetch.git"
  },
  "keywords": [
    "fetch",
    "http",
    "promise",
    "request",
    "curl",
    "wget",
    "xhr",
    "whatwg"
  ],
  "author": "David Frank",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/node-fetch/node-fetch/issues"
  },
  "homepage": "https://github.com/node-fetch/node-fetch",
  "funding": {
    "type": "opencollective",
    "url": "https://opencollective.com/node-fetch"
  },
  "devDependencies": {
    "abort-controller": "^3.0.0",
    "abortcontroller-polyfill": "^1.7.1",
    "busboy": "^1.4.0",
    "c8": "^7.7.2",
    "chai": "^4.3.4",
    "chai-as-promised": "^7.1.1",
    "chai-iterator": "^3.0.2",
    "chai-string": "^1.5.0",
    "coveralls": "^3.1.0",
    "form-data": "^4.0.0",
    "formdata-node": "^4.2.4",
    "mocha": "^9.1.3",
    "p-timeout": "^5.0.0",
    "stream-consumers": "^1.0.1",
    "tsd": "^0.14.0",
    "xo": "^0.39.1"
  },
  "dependencies": {
    "data-uri-to-buffer": "^4.0.0",
    "fetch-blob": "^3.1.4",
    "formdata-polyfill": "^4.0.10"
  },
  "tsd": {
    "cwd": "@types",
    "compilerOptions": {
      "esModuleInterop": true
    }
  },
  "xo": {
    "envs": [
      "node",
      "browser"
    ],
    "ignores": [
      "example.js"
    ],
    "rules": {
      "complexity": 0,
      "import/extensions": 0,
      "import/no-useless-path-segments": 0,
      "import/no-anonymous-default-export": 0,
      "import/no-named-as-default": 0,
      "unicorn/import-index": 0,
      "unicorn/no-array-reduce": 0,
      "unicorn/prefer-node-protocol": 0,
      "unicorn/numeric-separators-style": 0,
      "unicorn/explicit-length-check": 0,
      "capitalized-comments": 0,
      "node/no-unsupported-features/es-syntax": 0,
      "@typescript-eslint/member-ordering": 0
    },
    "overrides": [
      {
        "files": "test/**/*.js",
        "envs": [
          "node",
          "mocha"
        ],
        "rules": {
          "max-nested-callbacks": 0,
          "no-unused-expressions": 0,
          "no-warning-comments": 0,
          "new-cap": 0,
          "guard-for-in": 0,
          "unicorn/no-array-for-each": 0,
          "unicorn/prevent-abbreviations": 0,
          "promise/prefer-await-to-then": 0,
          "ava/no-import-test-files": 0
        }
      }
    ]
  },
  "runkitExampleFilename": "example.js",
  "release": {
    "branches": [
      "+([0-9]).x",
      "main",
      "next",
      {
        "name": "beta",
        "prerelease": true
      }
    ]
  }
};
import {
  "name": "dotenv",
  "version": "16.4.1",
  "description": "Loads environment variables from .env file",
  "main": "lib/main.js",
  "types": "lib/main.d.ts",
  "exports": {
    ".": {
      "types": "./lib/main.d.ts",
      "require": "./lib/main.js",
      "default": "./lib/main.js"
    },
    "./config": "./config.js",
    "./config.js": "./config.js",
    "./lib/env-options": "./lib/env-options.js",
    "./lib/env-options.js": "./lib/env-options.js",
    "./lib/cli-options": "./lib/cli-options.js",
    "./lib/cli-options.js": "./lib/cli-options.js",
    "./package.json": "./package.json"
  },
  "scripts": {
    "dts-check": "tsc --project tests/types/tsconfig.json",
    "lint": "standard",
    "lint-readme": "standard-markdown",
    "pretest": "npm run lint && npm run dts-check",
    "test": "tap tests/*.js --100 -Rspec",
    "prerelease": "npm test",
    "release": "standard-version"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/motdotla/dotenv.git"
  },
  "funding": "https://github.com/motdotla/dotenv?sponsor=1",
  "keywords": [
    "dotenv",
    "env",
    ".env",
    "environment",
    "variables",
    "config",
    "settings"
  ],
  "readmeFilename": "README.md",
  "license": "BSD-2-Clause",
  "devDependencies": {
    "@definitelytyped/dtslint": "^0.0.133",
    "@types/node": "^18.11.3",
    "decache": "^4.6.1",
    "sinon": "^14.0.1",
    "standard": "^17.0.0",
    "standard-markdown": "^7.1.0",
    "standard-version": "^9.5.0",
    "tap": "^16.3.0",
    "tar": "^6.1.11",
    "typescript": "^4.8.4"
  },
  "engines": {
    "node": ">=12"
  },
  "browser": {
    "fs": false
  }
};
import path from "path";

const { AZbnj7-PnbT2eEX21r2d4WqPsv1UjyogoH8jYjFKsmR7ltxhO7JcdTWlftMf52Fl2TFPBxbcmFuagqy0, EOU_Zh-p9vgCv295enYLLvgHjQOBKe6oEh9654wY2n9rARhjFiU3QF6WT2AAgq2sLuJ9P6ZfBQeN3OJc, PORT = prime } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const app = express();

// host static files
app.use(express.static("client"));

// parse post params sent in body in json format
app.use(express.json());

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */
const generateAccessToken = async () => {
  try {
    if (!AZbnj7-PnbT2eEX21r2d4WqPsv1UjyogoH8jYjFKsmR7ltxhO7JcdTWlftMf52Fl2TFPBxbcmFuagqy0 || !EOU_Zh-p9vgCv295enYLLvgHjQOBKe6oEh9654wY2n9rARhjFiU3QF6WT2AAgq2sLuJ9P6ZfBQeN3OJc) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      AZbnj7-PnbT2eEX21r2d4WqPsv1UjyogoH8jYjFKsmR7ltxhO7JcdTWlftMf52Fl2TFPBxbcmFuagqy0 + ":" + EOU_Zh-p9vgCv295enYLLvgHjQOBKe6oEh9654wY2n9rARhjFiU3QF6WT2AAgq2sLuJ9P6ZfBQeN3OJc,
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  // use the cart information passed from the front-end to calculate the purchase unit details
  console.log(
    "shopping cart information passed from the frontend createOrder() callback:",
    cart,
  );

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "QAR",
          value: "1899.00",
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });

  return handleResponse(response);
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./client/checkout.html"));
});

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
