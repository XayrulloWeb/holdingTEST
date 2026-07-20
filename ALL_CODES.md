# ALL PROJECT CODES

Этот документ содержит полный текст всех кодовых/текстовых файлов проекта. Бинарные медиа-файлы (.webp, .png и т.д.) не вставлены, потому что они не являются читаемым кодом.

## .gitignore

``text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## .oxlintrc.json

``json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
````

## index.html

``html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>temp_app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## package.json

``json
{
  "name": "temp_app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@studio-freight/lenis": "^1.0.42",
    "gsap": "^3.15.0",
    "lucide-react": "^1.22.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.2",
    "oxlint": "^1.69.0",
    "sharp": "^0.35.2",
    "tailwindcss": "^4.0.0",
    "vite": "^8.1.0"
  }
}
````

## package-lock.json

``json
{
  "name": "temp_app",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "temp_app",
      "version": "0.0.0",
      "dependencies": {
        "@studio-freight/lenis": "^1.0.42",
        "gsap": "^3.15.0",
        "lucide-react": "^1.22.0",
        "react": "^19.2.7",
        "react-dom": "^19.2.7"
      },
      "devDependencies": {
        "@tailwindcss/vite": "^4.3.1",
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.2",
        "oxlint": "^1.69.0",
        "sharp": "^0.35.2",
        "tailwindcss": "^4.0.0",
        "vite": "^8.1.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.11.1.tgz",
      "integrity": "sha512-RSvbQmHzdKzNsLYa/wHrbc3KN4sYLKAdPZxqiM2HATqv/SBk2/ENSHpvXGaLOMcsAyz0poEGqkmmKYG3OWiJEQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.2",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.1.tgz",
      "integrity": "sha512-vgj7R3y3Wgx24IQaGPA/R6YFXLHVMOZ0uVEyIQPaWs+rd1AzfEMXlAC22FYwO1XkKR6NPsq7mUandH8oIRdZFw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.2.tgz",
      "integrity": "sha512-c95qOXkHdydNKhscBTebqEC1CVAZpyqOfVfBzQ1qgzyl3gfeldUjIggDbIZgDKsHLgnsM+igH7TJ/eAasaVuMA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.2.tgz",
      "integrity": "sha512-eEieHsMksAW4IiO5NzauESRl2D2qz3J/kwUxUrSfV06A93eEaRfMpHXyUb1mAqrR7i8U9A0GRqE9pjn6u1Jjpg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.2.tgz",
      "integrity": "sha512-BaktuGPCeHJMARpodR8jK4uKiZrPAy9WrfQW0sdI37clracq8Bp01AYS3SZgi5FS/y5twa9t4+LIuuxQjqRrWw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.2.tgz",
      "integrity": "sha512-YoAxdnd8hPUkvLHd3bWY+YA8nw3xM/RyRopYucNsWHVSan8NLVM3X2volsfoRDcXdUJPg6tXahSd7HXPK7lRnw==",
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.2"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.1.tgz",
      "integrity": "sha512-4V/M3roRMTYjiwZY9IOVQOE8OyeCxFAkYmyZDrZl51uOKjibm3oeEJ4WAmLxutAfzFbC9jqUiPs2gbnGflH+7g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.1.tgz",
      "integrity": "sha512-c0/DxItpJv2+dGhgycJBBgotdqruGYDvA79drdh0MD1dFpy7JzJ/PlXwi1H4rFf0eTy8tgbI91aHDnZIceY3jQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.1.tgz",
      "integrity": "sha512-aGGy9aWzXgHBG7HNyQPWorZthlp7+x6fDRoPAQbGO3ThcttuTyKIx3NuSHb6zb4gBNq6/yNn9f1cy9nFKS/Vmg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.1.tgz",
      "integrity": "sha512-JznefmcK9j1JKPz8AkQDh89kjojubyfOasWBPKfzMIhPwsgDy9evpE/naJTXXXmghS1iFwR8u/kTwh/I2/+GCw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.1.tgz",
      "integrity": "sha512-1EkwGNCZk6iWNCMWqrvdJ+r1j0PT1zIz60CNPhYnJlK/zyeWqlsPZIe+ocBVqPF8k/Ssee/NCk+tE9Ryrko6ng==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.1.tgz",
      "integrity": "sha512-Ilays+w2bXdnxzxtQdmXR62u8o8GYa3eL4+Gr+1KiE4xperMZUslRaVPJwwPkzlHEjGfXAfRVAa/7CYCtSqsBw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.1.tgz",
      "integrity": "sha512-VfBwVHQTbRoj4XlpA/KLZ7ltgMpz+4WSejFzQ+GnoImjo1PtEJ59QB2qR1xQEeRPYIkNrPIm2L4cICMvz4C2ew==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.1.tgz",
      "integrity": "sha512-+c8ukgwU62DS54nCAjw7keOfHUkmr0B5QHEdcOqRnodF/MNXJbVI8Eopoj4B/0H8Asr65I+A4Amrn7a85/md6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.1.tgz",
      "integrity": "sha512-qlKb/pwbkAi1WMsJrYHk7CuDrd12s27U2QnRhFYUoJNrRCmkosMTttuRFat/DDB3IlDm5qE1TJgZ4JDnHX8Ldw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.1.tgz",
      "integrity": "sha512-yO21HwoUVLN8Qa+/SBjQLMYwBWAVJjeGPNe+hc0OUeMeifEtJqu5a1c4HayE1nNpDih9y3/KkoltfkDodmKAlg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.2.tgz",
      "integrity": "sha512-SE4kzF2mepn6z+6E7L6lsV8FzuLL6IPQdyX8ZiwROAG/G8td+hP/m7FsFPwidtrF19gvajuC9l6TxAVcsA4S7A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.2.tgz",
      "integrity": "sha512-af12Pnd0ZGu2HfP8NayB0kk6eC/lrfbQE6HlR4jD+34wdJ1Vw9TF6TMn6ZvffT+WgqVsl0hRbmNvz2u/23VmwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.2.tgz",
      "integrity": "sha512-hYSBm7zcNtDCozCxQHYZJiu63b/bXsgRZuOxCIBZsStMM9Vap47iFHdbX4kCvQsblPB/k+clhELpdQJHQLSHvg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.2.tgz",
      "integrity": "sha512-qQt0Kc13+Hoan/Awq/qMSQw3L+RI1NCRPgD5cUJ/1WSSmIoysLOc72jlRM3E0OHN9Yr313jgeQ2T+zW+F03QFA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.2.tgz",
      "integrity": "sha512-E4fLLfRPzDLlEeDaTzI98OFLcv++WL5ChLLMwPoVd0CIoZQqupBSNbOisPL5am9XsbQ9T84+iiMpUvbFtkunbA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.2.tgz",
      "integrity": "sha512-gi0zFJJRLswfCZmHtJdikXPOc5u7qamSOS3NHedLqLd4W8Q0NqjdBr6TTRIgsfFjqfTsHFgdfvJ9LwqSgcHiAA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.2.tgz",
      "integrity": "sha512-siWbOW1u6HFnFLrp0waKyW7VEf7jYvcDWdrXEFa8AkdAQgEvuu5Fz8/Y70w9EeqAdwDtfU012BhEHHaDqvQNzg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.2.tgz",
      "integrity": "sha512-YBqMMcjDi4QGYiSn4vNOYBhmlC4z5AXqkOUUqI2e0AFA4urNv4ESgOgwNl3K+4etQhha0twXlzeF20bbULm9Yg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.1"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.2.tgz",
      "integrity": "sha512-Mrv4JQNYVQ94xH+jzZ9r+gowleN8mv2FTgKT+PI6bx5C0G8TdNYndu161pg2i7uoBwxy2ImPMHrJOM2LZef7Bw==",
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.1"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.2.tgz",
      "integrity": "sha512-QNV27pxs9wpApEiCfvHM1RDoP1w1+2KrUWWDPEhEwg+latvOrfuhWrHWZKwdSFwU6jh3myjw/yOCRsUIuOft3g==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.2"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.2.tgz",
      "integrity": "sha512-BiVRYc/t6/Vl3e1hBx0hugG4oN9Pydf4fgMSpxTQJmwGUg/YoXTWHiFeRymHfCZzifxu4F4rpk/I67D0LQ20wQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.2.tgz",
      "integrity": "sha512-YYEhx9PImCC7T0tI8JDMi4DB9LwLCXCU5OWNYEXAxh5Q1ShKkyC6byxzoBJ3gEFDnH2lQckWuDe70G7mB2XJog==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.2.tgz",
      "integrity": "sha512-imoOyBcoM/iiUr4J6VPpCNjPnjvP/Gks95898yB8YqoGGYmHYbOyCuNv9FMhFgtaiHFGbHW8bxKqRV6VjtXThQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.6.tgz",
      "integrity": "sha512-ZLv/JdUfkvOy9eCnnBaGfiO+XimbjebAeO+MRQqD/B+FR1tnRN0tpKSJHRbE8sFfS6aqsXZ67TQjfwfsxULVbg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.137.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.137.0.tgz",
      "integrity": "sha512-WT+Gb24i8hmvo85AIv2oEYouEXkRlKAlT9WaCa3TfLgNCN+GhrJOGZuIlMouAh38Qe4QOx26eUOVsq70qXrywA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.71.0.tgz",
      "integrity": "sha512-ImGmd1njEg4FEJH03jhRnveEegtO3czCtfptvaHivKAZQIYATbVFBrrzbaYMYv0oJioTnxZAZVSyV+oL7W8S2g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.71.0.tgz",
      "integrity": "sha512-4A5BEexBrwY1YFF8Kiq/lp/wQPRG79G3BWIE1FuWaM5MvmpYSd+7ZySVcKkHdwo0UDzdQGddp6pD9mpctMqLnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.71.0.tgz",
      "integrity": "sha512-9wJA9GJulLwS2usU3CEisI/ESDO1n1z9eyTCvApMDrAkbJ1ve0mORgTMjcWWsKxkzkeZ2N/Gpra5IQE7x8tYgQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.71.0.tgz",
      "integrity": "sha512-PlLCjS06V0PeJMAJwzjrExw1sYNW9Gch3JtNlcwwZDXGlTYDuwHNN89zYH8LTXFfgkVtsYvs2nv0FqrzyuFDzg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.71.0.tgz",
      "integrity": "sha512-Lhil7bWre0ncxbUoDoxfS0JzpTz17BRQKW7iwoAUY8GJ66+WwJEfYPCFJ1P0WgVZR5/O/b3Q2pENlHOjeXLOGQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.71.0.tgz",
      "integrity": "sha512-Oo9/L58PYD3RC0x05d2upAPLllHytTjHQGsnC06P6Ynn7jKkp5mdImQxXdJ3+FnBaKspNpGogzgVsi6g872LiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.71.0.tgz",
      "integrity": "sha512-mSHfyfgJrEbyIR29ejaeS50BdPk+GoNPlC1dckpDiUZbJAIel68sjSMdOt4WY0/gva+ECC7FNITQkxMJU+vSBw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.71.0.tgz",
      "integrity": "sha512-n9yY4M2tiy3aij4AqtlnspzpfdpeT5JQfK2/w2d8oyp5W0FRwOb1dIeX99nORNcxGr08iD9bH8N5XFz3I2iy8w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.71.0.tgz",
      "integrity": "sha512-fJZrs5sDZtTaPIOiemRQQmo82Ezy+vOGXemPc4Ok7iVVsYsFa7SlW6Z5XN819VfsqBHRm3NJ3rTdnR8+bJYJdQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.71.0.tgz",
      "integrity": "sha512-cwl7VKGERIy9p+G+AvZdfy/06q0aHXaTt/mMRReC751iuNYJgqKjB7NydXSS30nBT9vtr2tunciOtrR4fD6FUA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.71.0.tgz",
      "integrity": "sha512-eZ8ieVXvzGi8jr7+ybQGPK2STw3mldfxZlgA2738iflfB/rzA69sE6m5rDRpQaxC7dpm745Enlh1Tod0QAk9Gg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.71.0.tgz",
      "integrity": "sha512-puMDbQYe6+NXwfMusojoA7CXGn2b3utukmd23PQqc1E3XhVCwyZ+FueSMzDYeNgDV2dUfIVXAAKZBcFDeCL6sA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.71.0.tgz",
      "integrity": "sha512-4NJLxBs1ujISCt3L/1FcywLs73PWtJuw+piD6feK2V6h6OS6P7xu9/sWt1DTRLibe6QCzmfZzmM/2HPORoV/Lg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.71.0.tgz",
      "integrity": "sha512-cFDaiR8L3430qp88tfZnvFlt3KotFhR/DlbIL0nHOMMYiG/9Wy4l+6f7t8G8pTa9bd8Lt8+M0y/qjRQ/xcB74g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.71.0.tgz",
      "integrity": "sha512-orfixdt76KlpNly9z0PkWBBNfwjKz+JFVLP/7wnVchlKNU9Dpt9InU/ZggeSej6fC7qwHmHNOGlhLnQXcYoGuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.71.0.tgz",
      "integrity": "sha512-9emQu2lAp6yhPB3XuI+++vR+l/o6JR1X+EpxwcumPdQXBWXEPAsquPGL7l158EqU8SebQMXTUa/S5zN98juyHw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.71.0.tgz",
      "integrity": "sha512-bd5kI8spYwTm3BILDtGhi73zoup5dw8MlPQNT8YB3BD5UIsjNe3K9/4ctrzQMX4SZMoK5HgzVLkLJzacEXB7fA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.71.0.tgz",
      "integrity": "sha512-W4HvOHGzVLHcrmFu+bMrJlho+/yrlX5ZNdJZqGe8MEldkQG+RHYhxxad9P4jvWAYFmIqUA5i9DQ8QsJqSU9GIw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.71.0.tgz",
      "integrity": "sha512-D2kyEIPHk/G/wiZLnwTVC/sVst+T/lKldVOjAFpgTIBUAOlry72e5OiapDbDBF4LfJLkN5ypJb/8Eu6yJzkveQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.1.3.tgz",
      "integrity": "sha512-DT6Z3PhvioeHMvxo+xHc3KtqggrI7CCTXCmC2h/5zUlp5jVitv7XEy+9q5/7v8IolhlioawpMo8Kg0EEBy7J0g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.1.3.tgz",
      "integrity": "sha512-0NwgwsjM7LrsuVnXMK3koTpagBNOhloc/BNjKqZjv4V5zI5r13qx69uVhRx+o5Z0yy4Hzq+lpy7TAgUG/ocvrw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.1.3.tgz",
      "integrity": "sha512-YtiBp4disu6V560loT6PjMdiRaWmVvDNrUunAalbiFx2ggeJwxdAsgZMcoGP17uyAsTwAj5V1niksxlHnVQ1Sw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.1.3.tgz",
      "integrity": "sha512-yD3EkEdXk2LypPxnf/kSZHirarsI8gcPzc62SukhR9VJTyvV+F9Q/GxWNuCojc7sXyuVC4DxRGhdDK4X8VSsbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.1.3.tgz",
      "integrity": "sha512-c+8vieQbsD7HNAHKIA34w0GJ9FedFFuJGD+7E6vz7Q3uqAIugL5p45fhlsj4UaAsHpcmlqugBWMhA0/j7o0sIg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.1.3.tgz",
      "integrity": "sha512-50jD0uUwLvur7Zz9LHz17kaAdTPjn5wN93hEgjvmYFRZwiR7ZJYovTd5ipyWJDAnXKvZ+wgc+/Ika6dwSF5OcA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.1.3.tgz",
      "integrity": "sha512-BO9+oPL8K9poZJBfYPsXNtYjPE5uM3qeehT3aFcW4LITOl+iSqhp0abzjR2nWBUNjIZeKXjAEWBZ64WjNoHd6w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.1.3.tgz",
      "integrity": "sha512-f3VpLB1vQ0Eo6ecr/6cekLnvYMFF4YBFoVGkfkvPLq1bAkbAwHYQPZKoAmG6OJyTcxxoC+AvezGx/S1obNC0Mw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.1.3.tgz",
      "integrity": "sha512-AmurZ26Pqx/RI9N1gzEOCklkKXl927yjfXWUUS0O7Puh8ARM/Ob8qfrD3qnWksScdw6cSrW5PSHE9DyLu7+PtA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.1.3.tgz",
      "integrity": "sha512-JJpqs8bRGITDOdbkNKnlojzBabbOHrqjSvDr0IVsZObE1lBcPjxItUEY9eWIDbxaJ3cGrXPWGfGkIxFijg/URg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.1.3.tgz",
      "integrity": "sha512-rSJcdjPxzA/by/6/rYs+v+bXU7UjvnbUWz8MJb6kh6+knqB1dCrtHg0uu7C/4haqJvqdkYHQ5IGn+tCH9GLW/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.1.3.tgz",
      "integrity": "sha512-hQ3/PYkDJICgevvyNcVrihVeqq7k1Pp3VZ9lY+dauAYUJKO+auqApvANhvR1An9BhmqYKvW2Mu1F9u4DXSMLxQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.1.3.tgz",
      "integrity": "sha512-Elcv/BtML9lXrV6JuKITc/grN2kYV9gjsQpW8Jfw4ioK0TOkjBjye0nnyqQNy9STNaI20lXNaQBRrD5gSgR0Yg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.11.1",
        "@emnapi/runtime": "1.11.1",
        "@napi-rs/wasm-runtime": "^1.1.6"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.1.3.tgz",
      "integrity": "sha512-2DrEfhluH9yhiaFApmsjsjwrSYbNcY1oFTzYSP1a535jDbV98zCFanA/96TBUd0iDFcxGmw9QRExwGCXz3U+/g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.1.3.tgz",
      "integrity": "sha512-OL4OMk7UPXOeVGGd3qo5zJyPIljf4AFgk5QAkPPS+OoLuOOozhuaQGC18MxVTnw/06q93gShAJzlwnSCY9YtqA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@studio-freight/lenis": {
      "version": "1.0.42",
      "resolved": "https://registry.npmjs.org/@studio-freight/lenis/-/lenis-1.0.42.tgz",
      "integrity": "sha512-HJAGf2DeM+BTvKzHv752z6Z7zy6bA643nZM7W88Ft9tnw2GsJSp6iJ+3cekjyMIWH+cloL2U9X82dKXgdU8kPg==",
      "deprecated": "The '@studio-freight/lenis' package has been renamed to 'lenis'. Please update your dependencies: npm install lenis and visit the documentation: https://www.npmjs.com/package/lenis",
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.1.tgz",
      "integrity": "sha512-6NDaqRoAMSXD1mr/RXu0HBvNE9a2n5tHPsxu9XHLws8o4Twes5rBM2205SUUiJ9goAtadrN6xTGX0UDEwp/N4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "5.21.6",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.1"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/tailwindcss": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.1.tgz",
      "integrity": "sha512-hk+TB1m+K8CYNrP6rjQaq/Y+4Zylwpa87mLYBKCunwnnQ9p+fHb7kmSfGqyEJoxF/O6CDyABWVFEafNSYKll+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.1.tgz",
      "integrity": "sha512-yVPyo8RNkabVr3O2EhHEE0Rewu7YKzc1DhIqfL46LKveFrmu9XbDazNOJY7/GRuvw1h6u3utWnR29H/p5JPlgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.1",
        "@tailwindcss/oxide-darwin-arm64": "4.3.1",
        "@tailwindcss/oxide-darwin-x64": "4.3.1",
        "@tailwindcss/oxide-freebsd-x64": "4.3.1",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.1",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.1",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.1",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.1",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.1",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.1",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.1",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.1"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.1.tgz",
      "integrity": "sha512-SVlyf61g374l5cHyg8x9kf5xmLcOaxvOTsbsqDnSsDJaKOEFZ7GCvi84VAVGpxojYOs1+3K6M0UjXfqPU8vmOQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.1.tgz",
      "integrity": "sha512-hVnWLwv+e/l7c4WKyVtHVrIPvYdqWHjRB3MDIqARynzFtnQg85kmQEFCbV9Ja0VVx4xXTIiDWY60Y7iz/iNoDA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.1.tgz",
      "integrity": "sha512-Cf7abu0WVgbhU7ANgPUnSAvm7nCvMweusHb8FnaHlLfv/Caq4GYaEZg7ZImzzmjx4lIAfuS8q+eLIS7A7IzxIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.1.tgz",
      "integrity": "sha512-ZZqzX2Y+GXtXXfqSfpJhDm60OoZfvLHLCgm+J7NVqgHHJjG/m9ugZI77RwTsVd4fnBJuCFP6Ae6kTJb71UdS8g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.1.tgz",
      "integrity": "sha512-/Ah/xik0LaMYfv9DZ0S/t4pBlBNYOcqtRwusjgovHkvT8ixueWCLyJjsaF5kQIckjb4IT8Q6K6p/iPmZMixYgg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.1.tgz",
      "integrity": "sha512-gqdFoVJlw444GvpnheZLHmvTzSxI/cOUUh2KSNejQjTcYkW062SVD+En0rUgD+QV91bz1XGIGtt1HJd48xUGbQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.1.tgz",
      "integrity": "sha512-Bwv9KwOvE0VKa86xPFif9b9c3Y1NxOV1P0gLti/IYaWEsQYZXDlxfGEtA8mdDZ7SG3wyNXAWYT5SIn3giL57oA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.1.tgz",
      "integrity": "sha512-Ymi8O8T15HYQdOUWUtTI6ldN0neHP85FC+Qz32xTcZ7iJXtem/x8ITev0o1e9e5rkqj4lONZfTRLvkmin1+tKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.1.tgz",
      "integrity": "sha512-M+P/91qJ6uILLw4k2G93GMDRAXj61SMvFQYt39AqvUqYgExXpLL5aepfns7sj4HiAQeolirQF9E0lzRvdf4zPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.1.tgz",
      "integrity": "sha512-zsM8uOeqvVGHsAXsJxsT28ttosFahLJKCLOTUBqRAtKnVgGSRitds9T432QiT8b77Yga7JIBkulIRRlJPtYhRA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.10.0",
        "@emnapi/runtime": "^1.10.0",
        "@emnapi/wasi-threads": "^1.2.1",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.1.tgz",
      "integrity": "sha512-aiNvSq9BsVk8V513lDKlrCFAgf8qBMPZTpgEhInL+NwQqs97mYmupVMrPrgBBSL8Pv/0zXu9MrMF9rMun1ZeNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.1.tgz",
      "integrity": "sha512-xDEyu1rg290472FEGaKHnzyDyh5QH+AlWvsU5hMoMtPpzmKlRI0jaYKCgSHDYtaQWZOYbMaduSyCwFwY4n1HmA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.3.1.tgz",
      "integrity": "sha512-hItDHuIIlEV61R+faXu66s1K36aTurO/Qw0e45Vskz57gXl9pWOT6eg3zmcEui6CZXddbN7zd41bwmvag4JGwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.3.1",
        "@tailwindcss/oxide": "4.3.1",
        "tailwindcss": "4.3.1"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@tailwindcss/vite/node_modules/tailwindcss": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.1.tgz",
      "integrity": "sha512-hk+TB1m+K8CYNrP6rjQaq/Y+4Zylwpa87mLYBKCunwnnQ9p+fHb7kmSfGqyEJoxF/O6CDyABWVFEafNSYKll+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.3.tgz",
      "integrity": "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.3.tgz",
      "integrity": "sha512-vmFvco5/QuC2f9Oj+wTk0+9XeDFkHxSamwZKYc7MxYwKICfvUvlMhqKI0VuICPltGqh1neqBKDvO4kes1ya8vg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.21.6",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.21.6.tgz",
      "integrity": "sha512-aNnGCvbJ/RIyWo1IuhNdVjnNF+EjH9wpzpNHt+ci/m9He9LJvUN8wrCcXjp9cWsGNAuvSpVFTx/vraAFQ8qGjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/gsap": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/gsap/-/gsap-3.15.0.tgz",
      "integrity": "sha512-dMW4CWBTUK1AEEDeZc1g4xpPGIrSf9fJF960qbTZmN/QwZIWY5wgliS6JWl9/25fpTGJrMRtSjGtOmPnfjZB+A==",
      "license": "Standard 'no charge' license: https://gsap.com/standard-license."
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.22.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.22.0.tgz",
      "integrity": "sha512-c9o3l0PiNcgOQDW4F31BEYHudE7kgxVt3o30qMl36ZPwTxXlGB4QnLilhERvVM4uh/pl5MDyY1/gzZSYcHDtBg==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.15",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.15.tgz",
      "integrity": "sha512-y7Wygv/7mEOvxTuEQDB8StXdMRBWf1kR/tlhAzBRUFkB2jfcLOAxO/SHmOO2zgz1pVgK29/kyupn059/bCHdjA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/oxlint": {
      "version": "1.71.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.71.0.tgz",
      "integrity": "sha512-U1m1X+C0vDj7DC1e13IoZULzEcPczE7UOMTs8VlZGHUEIUaSTZKo5qkPsQEfzpgnQ29Pea/w3Xntk62UCecxZw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.71.0",
        "@oxlint/binding-android-arm64": "1.71.0",
        "@oxlint/binding-darwin-arm64": "1.71.0",
        "@oxlint/binding-darwin-x64": "1.71.0",
        "@oxlint/binding-freebsd-x64": "1.71.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.71.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.71.0",
        "@oxlint/binding-linux-arm64-gnu": "1.71.0",
        "@oxlint/binding-linux-arm64-musl": "1.71.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.71.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.71.0",
        "@oxlint/binding-linux-riscv64-musl": "1.71.0",
        "@oxlint/binding-linux-s390x-gnu": "1.71.0",
        "@oxlint/binding-linux-x64-gnu": "1.71.0",
        "@oxlint/binding-linux-x64-musl": "1.71.0",
        "@oxlint/binding-openharmony-arm64": "1.71.0",
        "@oxlint/binding-win32-arm64-msvc": "1.71.0",
        "@oxlint/binding-win32-ia32-msvc": "1.71.0",
        "@oxlint/binding-win32-x64-msvc": "1.71.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=0.22.1",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.16",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.16.tgz",
      "integrity": "sha512-vuwillviilfKZsg0VGj5R/YwwcHx4SLsIOI/7K6mQkWx+l5cUHTjj5g0AasTBcyXsbfTgrwsUNmVUb5xVwyPwg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/rolldown": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.1.3.tgz",
      "integrity": "sha512-1F1eEtUBtFvcGm1HQ9TiUIUHPQG7mSAODrhIzjxoUEFuo8OcbrGLiVLkevNgj84TE4lnHvnumwFjhJO5Eu135g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.137.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.1.3",
        "@rolldown/binding-darwin-arm64": "1.1.3",
        "@rolldown/binding-darwin-x64": "1.1.3",
        "@rolldown/binding-freebsd-x64": "1.1.3",
        "@rolldown/binding-linux-arm-gnueabihf": "1.1.3",
        "@rolldown/binding-linux-arm64-gnu": "1.1.3",
        "@rolldown/binding-linux-arm64-musl": "1.1.3",
        "@rolldown/binding-linux-ppc64-gnu": "1.1.3",
        "@rolldown/binding-linux-s390x-gnu": "1.1.3",
        "@rolldown/binding-linux-x64-gnu": "1.1.3",
        "@rolldown/binding-linux-x64-musl": "1.1.3",
        "@rolldown/binding-openharmony-arm64": "1.1.3",
        "@rolldown/binding-wasm32-wasi": "1.1.3",
        "@rolldown/binding-win32-arm64-msvc": "1.1.3",
        "@rolldown/binding-win32-x64-msvc": "1.1.3"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.2",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.2.tgz",
      "integrity": "sha512-FVtFjtBCMiJS6yb5CX7Sop45WFMpeGw6oRKuJnXYgf/f1ms/D7LE/ZUSNxnW7rZ/dbslQWYkoqFHGPaDBtaK4w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.2",
        "@img/sharp-darwin-x64": "0.35.2",
        "@img/sharp-freebsd-wasm32": "0.35.2",
        "@img/sharp-libvips-darwin-arm64": "1.3.1",
        "@img/sharp-libvips-darwin-x64": "1.3.1",
        "@img/sharp-libvips-linux-arm": "1.3.1",
        "@img/sharp-libvips-linux-arm64": "1.3.1",
        "@img/sharp-libvips-linux-ppc64": "1.3.1",
        "@img/sharp-libvips-linux-riscv64": "1.3.1",
        "@img/sharp-libvips-linux-s390x": "1.3.1",
        "@img/sharp-libvips-linux-x64": "1.3.1",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.1",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.1",
        "@img/sharp-linux-arm": "0.35.2",
        "@img/sharp-linux-arm64": "0.35.2",
        "@img/sharp-linux-ppc64": "0.35.2",
        "@img/sharp-linux-riscv64": "0.35.2",
        "@img/sharp-linux-s390x": "0.35.2",
        "@img/sharp-linux-x64": "0.35.2",
        "@img/sharp-linuxmusl-arm64": "0.35.2",
        "@img/sharp-linuxmusl-x64": "0.35.2",
        "@img/sharp-webcontainers-wasm32": "0.35.2",
        "@img/sharp-win32-arm64": "0.35.2",
        "@img/sharp-win32-ia32": "0.35.2",
        "@img/sharp-win32-x64": "0.35.2"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.0.0.tgz",
      "integrity": "sha512-ULRPI3A+e39T7pSaf1xoi58AqqJxVCLg8F/uM5A3FadUbnyDTgltVnXJvdkTjwCOGA6NazqHVcwPJC5h2vRYVQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/vite": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.1.0.tgz",
      "integrity": "sha512-BuJcQK/56NQTWDGn4ABea3q4SSBdNPWwNZKTkkUpcMPnLoquSYH8llRtSUIgoL1KSCpHt5eghLShn50mH36y7Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.4",
        "postcss": "^8.5.15",
        "rolldown": "~1.1.2",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.3.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    }
  }
}
````

## public\favicon.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## public\icons.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## README.md

``md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
#   h o l d i n g T E S T  
 
````

## scripts\fix-manifest-paths.mjs

``js
import fs from 'fs';

const file = 'src/data/mediaManifest.js';
let content = fs.readFileSync(file, 'utf8');

const before = (content.match(/\/public\//g) || []).length;

// Strip /public/ prefix from all paths
content = content.replaceAll('"/public/', '"/');

fs.writeFileSync(file, content);

const after = (content.match(/\/public\//g) || []).length;
console.log(`Fixed ${before - after} paths. Remaining /public/ refs: ${after}`);

// Show sample
const lines = content.split('\n').filter(l => l.includes('.webp'));
console.log('\nSample paths after fix:');
lines.slice(0, 3).forEach(l => console.log(l.trim()));
````

## scripts\generate-comps.cjs

``js
const fs = require('fs');
const comps = ['Header','About','Benefits','Gallery','Layouts','Infrastructure','Location','LeadForm','Footer','Loader'];

comps.forEach(c => {
  const content = `import React from 'react';

export default function ${c}() {
  return (
    <section id="${c.toLowerCase()}" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">${c}</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции ${c}</p>
      </div>
    </section>
  );
}`;
  fs.writeFileSync(`src/components/${c}.jsx`, content);
});

const headerContent = `import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
      <div className="text-xl tracking-widest uppercase font-light pointer-events-auto">HOLDING</div>
      <nav className="hidden md:flex gap-8 text-sm tracking-wide pointer-events-auto">
        <a href="#about" className="hover:text-brand-gold transition-colors">О проекте</a>
        <a href="#gallery" className="hover:text-brand-gold transition-colors">Галерея</a>
        <a href="#layouts" className="hover:text-brand-gold transition-colors">Планировки</a>
      </nav>
      <button className="text-sm tracking-wide uppercase hover:text-brand-gold transition-colors pointer-events-auto">
        Меню
      </button>
    </header>
  );
}`;
fs.writeFileSync('src/components/Header.jsx', headerContent);
````

## scripts\optimize-earth.mjs

``js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_EARTH = 'c:/Users/user/Desktop/footage';
const TARGET_EARTH_DESKTOP = 'c:/Users/user/Desktop/holding/public/media/earth/desktop';
const TARGET_EARTH_MOBILE = 'c:/Users/user/Desktop/holding/public/media/earth/mobile';
const MANIFEST_FILE = 'c:/Users/user/Desktop/holding/src/data/mediaManifest.js';

const EARTH_DESKTOP_MAX_WIDTH = 1440;
const EARTH_DESKTOP_QUALITY = 84;
const EARTH_MOBILE_MAX_WIDTH = 1080;
const EARTH_MOBILE_QUALITY = 82;

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getFilesNaturalSort(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => f.match(/\.(png|jpe?g)$/i))
        .filter(f => fs.statSync(path.join(dir, f)).size > 0)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

async function run() {
    console.log('Processing Earth Footage with new lighter settings...');
    ensureDirExists(TARGET_EARTH_DESKTOP);
    ensureDirExists(TARGET_EARTH_MOBILE);

    const files = getFilesNaturalSort(SOURCE_EARTH);
    if (files.length === 0) {
        console.error('No earth files found in ' + SOURCE_EARTH);
        return;
    }

    const desktopFrames = [];
    const mobileFrames = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sourcePath = path.join(SOURCE_EARTH, file);
        const webpName = path.parse(file).name + '.webp';

        try {
            await sharp(sourcePath)
                .resize({ width: EARTH_DESKTOP_MAX_WIDTH, withoutEnlargement: true })
                .webp({ quality: EARTH_DESKTOP_QUALITY })
                .toFile(path.join(TARGET_EARTH_DESKTOP, webpName));
            desktopFrames.push(`/public/media/earth/desktop/${webpName}`);

            if (i % 2 === 0) {
                await sharp(sourcePath)
                    .resize({ width: EARTH_MOBILE_MAX_WIDTH, withoutEnlargement: true })
                    .webp({ quality: EARTH_MOBILE_QUALITY })
                    .toFile(path.join(TARGET_EARTH_MOBILE, webpName));
                mobileFrames.push(`/public/media/earth/mobile/${webpName}`);
            }
        } catch (err) {
            console.error('Error on ' + file, err);
        }
    }

    // Now update the manifest.
    let manifestContent = fs.readFileSync(MANIFEST_FILE, 'utf8');
    
    const dRegex = /export const earthDesktopFrames = \[[\s\S]*?\];/;
    const mRegex = /export const earthMobileFrames = \[[\s\S]*?\];/;
    
    manifestContent = manifestContent.replace(dRegex, `export const earthDesktopFrames = ${JSON.stringify(desktopFrames, null, 2)};`);
    manifestContent = manifestContent.replace(mRegex, `export const earthMobileFrames = ${JSON.stringify(mobileFrames, null, 2)};`);
    
    fs.writeFileSync(MANIFEST_FILE, manifestContent);
    console.log('Done! Earth sequence is now lighter.');
}

run();
````

## scripts\optimize-media.mjs

``js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_EARTH = 'c:/Users/user/Desktop/holding/footage';
const SOURCE_HOLDING = 'c:/Users/user/Desktop/holding/holdingIMG/upscayl_png_upscayl-lite-4x_4x';

const TARGET_EARTH_DESKTOP = 'public/media/earth/desktop';
const TARGET_EARTH_MOBILE = 'public/media/earth/mobile';
const TARGET_HOLDING_DESKTOP = 'public/media/holding/desktop';
const TARGET_HOLDING_MOBILE = 'public/media/holding/mobile';

const MANIFEST_FILE = 'src/data/mediaManifest.js';

// Settings for Earth
const EARTH_DESKTOP_MAX_WIDTH = 1440;
const EARTH_DESKTOP_QUALITY = 84;
const EARTH_MOBILE_MAX_WIDTH = 1080;
const EARTH_MOBILE_QUALITY = 82;

// Settings for Holding
const HOLDING_DESKTOP_MAX_WIDTH = 1920;
const HOLDING_DESKTOP_QUALITY = 88;
const HOLDING_MOBILE_MAX_WIDTH = 1080;
const HOLDING_MOBILE_QUALITY = 84;

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function getFilesNaturalSort(dir) {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(png|jpe?g)$/i));
    const validFiles = files.filter(f => {
        const stat = fs.statSync(path.join(dir, f));
        return stat.size > 0;
    });
    return validFiles.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}

function analyzeSequence(files, name) {
    console.log(`\n--- Analysis: ${name} ---`);
    console.log(`Total frames found: ${files.length}`);
    if (files.length === 0) return;
    console.log(`First frame: ${files[0]}`);
    console.log(`Last frame: ${files[files.length - 1]}`);
    
    // Attempt to find missing frames based on extracted number
    const numbers = files.map(f => {
        const match = f.match(/\d+/g);
        return match ? parseInt(match[match.length - 1], 10) : null;
    }).filter(n => n !== null);

    if (numbers.length > 1) {
        const missing = [];
        for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
            if (!numbers.includes(i)) {
                missing.push(i);
            }
        }
        if (missing.length > 0) {
            console.log(`Missing frame numbers: ${missing.join(', ')}`);
        } else {
            console.log(`No missing frame numbers detected in sequence.`);
        }
    }
}

async function getDirSize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        size += stat.size;
    }
    return size;
}

function formatSize(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function processSequence(sourceDir, files, targetDesktop, targetMobile, isMobileEverySecondFrame, config) {
    ensureDirExists(targetDesktop);
    ensureDirExists(targetMobile);

    const desktopFrames = [];
    const mobileFrames = [];

    let totalOriginalSize = 0;
    
    // We get the total size first
    for (let i = 0; i < files.length; i++) {
        const stat = fs.statSync(path.join(sourceDir, files[i]));
        totalOriginalSize += stat.size;
    }

    console.log(`Total original size: ${formatSize(totalOriginalSize)}`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sourcePath = path.join(sourceDir, file);
        const baseName = path.parse(file).name;
        const webpName = `${baseName}.webp`;
        
        const targetDesktopPath = path.join(targetDesktop, webpName);
        try {
            // Process desktop
            await sharp(sourcePath)
                .resize({ width: config.desktop.width, withoutEnlargement: true })
                .webp({ quality: config.desktop.quality })
                .toFile(targetDesktopPath);
            desktopFrames.push(`/${targetDesktop}/${webpName}`);

            // Process mobile
            const includeForMobile = isMobileEverySecondFrame ? (i % 2 === 0) : true;
            if (includeForMobile) {
                const targetMobilePath = path.join(targetMobile, webpName);
                await sharp(sourcePath)
                    .resize({ width: config.mobile.width, withoutEnlargement: true })
                    .webp({ quality: config.mobile.quality })
                    .toFile(targetMobilePath);
                mobileFrames.push(`/${targetMobile}/${webpName}`);
            }
        } catch (error) {
            console.error(`Skipping corrupted file ${file}: ${error.message}`);
        }
        
        if ((i + 1) % 50 === 0) {
            console.log(`Processed ${i + 1}/${files.length} frames...`);
        }
    }

    const desktopSize = await getDirSize(targetDesktop);
    const mobileSize = await getDirSize(targetMobile);
    
    console.log(`Desktop size: ${formatSize(desktopSize)} (avg: ${formatSize(desktopSize/desktopFrames.length)})`);
    console.log(`Mobile size: ${formatSize(mobileSize)} (avg: ${formatSize(mobileSize/mobileFrames.length)})`);

    return { desktopFrames, mobileFrames };
}

async function main() {
    console.log('Starting Media Optimization...');
    
    ensureDirExists(path.dirname(MANIFEST_FILE));

    const earthFiles = getFilesNaturalSort(SOURCE_EARTH);
    const holdingFiles = getFilesNaturalSort(SOURCE_HOLDING);

    analyzeSequence(earthFiles, 'Earth Footage');
    analyzeSequence(holdingFiles, 'Holding Footage');

    console.log('\nProcessing Earth Footage...');
    const earthManifest = await processSequence(SOURCE_EARTH, earthFiles, TARGET_EARTH_DESKTOP, TARGET_EARTH_MOBILE, true, {
        desktop: { width: EARTH_DESKTOP_MAX_WIDTH, quality: EARTH_DESKTOP_QUALITY },
        mobile: { width: EARTH_MOBILE_MAX_WIDTH, quality: EARTH_MOBILE_QUALITY }
    });

    /*
    console.log('\nProcessing Holding Footage...');
    const holdingManifest = await processSequence(SOURCE_HOLDING, holdingFiles, TARGET_HOLDING_DESKTOP, TARGET_HOLDING_MOBILE, true, {
        desktop: { width: HOLDING_DESKTOP_MAX_WIDTH, quality: HOLDING_DESKTOP_QUALITY },
        mobile: { width: HOLDING_MOBILE_MAX_WIDTH, quality: HOLDING_MOBILE_QUALITY }
    });
    */

    const manifestContent = `
// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = ${JSON.stringify(earthManifest.desktopFrames, null, 2)};
export const earthMobileFrames = ${JSON.stringify(earthManifest.mobileFrames, null, 2)};
export const holdingDesktopFrames = []; // Temporarily empty
export const holdingMobileFrames = []; // Temporarily empty
`;

    fs.writeFileSync(MANIFEST_FILE, manifestContent);
    console.log(`\nManifest written to ${MANIFEST_FILE}`);
    console.log('Optimization complete!');
}

main().catch(console.error);
````

## src\App.css

``css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
````

## src\App.jsx

``jsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import CinematicStory from './components/CinematicStory';
import InteriorReveal from './components/InteriorReveal';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Layouts from './components/Layouts';
import Infrastructure from './components/Infrastructure';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ─── Lenis: smooth native scroll ───────────────────────────────────────
    // Lenis replaces the browser's default scroll momentum with a
    // consistent, high-quality easing curve on every device.
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    // ─── Critical: wire Lenis into GSAP's ticker ──────────────────────────
    // Without this, ScrollTrigger reads the browser's raw scroll position
    // (jerky) instead of Lenis's smoothed position.
    // This is the official Lenis + GSAP integration pattern.
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0); // prevent GSAP from skipping frames on tab blur

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="bg-brand-bg text-brand-light font-sans selection:bg-brand-gold selection:text-brand-bg">
      <Header />
      
      <main>
        <Hero />
        
        {/* The immersive part */}
        <CinematicStory />
        <InteriorReveal />
        
        {/* Standard sections */}
        <About />
        <Benefits />
        <Gallery />
        <Layouts />
        <Infrastructure />
        <Location />
        <LeadForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
````

## src\assets\react.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## src\assets\vite.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## src\components\About.jsx

``jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">About</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции About</p>
      </div>
    </section>
  );
}
````

## src\components\Benefits.jsx

``jsx
import React from 'react';

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Benefits</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Benefits</p>
      </div>
    </section>
  );
}
````

## src\components\CinematicStory.jsx

``jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrameSequenceCanvas from './FrameSequenceCanvas';
import {
  earthDesktopFrames,
  earthMobileFrames,
  holdingDesktopFrames,
  holdingMobileFrames,
} from '../data/mediaManifest';
import { buildingCallouts } from '../data/projectContent';

gsap.registerPlugin(ScrollTrigger);

const EARTH_MANIFEST   = { desktop: earthDesktopFrames,   mobile: earthMobileFrames   };
const HOLDING_MANIFEST = { desktop: holdingDesktopFrames, mobile: holdingMobileFrames };

// How many frames of Earth to show before crossfading (0-1 of Earth total)
const EARTH_END_RATIO = 150 / Math.max(earthDesktopFrames.length, 1);

// Global scroll progress ref — updated by GSAP, read by RAF in FrameSequenceCanvas
const scrollProgressRef = { value: 0 };

export default function CinematicStory() {
  const sectionRef  = useRef(null);
  const progressRef = useRef(0);

  // Derived scroll state for UI overlays only (no RAF-critical data here)
  const [uiState, setUiState] = useState({
    earthP:      0,
    holdingP:    0,
    earthOpacity:   1,
    holdingOpacity: 0,
    showEarthText: false,
  });

  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const debugMode = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  ).has('debug');

  // First 10 holding frames to warm up while user is in earth sequence
  const holdingWarmup = holdingDesktopFrames.slice(0, 10);

  useEffect(() => {
    if (!sectionRef.current) return;

    const FADE_START = 0.35;
    const FADE_END   = 0.45;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      // scrub: 1.5 → the ONE parameter that gives Apple-grade smoothness.
      // GSAP chases scroll position over 1.5 seconds with easing.
      // Frame lerp inside Canvas is fast (0.55) so it instantly follows this smoothed value.
      scrub: 1.5,
      onUpdate(self) {
        const p = self.progress;
        progressRef.current = p;

        // Earth progress: stop at EARTH_END_RATIO of earth sequence
        const earthP = Math.min(EARTH_END_RATIO, (p / FADE_END) * EARTH_END_RATIO);

        // Holding progress: starts warming up from FADE_START
        const holdingP = Math.max(0, (p - FADE_START) / (1 - FADE_START));

        // Crossfade opacity
        let earthOpacity   = 1;
        let holdingOpacity = 0;
        if (p >= FADE_START && p <= FADE_END) {
          const ratio = (p - FADE_START) / (FADE_END - FADE_START);
          earthOpacity   = 1 - ratio;
          holdingOpacity = ratio;
        } else if (p > FADE_END) {
          earthOpacity   = 0;
          holdingOpacity = 1;
        }

        // Update UI state (low-frequency — CSS transitions handle smoothing)
        setUiState({
          earthP,
          holdingP,
          earthOpacity,
          holdingOpacity,
          showEarthText: p > 0.05 && p < 0.3,
        });
      },
    });

    return () => st.kill();
  }, []);

  const { earthP, holdingP, earthOpacity, holdingOpacity, showEarthText } = uiState;

  return (
    <section ref={sectionRef} className="relative w-full bg-black" style={{ height: '500vh' }}>

      {/* Loading overlay — hide once first frame is ready */}
      {!firstFrameLoaded && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-5">
          <div className="w-10 h-10 border border-[#C7A36A]/60 border-t-[#C7A36A] rounded-full animate-spin" />
          <p className="text-[#A6A19A] text-xs tracking-[0.3em] uppercase">Загрузка</p>
        </div>
      )}

      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* ── Earth canvas ── */}
        <FrameSequenceCanvas
          manifest={EARTH_MANIFEST}
          progress={earthP}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: earthOpacity, transition: 'opacity 0.6s ease', willChange: 'opacity' }}
          debug={debugMode}
          onFirstFrameLoaded={() => setFirstFrameLoaded(true)}
          preloadHint={holdingWarmup}
        />

        {/* ── Holding canvas ── */}
        <FrameSequenceCanvas
          manifest={HOLDING_MANIFEST}
          progress={holdingP}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: holdingOpacity, transition: 'opacity 0.6s ease', willChange: 'opacity' }}
        />

        {/* ── Overlays ── */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Earth label */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ opacity: showEarthText ? 1 : 0, transition: 'opacity 1.2s ease' }}
          >
            <p className="text-[11px] tracking-[0.35em] text-[#F3F0EA]/70 uppercase
                          bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              Открывая новую точку города
            </p>
          </div>

          {/* Holding callouts */}
          {holdingP > 0 && holdingP < 0.82 && (
            <div className="absolute inset-0 max-w-7xl mx-auto px-8 flex items-center justify-between">

              {/* Left headline */}
              <div
                style={{
                  opacity:   holdingP > 0.08 ? 1 : 0,
                  transform: `translateY(${holdingP > 0.08 ? 0 : 24}px)`,
                  transition: 'opacity 0.9s ease, transform 0.9s ease',
                }}
                className="max-w-md"
              >
                <h2 className="text-[#F3F0EA] text-5xl md:text-[5.5rem] font-extralight leading-none tracking-tight mb-5">
                  НОВАЯ<br />ТОЧКА<br />ГОРОДА
                </h2>
                <p className="text-[#A6A19A] text-base font-light leading-relaxed">
                  Архитектура, созданная<br />для современного ритма жизни.
                </p>
              </div>

              {/* Right callout cards */}
              <div className="flex flex-col gap-8 max-w-xs">
                {buildingCallouts.map((block) => {
                  const visible =
                    holdingP > block.startProgress && holdingP < block.endProgress;
                  return (
                    <div
                      key={block.id}
                      style={{
                        opacity:   visible ? 1 : 0,
                        transform: `translateY(${visible ? 0 : 16}px)`,
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                      }}
                      className="glass p-5 rounded-xl"
                    >
                      <div className="text-[#C7A36A] text-[10px] tracking-[0.3em] uppercase mb-1.5">
                        {block.eyebrow}
                      </div>
                      <div className="text-[#F3F0EA] text-lg font-light mb-1">
                        {block.title}
                      </div>
                      <div className="text-[#A6A19A] text-xs leading-relaxed">
                        {block.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Final warm glow before window */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(199,163,106,0.18) 0%, transparent 70%)',
              mixBlendMode: 'overlay',
              opacity: holdingP > 0.88 ? (holdingP - 0.88) / 0.12 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        </div>
      </div>
    </section>
  );
}
````

## src\components\Footer.jsx

``jsx
import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Footer</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Footer</p>
      </div>
    </section>
  );
}
````

## src\components\FrameSequenceCanvas.jsx

``jsx
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

// ─── Config ─────────────────────────────────────────────────────────────────
const LERP_SPEED     = 0.55;  // fast-follow: GSAP scrub handles main easing
const PRELOAD_AHEAD  = 10;
const PRELOAD_BEHIND = 4;
const MAX_CACHE      = 35;

// ─── Module-level image cache (LRU, shared across instances) ─────────────────
const imgCache = new Map();   // src → HTMLImageElement
const inFlight = new Set();   // srcs currently loading
const dlStats  = { frames: 0 };

function lruEvict() {
  if (imgCache.size <= MAX_CACHE) return;
  const key = imgCache.keys().next().value;
  const img = imgCache.get(key);
  if (img) img.src = ''; // release browser decode memory
  imgCache.delete(key);
}

function preload(src) {
  if (!src || imgCache.has(src) || inFlight.has(src)) return;
  inFlight.add(src);
  const img = new Image();
  img.onload = () => {
    lruEvict();
    imgCache.set(src, img);
    inFlight.delete(src);
    dlStats.frames++;
  };
  img.onerror = () => inFlight.delete(src);
  img.src = src;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function FrameSequenceCanvas({
  manifest,       // { desktop: string[], mobile: string[] }
  progress,       // 0–1, driven by GSAP scrub (updated every render synchronously)
  style,
  className,
  debug,
  onFirstFrameLoaded,
  preloadHint,    // string[] – first N frames of next sequence to warm up
}) {
  const canvasRef       = useRef(null);
  const ctxRef          = useRef(null);

  // ── Hot-path refs (never cause React re-renders) ──────────────────────────
  const progressRef     = useRef(0);
  const lerpFrameRef    = useRef(0);   // float – smoothed current frame
  const lastDrawnRef    = useRef(-1);  // last integer frame index drawn
  const lastGoodImgRef  = useRef(null);// fallback: last successfully drawn img
  const isMobileRef     = useRef(false);
  const framesRef       = useRef([]);  // active frame list (desktop or mobile)
  const readyRef        = useRef(false);

  // Synchronous update of progressRef (no useEffect delay!)
  progressRef.current = progress;

  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [debugTick, setDebugTick]             = useState(0);

  // ── Canvas setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      isMobileRef.current = window.innerWidth <= 768;

      // Update active frames on resize (mobile ↔ desktop switch)
      const isMob = isMobileRef.current;
      framesRef.current = (isMob && manifest.mobile?.length)
        ? manifest.mobile
        : manifest.desktop;

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;

      // Force redraw after resize
      lastDrawnRef.current = -1;
    };

    resize();

    // ─ Point 4: alpha:false + desynchronized for GPU acceleration ──────────
    ctxRef.current = canvas.getContext('2d', {
      alpha: false,          // HUGE perf boost: browser skips alpha compositing
      desynchronized: true,  // allow GPU to render without waiting for CPU sync
    });

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  // ── Keep framesRef in sync when manifest prop changes ─────────────────────
  useLayoutEffect(() => {
    const isMob = isMobileRef.current;
    framesRef.current = (isMob && manifest.mobile?.length)
      ? manifest.mobile
      : manifest.desktop;
    // Reset lerp so next scene starts from frame 0 smoothly
    lerpFrameRef.current = 0;
    lastDrawnRef.current = -1;
  }, [manifest]);

  // ── Bootstrap: load frame 0, then silently preload next 8 ────────────────
  useLayoutEffect(() => {
    const frames = framesRef.current;
    if (!frames?.length) return;

    const src0 = frames[0];

    if (imgCache.has(src0)) {
      readyRef.current = true;
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      for (let i = 1; i < Math.min(8, frames.length); i++) preload(frames[i]);
      return;
    }

    inFlight.add(src0);
    const img = new Image();
    img.onload = () => {
      lruEvict();
      imgCache.set(src0, img);
      inFlight.delete(src0);
      dlStats.frames++;
      readyRef.current = true;
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      for (let i = 1; i < Math.min(8, frames.length); i++) preload(frames[i]);
    };
    img.onerror = () => inFlight.delete(src0);
    img.src = src0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  // ── Preload hint: warm up first N frames of next sequence ─────────────────
  useEffect(() => {
    if (!preloadHint?.length) return;
    const t = setTimeout(() => preloadHint.forEach(preload), 1200);
    return () => clearTimeout(t);
  }, [preloadHint]);

  // ── MAIN RENDER LOOP via gsap.ticker ─────────────────────────────────────
  // ─ Point 1: Math and render are decoupled.
  //   GSAP ScrollTrigger onUpdate only writes to progressRef (no drawing!).
  //   gsap.ticker fires ONCE per monitor frame regardless of how fast the
  //   user scrolls. That's where we lerp + drawImage.
  useEffect(() => {
    if (!firstFrameReady) return;

    const tickerFn = () => {
      const canvas = canvasRef.current;
      const ctx    = ctxRef.current;
      if (!canvas || !ctx) return;

      const frames = framesRef.current;
      if (!frames?.length) return;

      const total = frames.length;

      // ─ Compute target frame from current (smoothed by GSAP scrub) progress
      const target = Math.max(0, Math.min(total - 1, progressRef.current * (total - 1)));

      // ─ Lerp smoothly toward target (eliminates integer-index micro-jumps)
      lerpFrameRef.current += (target - lerpFrameRef.current) * LERP_SPEED;

      // ─ Point 2: clamp + round safely
      const idx = Math.min(total - 1, Math.max(0, Math.round(lerpFrameRef.current)));

      // ─ Preload window around current index
      const lo = Math.max(0, idx - PRELOAD_BEHIND);
      const hi = Math.min(total - 1, idx + PRELOAD_AHEAD);
      for (let i = lo; i <= hi; i++) preload(frames[i]);

      // ─ Skip draw if index hasn't changed
      if (idx === lastDrawnRef.current) return;

      // ─ Find best image: exact → nearest neighbor → last good
      let img = imgCache.get(frames[idx]);

      if (!img) {
        for (let off = 1; off <= 8; off++) {
          const prev = frames[idx - off];
          if (prev && imgCache.has(prev)) { img = imgCache.get(prev); break; }
          const next = frames[idx + off];
          if (next && imgCache.has(next)) { img = imgCache.get(next); break; }
        }
      }
      if (!img) img = lastGoodImgRef.current;

      // ─ Point 2: safe draw — check img exists and is decoded
      if (!img || !img.complete || !img.naturalWidth) return;

      // ─ Cover-fit calculation
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale, dh = ih * scale;
      const dx = (cw - dw) / 2, dy = (ch - dh) / 2;

      // ─ With alpha:false, drawImage overwrites pixels directly — no clearRect needed
      ctx.drawImage(img, dx, dy, dw, dh);

      lastGoodImgRef.current = img;
      lastDrawnRef.current   = idx;

      // Debug panel re-render (throttled to actual draws)
      if (debug) setDebugTick(n => n + 1);
    };

    gsap.ticker.add(tickerFn);
    return () => gsap.ticker.remove(tickerFn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstFrameReady, manifest, debug]);

  // ─── Render ───────────────────────────────────────────────────────────────
  const frames      = framesRef.current;
  const totalFrames = frames?.length ?? 0;

  return (
    <>
      <canvas
        ref={canvasRef}
        className={className}
        style={style}
      />

      {debug && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed top-4 left-4 bg-black/85 text-green-400 p-3 rounded-lg
                     text-[11px] font-mono space-y-0.5 backdrop-blur-sm pointer-events-none"
        >
          <div className="text-yellow-400 font-bold text-xs mb-1">⚡ DEBUG</div>
          <div>Frame:    <b>{lastDrawnRef.current}</b> / {totalFrames - 1}</div>
          <div>LerpIdx:  {lerpFrameRef.current.toFixed(1)}</div>
          <div>Target:   {(progressRef.current * (totalFrames - 1)).toFixed(1)}</div>
          <div>Progress: {(progress * 100).toFixed(1)}%</div>
          <div>ImgCache: {imgCache.size} / {MAX_CACHE}</div>
          <div>InFlight: {inFlight.size}</div>
          <div>DL'd:     {dlStats.frames} imgs</div>
          <div>Mode:     {isMobileRef.current ? '📱 Mobile' : '🖥 Desktop'}</div>
          <div>α:false   desync ✅</div>
          <div>Ready:    {firstFrameReady ? '✅' : '⏳'}</div>
        </div>
      )}
    </>
  );
}
````

## src\components\Gallery.jsx

``jsx
import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Gallery</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Gallery</p>
      </div>
    </section>
  );
}
````

## src\components\Header.jsx

``jsx
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
      <div className="text-xl tracking-widest uppercase font-light pointer-events-auto">HOLDING</div>
      <nav className="hidden md:flex gap-8 text-sm tracking-wide pointer-events-auto">
        <a href="#about" className="hover:text-brand-gold transition-colors">О проекте</a>
        <a href="#gallery" className="hover:text-brand-gold transition-colors">Галерея</a>
        <a href="#layouts" className="hover:text-brand-gold transition-colors">Планировки</a>
      </nav>
      <button className="text-sm tracking-wide uppercase hover:text-brand-gold transition-colors pointer-events-auto">
        Меню
      </button>
    </header>
  );
}
````

## src\components\Hero.jsx

``jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl" ref={titleRef}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-brand-light mb-6 tracking-wide">
          Пространство, в которое<br />хочется войти
        </h1>
        <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-2xl mx-auto font-light">
          Современная архитектура, городская энергия и комфорт в одном месте.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-brand-gold text-brand-bg uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-300">
            Исследовать проект
          </button>
          <button className="px-8 py-3 border border-brand-gold/50 text-brand-gold uppercase tracking-widest text-sm hover:bg-brand-gold/10 transition-colors duration-300">
            Связаться с нами
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
````

## src\components\Infrastructure.jsx

``jsx
import React from 'react';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Infrastructure</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Infrastructure</p>
      </div>
    </section>
  );
}
````

## src\components\InteriorReveal.jsx

``jsx
import React from 'react';
import { projectInfo } from '../data/projectContent';

export default function InteriorReveal() {
  return (
    <section className="w-full min-h-screen bg-brand-light text-brand-bg py-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-sm tracking-widest uppercase text-brand-gold mb-4">Интерьер</h2>
        <p className="text-3xl md:text-5xl font-light leading-tight">
          {projectInfo.about}
        </p>
      </div>
      
      <div className="w-full max-w-6xl aspect-video bg-gray-200 relative overflow-hidden group">
        <img 
          src={projectInfo.gallery[0]} 
          alt="Interior Placeholder" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Placeholder for Hotspots later */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse cursor-pointer">
           <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Материалы
           </div>
        </div>
      </div>
    </section>
  );
}
````

## src\components\Layouts.jsx

``jsx
import React from 'react';

export default function Layouts() {
  return (
    <section id="layouts" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Layouts</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Layouts</p>
      </div>
    </section>
  );
}
````

## src\components\LeadForm.jsx

``jsx
import React from 'react';

export default function LeadForm() {
  return (
    <section id="leadform" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">LeadForm</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции LeadForm</p>
      </div>
    </section>
  );
}
````

## src\components\Loader.jsx

``jsx
import React from 'react';

export default function Loader() {
  return (
    <section id="loader" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Loader</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Loader</p>
      </div>
    </section>
  );
}
````

## src\components\Location.jsx

``jsx
import React from 'react';

export default function Location() {
  return (
    <section id="location" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Location</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Location</p>
      </div>
    </section>
  );
}
````

## src\data\mediaManifest.js

``js

// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = [
  "/media/earth/desktop/Без названия_000.webp",
  "/media/earth/desktop/Без названия_001.webp",
  "/media/earth/desktop/Без названия_002.webp",
  "/media/earth/desktop/Без названия_003.webp",
  "/media/earth/desktop/Без названия_004.webp",
  "/media/earth/desktop/Без названия_005.webp",
  "/media/earth/desktop/Без названия_006.webp",
  "/media/earth/desktop/Без названия_007.webp",
  "/media/earth/desktop/Без названия_008.webp",
  "/media/earth/desktop/Без названия_009.webp",
  "/media/earth/desktop/Без названия_010.webp",
  "/media/earth/desktop/Без названия_011.webp",
  "/media/earth/desktop/Без названия_012.webp",
  "/media/earth/desktop/Без названия_013.webp",
  "/media/earth/desktop/Без названия_014.webp",
  "/media/earth/desktop/Без названия_015.webp",
  "/media/earth/desktop/Без названия_016.webp",
  "/media/earth/desktop/Без названия_017.webp",
  "/media/earth/desktop/Без названия_018.webp",
  "/media/earth/desktop/Без названия_019.webp",
  "/media/earth/desktop/Без названия_020.webp",
  "/media/earth/desktop/Без названия_021.webp",
  "/media/earth/desktop/Без названия_022.webp",
  "/media/earth/desktop/Без названия_023.webp",
  "/media/earth/desktop/Без названия_024.webp",
  "/media/earth/desktop/Без названия_025.webp",
  "/media/earth/desktop/Без названия_026.webp",
  "/media/earth/desktop/Без названия_027.webp",
  "/media/earth/desktop/Без названия_028.webp",
  "/media/earth/desktop/Без названия_029.webp",
  "/media/earth/desktop/Без названия_030.webp",
  "/media/earth/desktop/Без названия_031.webp",
  "/media/earth/desktop/Без названия_032.webp",
  "/media/earth/desktop/Без названия_033.webp",
  "/media/earth/desktop/Без названия_034.webp",
  "/media/earth/desktop/Без названия_035.webp",
  "/media/earth/desktop/Без названия_036.webp",
  "/media/earth/desktop/Без названия_037.webp",
  "/media/earth/desktop/Без названия_038.webp",
  "/media/earth/desktop/Без названия_039.webp",
  "/media/earth/desktop/Без названия_040.webp",
  "/media/earth/desktop/Без названия_041.webp",
  "/media/earth/desktop/Без названия_042.webp",
  "/media/earth/desktop/Без названия_043.webp",
  "/media/earth/desktop/Без названия_044.webp",
  "/media/earth/desktop/Без названия_045.webp",
  "/media/earth/desktop/Без названия_046.webp",
  "/media/earth/desktop/Без названия_047.webp",
  "/media/earth/desktop/Без названия_048.webp",
  "/media/earth/desktop/Без названия_049.webp",
  "/media/earth/desktop/Без названия_050.webp",
  "/media/earth/desktop/Без названия_051.webp",
  "/media/earth/desktop/Без названия_052.webp",
  "/media/earth/desktop/Без названия_053.webp",
  "/media/earth/desktop/Без названия_054.webp",
  "/media/earth/desktop/Без названия_055.webp",
  "/media/earth/desktop/Без названия_056.webp",
  "/media/earth/desktop/Без названия_057.webp",
  "/media/earth/desktop/Без названия_058.webp",
  "/media/earth/desktop/Без названия_059.webp",
  "/media/earth/desktop/Без названия_060.webp",
  "/media/earth/desktop/Без названия_061.webp",
  "/media/earth/desktop/Без названия_062.webp",
  "/media/earth/desktop/Без названия_063.webp",
  "/media/earth/desktop/Без названия_064.webp",
  "/media/earth/desktop/Без названия_065.webp",
  "/media/earth/desktop/Без названия_066.webp",
  "/media/earth/desktop/Без названия_067.webp",
  "/media/earth/desktop/Без названия_068.webp",
  "/media/earth/desktop/Без названия_069.webp",
  "/media/earth/desktop/Без названия_070.webp",
  "/media/earth/desktop/Без названия_071.webp",
  "/media/earth/desktop/Без названия_072.webp",
  "/media/earth/desktop/Без названия_073.webp",
  "/media/earth/desktop/Без названия_074.webp",
  "/media/earth/desktop/Без названия_075.webp",
  "/media/earth/desktop/Без названия_076.webp",
  "/media/earth/desktop/Без названия_077.webp",
  "/media/earth/desktop/Без названия_078.webp",
  "/media/earth/desktop/Без названия_079.webp",
  "/media/earth/desktop/Без названия_080.webp",
  "/media/earth/desktop/Без названия_081.webp",
  "/media/earth/desktop/Без названия_082.webp",
  "/media/earth/desktop/Без названия_083.webp",
  "/media/earth/desktop/Без названия_084.webp",
  "/media/earth/desktop/Без названия_085.webp",
  "/media/earth/desktop/Без названия_086.webp",
  "/media/earth/desktop/Без названия_087.webp",
  "/media/earth/desktop/Без названия_088.webp",
  "/media/earth/desktop/Без названия_089.webp",
  "/media/earth/desktop/Без названия_090.webp",
  "/media/earth/desktop/Без названия_091.webp",
  "/media/earth/desktop/Без названия_092.webp",
  "/media/earth/desktop/Без названия_093.webp",
  "/media/earth/desktop/Без названия_094.webp",
  "/media/earth/desktop/Без названия_095.webp",
  "/media/earth/desktop/Без названия_096.webp",
  "/media/earth/desktop/Без названия_097.webp",
  "/media/earth/desktop/Без названия_098.webp",
  "/media/earth/desktop/Без названия_099.webp",
  "/media/earth/desktop/Без названия_100.webp",
  "/media/earth/desktop/Без названия_101.webp",
  "/media/earth/desktop/Без названия_102.webp",
  "/media/earth/desktop/Без названия_103.webp",
  "/media/earth/desktop/Без названия_104.webp",
  "/media/earth/desktop/Без названия_105.webp",
  "/media/earth/desktop/Без названия_106.webp",
  "/media/earth/desktop/Без названия_107.webp",
  "/media/earth/desktop/Без названия_108.webp",
  "/media/earth/desktop/Без названия_109.webp",
  "/media/earth/desktop/Без названия_110.webp",
  "/media/earth/desktop/Без названия_111.webp",
  "/media/earth/desktop/Без названия_112.webp",
  "/media/earth/desktop/Без названия_113.webp",
  "/media/earth/desktop/Без названия_114.webp",
  "/media/earth/desktop/Без названия_115.webp",
  "/media/earth/desktop/Без названия_116.webp",
  "/media/earth/desktop/Без названия_117.webp",
  "/media/earth/desktop/Без названия_118.webp",
  "/media/earth/desktop/Без названия_119.webp",
  "/media/earth/desktop/Без названия_120.webp",
  "/media/earth/desktop/Без названия_121.webp",
  "/media/earth/desktop/Без названия_122.webp",
  "/media/earth/desktop/Без названия_123.webp",
  "/media/earth/desktop/Без названия_124.webp",
  "/media/earth/desktop/Без названия_125.webp",
  "/media/earth/desktop/Без названия_126.webp",
  "/media/earth/desktop/Без названия_127.webp",
  "/media/earth/desktop/Без названия_128.webp",
  "/media/earth/desktop/Без названия_129.webp",
  "/media/earth/desktop/Без названия_130.webp",
  "/media/earth/desktop/Без названия_131.webp",
  "/media/earth/desktop/Без названия_132.webp",
  "/media/earth/desktop/Без названия_133.webp",
  "/media/earth/desktop/Без названия_134.webp",
  "/media/earth/desktop/Без названия_135.webp",
  "/media/earth/desktop/Без названия_136.webp",
  "/media/earth/desktop/Без названия_137.webp",
  "/media/earth/desktop/Без названия_138.webp",
  "/media/earth/desktop/Без названия_139.webp",
  "/media/earth/desktop/Без названия_140.webp",
  "/media/earth/desktop/Без названия_141.webp",
  "/media/earth/desktop/Без названия_142.webp",
  "/media/earth/desktop/Без названия_143.webp",
  "/media/earth/desktop/Без названия_144.webp",
  "/media/earth/desktop/Без названия_145.webp",
  "/media/earth/desktop/Без названия_146.webp",
  "/media/earth/desktop/Без названия_147.webp",
  "/media/earth/desktop/Без названия_148.webp",
  "/media/earth/desktop/Без названия_149.webp",
  "/media/earth/desktop/Без названия_150.webp",
  "/media/earth/desktop/Без названия_151.webp",
  "/media/earth/desktop/Без названия_152.webp",
  "/media/earth/desktop/Без названия_153.webp",
  "/media/earth/desktop/Без названия_154.webp",
  "/media/earth/desktop/Без названия_155.webp",
  "/media/earth/desktop/Без названия_156.webp",
  "/media/earth/desktop/Без названия_157.webp",
  "/media/earth/desktop/Без названия_158.webp",
  "/media/earth/desktop/Без названия_159.webp",
  "/media/earth/desktop/Без названия_160.webp",
  "/media/earth/desktop/Без названия_161.webp",
  "/media/earth/desktop/Без названия_162.webp",
  "/media/earth/desktop/Без названия_163.webp",
  "/media/earth/desktop/Без названия_164.webp",
  "/media/earth/desktop/Без названия_165.webp",
  "/media/earth/desktop/Без названия_166.webp",
  "/media/earth/desktop/Без названия_167.webp",
  "/media/earth/desktop/Без названия_168.webp",
  "/media/earth/desktop/Без названия_169.webp",
  "/media/earth/desktop/Без названия_170.webp",
  "/media/earth/desktop/Без названия_171.webp",
  "/media/earth/desktop/Без названия_172.webp",
  "/media/earth/desktop/Без названия_173.webp",
  "/media/earth/desktop/Без названия_174.webp",
  "/media/earth/desktop/Без названия_175.webp",
  "/media/earth/desktop/Без названия_176.webp",
  "/media/earth/desktop/Без названия_177.webp",
  "/media/earth/desktop/Без названия_178.webp",
  "/media/earth/desktop/Без названия_179.webp",
  "/media/earth/desktop/Без названия_180.webp",
  "/media/earth/desktop/Без названия_181.webp",
  "/media/earth/desktop/Без названия_182.webp",
  "/media/earth/desktop/Без названия_183.webp",
  "/media/earth/desktop/Без названия_184.webp",
  "/media/earth/desktop/Без названия_185.webp",
  "/media/earth/desktop/Без названия_186.webp",
  "/media/earth/desktop/Без названия_187.webp",
  "/media/earth/desktop/Без названия_188.webp",
  "/media/earth/desktop/Без названия_189.webp",
  "/media/earth/desktop/Без названия_190.webp",
  "/media/earth/desktop/Без названия_191.webp",
  "/media/earth/desktop/Без названия_192.webp",
  "/media/earth/desktop/Без названия_193.webp",
  "/media/earth/desktop/Без названия_194.webp",
  "/media/earth/desktop/Без названия_195.webp",
  "/media/earth/desktop/Без названия_196.webp",
  "/media/earth/desktop/Без названия_197.webp",
  "/media/earth/desktop/Без названия_198.webp",
  "/media/earth/desktop/Без названия_199.webp",
  "/media/earth/desktop/Без названия_200.webp",
  "/media/earth/desktop/Без названия_201.webp",
  "/media/earth/desktop/Без названия_202.webp",
  "/media/earth/desktop/Без названия_203.webp",
  "/media/earth/desktop/Без названия_204.webp",
  "/media/earth/desktop/Без названия_205.webp",
  "/media/earth/desktop/Без названия_206.webp",
  "/media/earth/desktop/Без названия_207.webp",
  "/media/earth/desktop/Без названия_208.webp",
  "/media/earth/desktop/Без названия_209.webp",
  "/media/earth/desktop/Без названия_210.webp",
  "/media/earth/desktop/Без названия_211.webp",
  "/media/earth/desktop/Без названия_212.webp",
  "/media/earth/desktop/Без названия_213.webp",
  "/media/earth/desktop/Без названия_214.webp",
  "/media/earth/desktop/Без названия_215.webp",
  "/media/earth/desktop/Без названия_216.webp",
  "/media/earth/desktop/Без названия_217.webp",
  "/media/earth/desktop/Без названия_218.webp",
  "/media/earth/desktop/Без названия_219.webp",
  "/media/earth/desktop/Без названия_220.webp",
  "/media/earth/desktop/Без названия_221.webp",
  "/media/earth/desktop/Без названия_222.webp",
  "/media/earth/desktop/Без названия_223.webp",
  "/media/earth/desktop/Без названия_224.webp",
  "/media/earth/desktop/Без названия_225.webp",
  "/media/earth/desktop/Без названия_226.webp",
  "/media/earth/desktop/Без названия_227.webp",
  "/media/earth/desktop/Без названия_228.webp",
  "/media/earth/desktop/Без названия_229.webp",
  "/media/earth/desktop/Без названия_230.webp",
  "/media/earth/desktop/Без названия_231.webp",
  "/media/earth/desktop/Без названия_232.webp",
  "/media/earth/desktop/Без названия_233.webp",
  "/media/earth/desktop/Без названия_234.webp",
  "/media/earth/desktop/Без названия_235.webp",
  "/media/earth/desktop/Без названия_236.webp",
  "/media/earth/desktop/Без названия_237.webp",
  "/media/earth/desktop/Без названия_238.webp",
  "/media/earth/desktop/Без названия_239.webp",
  "/media/earth/desktop/Без названия_240.webp"
];
export const earthMobileFrames = [
  "/media/earth/mobile/Без названия_000.webp",
  "/media/earth/mobile/Без названия_002.webp",
  "/media/earth/mobile/Без названия_004.webp",
  "/media/earth/mobile/Без названия_006.webp",
  "/media/earth/mobile/Без названия_008.webp",
  "/media/earth/mobile/Без названия_010.webp",
  "/media/earth/mobile/Без названия_012.webp",
  "/media/earth/mobile/Без названия_014.webp",
  "/media/earth/mobile/Без названия_016.webp",
  "/media/earth/mobile/Без названия_018.webp",
  "/media/earth/mobile/Без названия_020.webp",
  "/media/earth/mobile/Без названия_022.webp",
  "/media/earth/mobile/Без названия_024.webp",
  "/media/earth/mobile/Без названия_026.webp",
  "/media/earth/mobile/Без названия_028.webp",
  "/media/earth/mobile/Без названия_030.webp",
  "/media/earth/mobile/Без названия_032.webp",
  "/media/earth/mobile/Без названия_034.webp",
  "/media/earth/mobile/Без названия_036.webp",
  "/media/earth/mobile/Без названия_038.webp",
  "/media/earth/mobile/Без названия_040.webp",
  "/media/earth/mobile/Без названия_042.webp",
  "/media/earth/mobile/Без названия_044.webp",
  "/media/earth/mobile/Без названия_046.webp",
  "/media/earth/mobile/Без названия_048.webp",
  "/media/earth/mobile/Без названия_050.webp",
  "/media/earth/mobile/Без названия_052.webp",
  "/media/earth/mobile/Без названия_054.webp",
  "/media/earth/mobile/Без названия_056.webp",
  "/media/earth/mobile/Без названия_058.webp",
  "/media/earth/mobile/Без названия_060.webp",
  "/media/earth/mobile/Без названия_062.webp",
  "/media/earth/mobile/Без названия_064.webp",
  "/media/earth/mobile/Без названия_066.webp",
  "/media/earth/mobile/Без названия_068.webp",
  "/media/earth/mobile/Без названия_070.webp",
  "/media/earth/mobile/Без названия_072.webp",
  "/media/earth/mobile/Без названия_074.webp",
  "/media/earth/mobile/Без названия_076.webp",
  "/media/earth/mobile/Без названия_078.webp",
  "/media/earth/mobile/Без названия_080.webp",
  "/media/earth/mobile/Без названия_082.webp",
  "/media/earth/mobile/Без названия_084.webp",
  "/media/earth/mobile/Без названия_086.webp",
  "/media/earth/mobile/Без названия_088.webp",
  "/media/earth/mobile/Без названия_090.webp",
  "/media/earth/mobile/Без названия_092.webp",
  "/media/earth/mobile/Без названия_094.webp",
  "/media/earth/mobile/Без названия_096.webp",
  "/media/earth/mobile/Без названия_098.webp",
  "/media/earth/mobile/Без названия_100.webp",
  "/media/earth/mobile/Без названия_102.webp",
  "/media/earth/mobile/Без названия_104.webp",
  "/media/earth/mobile/Без названия_106.webp",
  "/media/earth/mobile/Без названия_108.webp",
  "/media/earth/mobile/Без названия_110.webp",
  "/media/earth/mobile/Без названия_112.webp",
  "/media/earth/mobile/Без названия_114.webp",
  "/media/earth/mobile/Без названия_116.webp",
  "/media/earth/mobile/Без названия_118.webp",
  "/media/earth/mobile/Без названия_120.webp",
  "/media/earth/mobile/Без названия_122.webp",
  "/media/earth/mobile/Без названия_124.webp",
  "/media/earth/mobile/Без названия_126.webp",
  "/media/earth/mobile/Без названия_128.webp",
  "/media/earth/mobile/Без названия_130.webp",
  "/media/earth/mobile/Без названия_132.webp",
  "/media/earth/mobile/Без названия_134.webp",
  "/media/earth/mobile/Без названия_136.webp",
  "/media/earth/mobile/Без названия_138.webp",
  "/media/earth/mobile/Без названия_140.webp",
  "/media/earth/mobile/Без названия_142.webp",
  "/media/earth/mobile/Без названия_144.webp",
  "/media/earth/mobile/Без названия_146.webp",
  "/media/earth/mobile/Без названия_148.webp",
  "/media/earth/mobile/Без названия_150.webp",
  "/media/earth/mobile/Без названия_152.webp",
  "/media/earth/mobile/Без названия_154.webp",
  "/media/earth/mobile/Без названия_156.webp",
  "/media/earth/mobile/Без названия_158.webp",
  "/media/earth/mobile/Без названия_160.webp",
  "/media/earth/mobile/Без названия_162.webp",
  "/media/earth/mobile/Без названия_164.webp",
  "/media/earth/mobile/Без названия_166.webp",
  "/media/earth/mobile/Без названия_168.webp",
  "/media/earth/mobile/Без названия_170.webp",
  "/media/earth/mobile/Без названия_172.webp",
  "/media/earth/mobile/Без названия_174.webp",
  "/media/earth/mobile/Без названия_176.webp",
  "/media/earth/mobile/Без названия_178.webp",
  "/media/earth/mobile/Без названия_180.webp",
  "/media/earth/mobile/Без названия_182.webp",
  "/media/earth/mobile/Без названия_184.webp",
  "/media/earth/mobile/Без названия_186.webp",
  "/media/earth/mobile/Без названия_188.webp",
  "/media/earth/mobile/Без названия_190.webp",
  "/media/earth/mobile/Без названия_192.webp",
  "/media/earth/mobile/Без названия_194.webp",
  "/media/earth/mobile/Без названия_196.webp",
  "/media/earth/mobile/Без названия_198.webp",
  "/media/earth/mobile/Без названия_200.webp",
  "/media/earth/mobile/Без названия_202.webp",
  "/media/earth/mobile/Без названия_204.webp",
  "/media/earth/mobile/Без названия_206.webp",
  "/media/earth/mobile/Без названия_208.webp",
  "/media/earth/mobile/Без названия_210.webp",
  "/media/earth/mobile/Без названия_212.webp",
  "/media/earth/mobile/Без названия_214.webp",
  "/media/earth/mobile/Без названия_216.webp",
  "/media/earth/mobile/Без названия_218.webp",
  "/media/earth/mobile/Без названия_220.webp",
  "/media/earth/mobile/Без названия_222.webp",
  "/media/earth/mobile/Без названия_224.webp",
  "/media/earth/mobile/Без названия_226.webp",
  "/media/earth/mobile/Без названия_228.webp",
  "/media/earth/mobile/Без названия_230.webp",
  "/media/earth/mobile/Без названия_232.webp",
  "/media/earth/mobile/Без названия_234.webp",
  "/media/earth/mobile/Без названия_236.webp",
  "/media/earth/mobile/Без названия_238.webp",
  "/media/earth/mobile/Без названия_240.webp"
];
export const holdingDesktopFrames = [
  "/media/holding/desktop/0629 (1)_000001.webp",
  "/media/holding/desktop/0629 (1)_000002.webp",
  "/media/holding/desktop/0629 (1)_000003.webp",
  "/media/holding/desktop/0629 (1)_000004.webp",
  "/media/holding/desktop/0629 (1)_000005.webp",
  "/media/holding/desktop/0629 (1)_000006.webp",
  "/media/holding/desktop/0629 (1)_000007.webp",
  "/media/holding/desktop/0629 (1)_000008.webp",
  "/media/holding/desktop/0629 (1)_000009.webp",
  "/media/holding/desktop/0629 (1)_000010.webp",
  "/media/holding/desktop/0629 (1)_000011.webp",
  "/media/holding/desktop/0629 (1)_000012.webp",
  "/media/holding/desktop/0629 (1)_000013.webp",
  "/media/holding/desktop/0629 (1)_000014.webp",
  "/media/holding/desktop/0629 (1)_000015.webp",
  "/media/holding/desktop/0629 (1)_000016.webp",
  "/media/holding/desktop/0629 (1)_000017.webp",
  "/media/holding/desktop/0629 (1)_000018.webp",
  "/media/holding/desktop/0629 (1)_000019.webp",
  "/media/holding/desktop/0629 (1)_000020.webp",
  "/media/holding/desktop/0629 (1)_000021.webp",
  "/media/holding/desktop/0629 (1)_000022.webp",
  "/media/holding/desktop/0629 (1)_000023.webp",
  "/media/holding/desktop/0629 (1)_000024.webp",
  "/media/holding/desktop/0629 (1)_000025.webp",
  "/media/holding/desktop/0629 (1)_000026.webp",
  "/media/holding/desktop/0629 (1)_000027.webp",
  "/media/holding/desktop/0629 (1)_000028.webp",
  "/media/holding/desktop/0629 (1)_000029.webp",
  "/media/holding/desktop/0629 (1)_000030.webp",
  "/media/holding/desktop/0629 (1)_000031.webp",
  "/media/holding/desktop/0629 (1)_000032.webp",
  "/media/holding/desktop/0629 (1)_000033.webp",
  "/media/holding/desktop/0629 (1)_000034.webp",
  "/media/holding/desktop/0629 (1)_000035.webp",
  "/media/holding/desktop/0629 (1)_000036.webp",
  "/media/holding/desktop/0629 (1)_000039.webp",
  "/media/holding/desktop/0629 (1)_000040.webp",
  "/media/holding/desktop/0629 (1)_000041.webp",
  "/media/holding/desktop/0629 (1)_000042.webp",
  "/media/holding/desktop/0629 (1)_000043.webp",
  "/media/holding/desktop/0629 (1)_000044.webp",
  "/media/holding/desktop/0629 (1)_000045.webp",
  "/media/holding/desktop/0629 (1)_000046.webp",
  "/media/holding/desktop/0629 (1)_000047.webp",
  "/media/holding/desktop/0629 (1)_000048.webp",
  "/media/holding/desktop/0629 (1)_000049.webp",
  "/media/holding/desktop/0629 (1)_000050.webp",
  "/media/holding/desktop/0629 (1)_000051.webp",
  "/media/holding/desktop/0629 (1)_000052.webp",
  "/media/holding/desktop/0629 (1)_000053.webp",
  "/media/holding/desktop/0629 (1)_000054.webp",
  "/media/holding/desktop/0629 (1)_000055.webp",
  "/media/holding/desktop/0629 (1)_000056.webp",
  "/media/holding/desktop/0629 (1)_000057.webp",
  "/media/holding/desktop/0629 (1)_000058.webp",
  "/media/holding/desktop/0629 (1)_000059.webp",
  "/media/holding/desktop/0629 (1)_000060.webp",
  "/media/holding/desktop/0629 (1)_000061.webp",
  "/media/holding/desktop/0629 (1)_000062.webp",
  "/media/holding/desktop/0629 (1)_000063.webp",
  "/media/holding/desktop/0629 (1)_000064.webp",
  "/media/holding/desktop/0629 (1)_000065.webp",
  "/media/holding/desktop/0629 (1)_000066.webp",
  "/media/holding/desktop/0629 (1)_000067.webp",
  "/media/holding/desktop/0629 (1)_000068.webp",
  "/media/holding/desktop/0629 (1)_000069.webp",
  "/media/holding/desktop/0629 (1)_000070.webp",
  "/media/holding/desktop/0629 (1)_000071.webp",
  "/media/holding/desktop/0629 (1)_000072.webp",
  "/media/holding/desktop/0629 (1)_000073.webp",
  "/media/holding/desktop/0629 (1)_000074.webp",
  "/media/holding/desktop/0629 (1)_000075.webp",
  "/media/holding/desktop/0629 (1)_000076.webp",
  "/media/holding/desktop/0629 (1)_000077.webp",
  "/media/holding/desktop/0629 (1)_000078.webp",
  "/media/holding/desktop/0629 (1)_000079.webp",
  "/media/holding/desktop/0629 (1)_000080.webp",
  "/media/holding/desktop/0629 (1)_000081.webp",
  "/media/holding/desktop/0629 (1)_000082.webp",
  "/media/holding/desktop/0629 (1)_000083.webp",
  "/media/holding/desktop/0629 (1)_000084.webp",
  "/media/holding/desktop/0629 (1)_000085.webp",
  "/media/holding/desktop/0629 (1)_000086.webp",
  "/media/holding/desktop/0629 (1)_000087.webp",
  "/media/holding/desktop/0629 (1)_000088.webp",
  "/media/holding/desktop/0629 (1)_000089.webp",
  "/media/holding/desktop/0629 (1)_000090.webp",
  "/media/holding/desktop/0629 (1)_000091.webp",
  "/media/holding/desktop/0629 (1)_000092.webp",
  "/media/holding/desktop/0629 (1)_000093.webp",
  "/media/holding/desktop/0629 (1)_000094.webp",
  "/media/holding/desktop/0629 (1)_000095.webp",
  "/media/holding/desktop/0629 (1)_000096.webp",
  "/media/holding/desktop/0629 (1)_000097.webp",
  "/media/holding/desktop/0629 (1)_000098.webp",
  "/media/holding/desktop/0629 (1)_000099.webp",
  "/media/holding/desktop/0629 (1)_000100.webp",
  "/media/holding/desktop/0629 (1)_000101.webp",
  "/media/holding/desktop/0629 (1)_000102.webp",
  "/media/holding/desktop/0629 (1)_000103.webp",
  "/media/holding/desktop/0629 (1)_000104.webp",
  "/media/holding/desktop/0629 (1)_000105.webp",
  "/media/holding/desktop/0629 (1)_000106.webp",
  "/media/holding/desktop/0629 (1)_000107.webp",
  "/media/holding/desktop/0629 (1)_000108.webp",
  "/media/holding/desktop/0629 (1)_000109.webp",
  "/media/holding/desktop/0629 (1)_000110.webp",
  "/media/holding/desktop/0629 (1)_000111.webp",
  "/media/holding/desktop/0629 (1)_000112.webp",
  "/media/holding/desktop/0629 (1)_000113.webp",
  "/media/holding/desktop/0629 (1)_000114.webp",
  "/media/holding/desktop/0629 (1)_000115.webp",
  "/media/holding/desktop/0629 (1)_000116.webp",
  "/media/holding/desktop/0629 (1)_000117.webp",
  "/media/holding/desktop/0629 (1)_000118.webp",
  "/media/holding/desktop/0629 (1)_000119.webp",
  "/media/holding/desktop/0629 (1)_000120.webp",
  "/media/holding/desktop/0629 (1)_000121.webp",
  "/media/holding/desktop/0629 (1)_000122.webp",
  "/media/holding/desktop/0629 (1)_000123.webp",
  "/media/holding/desktop/0629 (1)_000124.webp",
  "/media/holding/desktop/0629 (1)_000125.webp",
  "/media/holding/desktop/0629 (1)_000126.webp",
  "/media/holding/desktop/0629 (1)_000127.webp",
  "/media/holding/desktop/0629 (1)_000128.webp",
  "/media/holding/desktop/0629 (1)_000129.webp",
  "/media/holding/desktop/0629 (1)_000130.webp",
  "/media/holding/desktop/0629 (1)_000131.webp",
  "/media/holding/desktop/0629 (1)_000132.webp",
  "/media/holding/desktop/0629 (1)_000133.webp",
  "/media/holding/desktop/0629 (1)_000134.webp",
  "/media/holding/desktop/0629 (1)_000135.webp",
  "/media/holding/desktop/0629 (1)_000136.webp",
  "/media/holding/desktop/0629 (1)_000137.webp",
  "/media/holding/desktop/0629 (1)_000138.webp",
  "/media/holding/desktop/0629 (1)_000139.webp",
  "/media/holding/desktop/0629 (1)_000140.webp",
  "/media/holding/desktop/0629 (1)_000141.webp",
  "/media/holding/desktop/0629 (1)_000142.webp",
  "/media/holding/desktop/0629 (1)_000143.webp",
  "/media/holding/desktop/0629 (1)_000144.webp",
  "/media/holding/desktop/0629 (1)_000145.webp",
  "/media/holding/desktop/0629 (1)_000146.webp",
  "/media/holding/desktop/0629 (1)_000147.webp",
  "/media/holding/desktop/0629 (1)_000148.webp",
  "/media/holding/desktop/0629 (1)_000149.webp",
  "/media/holding/desktop/0629 (1)_000150.webp",
  "/media/holding/desktop/0629 (1)_000151.webp",
  "/media/holding/desktop/0629 (1)_000152.webp",
  "/media/holding/desktop/0629 (1)_000153.webp",
  "/media/holding/desktop/0629 (1)_000154.webp",
  "/media/holding/desktop/0629 (1)_000155.webp",
  "/media/holding/desktop/0629 (1)_000156.webp",
  "/media/holding/desktop/0629 (1)_000157.webp",
  "/media/holding/desktop/0629 (1)_000158.webp",
  "/media/holding/desktop/0629 (1)_000159.webp",
  "/media/holding/desktop/0629 (1)_000160.webp",
  "/media/holding/desktop/0629 (1)_000161.webp",
  "/media/holding/desktop/0629 (1)_000162.webp",
  "/media/holding/desktop/0629 (1)_000163.webp",
  "/media/holding/desktop/0629 (1)_000164.webp",
  "/media/holding/desktop/0629 (1)_000165.webp",
  "/media/holding/desktop/0629 (1)_000166.webp",
  "/media/holding/desktop/0629 (1)_000167.webp",
  "/media/holding/desktop/0629 (1)_000168.webp",
  "/media/holding/desktop/0629 (1)_000169.webp",
  "/media/holding/desktop/0629 (1)_000170.webp",
  "/media/holding/desktop/0629 (1)_000171.webp",
  "/media/holding/desktop/0629 (1)_000172.webp",
  "/media/holding/desktop/0629 (1)_000173.webp",
  "/media/holding/desktop/0629 (1)_000174.webp",
  "/media/holding/desktop/0629 (1)_000175.webp",
  "/media/holding/desktop/0629 (1)_000176.webp",
  "/media/holding/desktop/0629 (1)_000177.webp",
  "/media/holding/desktop/0629 (1)_000178.webp",
  "/media/holding/desktop/0629 (1)_000179.webp",
  "/media/holding/desktop/0629 (1)_000180.webp",
  "/media/holding/desktop/0629 (1)_000181.webp",
  "/media/holding/desktop/0629 (1)_000182.webp",
  "/media/holding/desktop/0629 (1)_000183.webp",
  "/media/holding/desktop/0629 (1)_000184.webp",
  "/media/holding/desktop/0629 (1)_000185.webp",
  "/media/holding/desktop/0629 (1)_000186.webp",
  "/media/holding/desktop/0629 (1)_000187.webp",
  "/media/holding/desktop/0629 (1)_000188.webp",
  "/media/holding/desktop/0629 (1)_000189.webp",
  "/media/holding/desktop/0629 (1)_000190.webp",
  "/media/holding/desktop/0629 (1)_000191.webp",
  "/media/holding/desktop/0629 (1)_000192.webp",
  "/media/holding/desktop/0629 (1)_000193.webp",
  "/media/holding/desktop/0629 (1)_000194.webp",
  "/media/holding/desktop/0629 (1)_000195.webp",
  "/media/holding/desktop/0629 (1)_000196.webp",
  "/media/holding/desktop/0629 (1)_000197.webp",
  "/media/holding/desktop/0629 (1)_000198.webp",
  "/media/holding/desktop/0629 (1)_000199.webp",
  "/media/holding/desktop/0629 (1)_000200.webp",
  "/media/holding/desktop/0629 (1)_000201.webp",
  "/media/holding/desktop/0629 (1)_000202.webp",
  "/media/holding/desktop/0629 (1)_000203.webp",
  "/media/holding/desktop/0629 (1)_000204.webp",
  "/media/holding/desktop/0629 (1)_000205.webp",
  "/media/holding/desktop/0629 (1)_000206.webp",
  "/media/holding/desktop/0629 (1)_000207.webp",
  "/media/holding/desktop/0629 (1)_000208.webp",
  "/media/holding/desktop/0629 (1)_000209.webp",
  "/media/holding/desktop/0629 (1)_000210.webp",
  "/media/holding/desktop/0629 (1)_000211.webp",
  "/media/holding/desktop/0629 (1)_000212.webp",
  "/media/holding/desktop/0629 (1)_000213.webp",
  "/media/holding/desktop/0629 (1)_000214.webp",
  "/media/holding/desktop/0629 (1)_000215.webp",
  "/media/holding/desktop/0629 (1)_000216.webp",
  "/media/holding/desktop/0629 (1)_000217.webp",
  "/media/holding/desktop/0629 (1)_000218.webp",
  "/media/holding/desktop/0629 (1)_000219.webp",
  "/media/holding/desktop/0629 (1)_000220.webp",
  "/media/holding/desktop/0629 (1)_000221.webp",
  "/media/holding/desktop/0629 (1)_000222.webp",
  "/media/holding/desktop/0629 (1)_000223.webp",
  "/media/holding/desktop/0629 (1)_000224.webp",
  "/media/holding/desktop/0629 (1)_000225.webp",
  "/media/holding/desktop/0629 (1)_000226.webp",
  "/media/holding/desktop/0629 (1)_000227.webp",
  "/media/holding/desktop/0629 (1)_000228.webp",
  "/media/holding/desktop/0629 (1)_000229.webp",
  "/media/holding/desktop/0629 (1)_000230.webp",
  "/media/holding/desktop/0629 (1)_000231.webp",
  "/media/holding/desktop/0629 (1)_000232.webp",
  "/media/holding/desktop/0629 (1)_000233.webp",
  "/media/holding/desktop/0629 (1)_000234.webp",
  "/media/holding/desktop/0629 (1)_000235.webp",
  "/media/holding/desktop/0629 (1)_000236.webp",
  "/media/holding/desktop/0629 (1)_000237.webp",
  "/media/holding/desktop/0629 (1)_000238.webp",
  "/media/holding/desktop/0629 (1)_000239.webp",
  "/media/holding/desktop/0629 (1)_000255.webp",
  "/media/holding/desktop/0629 (1)_000256.webp",
  "/media/holding/desktop/0629 (1)_000257.webp",
  "/media/holding/desktop/0629 (1)_000258.webp",
  "/media/holding/desktop/0629 (1)_000259.webp",
  "/media/holding/desktop/0629 (1)_000260.webp",
  "/media/holding/desktop/0629 (1)_000261.webp",
  "/media/holding/desktop/0629 (1)_000262.webp",
  "/media/holding/desktop/0629 (1)_000263.webp",
  "/media/holding/desktop/0629 (1)_000264.webp",
  "/media/holding/desktop/0629 (1)_000265.webp",
  "/media/holding/desktop/0629 (1)_000266.webp",
  "/media/holding/desktop/0629 (1)_000267.webp",
  "/media/holding/desktop/0629 (1)_000268.webp",
  "/media/holding/desktop/0629 (1)_000269.webp",
  "/media/holding/desktop/0629 (1)_000270.webp",
  "/media/holding/desktop/0629 (1)_000271.webp",
  "/media/holding/desktop/0629 (1)_000272.webp",
  "/media/holding/desktop/0629 (1)_000273.webp",
  "/media/holding/desktop/0629 (1)_000274.webp",
  "/media/holding/desktop/0629 (1)_000275.webp",
  "/media/holding/desktop/0629 (1)_000276.webp",
  "/media/holding/desktop/0629 (1)_000277.webp",
  "/media/holding/desktop/0629 (1)_000278.webp",
  "/media/holding/desktop/0629 (1)_000279.webp",
  "/media/holding/desktop/0629 (1)_000280.webp",
  "/media/holding/desktop/0629 (1)_000281.webp",
  "/media/holding/desktop/0629 (1)_000282.webp",
  "/media/holding/desktop/0629 (1)_000283.webp",
  "/media/holding/desktop/0629 (1)_000284.webp",
  "/media/holding/desktop/0629 (1)_000285.webp",
  "/media/holding/desktop/0629 (1)_000286.webp",
  "/media/holding/desktop/0629 (1)_000287.webp",
  "/media/holding/desktop/0629 (1)_000288.webp",
  "/media/holding/desktop/0629 (1)_000289.webp",
  "/media/holding/desktop/0629 (1)_000290.webp",
  "/media/holding/desktop/0629 (1)_000291.webp",
  "/media/holding/desktop/0629 (1)_000292.webp",
  "/media/holding/desktop/0629 (1)_000293.webp",
  "/media/holding/desktop/0629 (1)_000294.webp",
  "/media/holding/desktop/0629 (1)_000295.webp",
  "/media/holding/desktop/0629 (1)_000296.webp",
  "/media/holding/desktop/0629 (1)_000297.webp",
  "/media/holding/desktop/0629 (1)_000298.webp",
  "/media/holding/desktop/0629 (1)_000299.webp",
  "/media/holding/desktop/0629 (1)_000300.webp",
  "/media/holding/desktop/0629 (1)_000301.webp",
  "/media/holding/desktop/0629 (1)_000302.webp",
  "/media/holding/desktop/0629 (1)_000303.webp",
  "/media/holding/desktop/0629 (1)_000304.webp",
  "/media/holding/desktop/0629 (1)_000305.webp",
  "/media/holding/desktop/0629 (1)_000306.webp",
  "/media/holding/desktop/0629 (1)_000307.webp",
  "/media/holding/desktop/0629 (1)_000308.webp",
  "/media/holding/desktop/0629 (1)_000309.webp",
  "/media/holding/desktop/0629 (1)_000310.webp",
  "/media/holding/desktop/0629 (1)_000311.webp",
  "/media/holding/desktop/0629 (1)_000312.webp",
  "/media/holding/desktop/0629 (1)_000313.webp",
  "/media/holding/desktop/0629 (1)_000314.webp",
  "/media/holding/desktop/0629 (1)_000315.webp",
  "/media/holding/desktop/0629 (1)_000316.webp",
  "/media/holding/desktop/0629 (1)_000317.webp",
  "/media/holding/desktop/0629 (1)_000318.webp",
  "/media/holding/desktop/0629 (1)_000319.webp",
  "/media/holding/desktop/0629 (1)_000320.webp",
  "/media/holding/desktop/0629 (1)_000321.webp",
  "/media/holding/desktop/0629 (1)_000322.webp",
  "/media/holding/desktop/0629 (1)_000323.webp",
  "/media/holding/desktop/0629 (1)_000324.webp",
  "/media/holding/desktop/0629 (1)_000325.webp",
  "/media/holding/desktop/0629 (1)_000326.webp",
  "/media/holding/desktop/0629 (1)_000327.webp",
  "/media/holding/desktop/0629 (1)_000328.webp",
  "/media/holding/desktop/0629 (1)_000329.webp",
  "/media/holding/desktop/0629 (1)_000330.webp",
  "/media/holding/desktop/0629 (1)_000331.webp",
  "/media/holding/desktop/0629 (1)_000332.webp",
  "/media/holding/desktop/0629 (1)_000333.webp",
  "/media/holding/desktop/0629 (1)_000334.webp",
  "/media/holding/desktop/0629 (1)_000335.webp",
  "/media/holding/desktop/0629 (1)_000336.webp",
  "/media/holding/desktop/0629 (1)_000337.webp",
  "/media/holding/desktop/0629 (1)_000338.webp",
  "/media/holding/desktop/0629 (1)_000339.webp",
  "/media/holding/desktop/0629 (1)_000340.webp",
  "/media/holding/desktop/0629 (1)_000341.webp",
  "/media/holding/desktop/0629 (1)_000342.webp",
  "/media/holding/desktop/0629 (1)_000343.webp",
  "/media/holding/desktop/0629 (1)_000344.webp",
  "/media/holding/desktop/0629 (1)_000345.webp",
  "/media/holding/desktop/0629 (1)_000346.webp",
  "/media/holding/desktop/0629 (1)_000347.webp",
  "/media/holding/desktop/0629 (1)_000348.webp",
  "/media/holding/desktop/0629 (1)_000349.webp",
  "/media/holding/desktop/0629 (1)_000350.webp",
  "/media/holding/desktop/0629 (1)_000351.webp",
  "/media/holding/desktop/0629 (1)_000352.webp",
  "/media/holding/desktop/0629 (1)_000353.webp",
  "/media/holding/desktop/0629 (1)_000354.webp",
  "/media/holding/desktop/0629 (1)_000355.webp",
  "/media/holding/desktop/0629 (1)_000356.webp",
  "/media/holding/desktop/0629 (1)_000357.webp",
  "/media/holding/desktop/0629 (1)_000358.webp",
  "/media/holding/desktop/0629 (1)_000359.webp",
  "/media/holding/desktop/0629 (1)_000360.webp",
  "/media/holding/desktop/0629 (1)_000361.webp",
  "/media/holding/desktop/0629 (1)_000362.webp",
  "/media/holding/desktop/0629 (1)_000363.webp",
  "/media/holding/desktop/0629 (1)_000364.webp",
  "/media/holding/desktop/0629 (1)_000365.webp",
  "/media/holding/desktop/0629 (1)_000366.webp",
  "/media/holding/desktop/0629 (1)_000367.webp",
  "/media/holding/desktop/0629 (1)_000368.webp",
  "/media/holding/desktop/0629 (1)_000369.webp",
  "/media/holding/desktop/0629 (1)_000370.webp",
  "/media/holding/desktop/0629 (1)_000371.webp",
  "/media/holding/desktop/0629 (1)_000372.webp",
  "/media/holding/desktop/0629 (1)_000373.webp",
  "/media/holding/desktop/0629 (1)_000374.webp",
  "/media/holding/desktop/0629 (1)_000375.webp",
  "/media/holding/desktop/0629 (1)_000376.webp",
  "/media/holding/desktop/0629 (1)_000377.webp",
  "/media/holding/desktop/0629 (1)_000378.webp",
  "/media/holding/desktop/0629 (1)_000379.webp",
  "/media/holding/desktop/0629 (1)_000380.webp",
  "/media/holding/desktop/0629 (1)_000381.webp",
  "/media/holding/desktop/0629 (1)_000382.webp",
  "/media/holding/desktop/0629 (1)_000383.webp",
  "/media/holding/desktop/0629 (1)_000384.webp",
  "/media/holding/desktop/0629 (1)_000385.webp",
  "/media/holding/desktop/0629 (1)_000386.webp",
  "/media/holding/desktop/0629 (1)_000387.webp",
  "/media/holding/desktop/0629 (1)_000388.webp",
  "/media/holding/desktop/0629 (1)_000389.webp",
  "/media/holding/desktop/0629 (1)_000390.webp",
  "/media/holding/desktop/0629 (1)_000391.webp",
  "/media/holding/desktop/0629 (1)_000392.webp",
  "/media/holding/desktop/0629 (1)_000393.webp",
  "/media/holding/desktop/0629 (1)_000394.webp",
  "/media/holding/desktop/0629 (1)_000395.webp",
  "/media/holding/desktop/0629 (1)_000396.webp",
  "/media/holding/desktop/0629 (1)_000397.webp",
  "/media/holding/desktop/0629 (1)_000398.webp",
  "/media/holding/desktop/0629 (1)_000399.webp",
  "/media/holding/desktop/0629 (1)_000400.webp",
  "/media/holding/desktop/0629 (1)_000401.webp",
  "/media/holding/desktop/0629 (1)_000402.webp",
  "/media/holding/desktop/0629 (1)_000403.webp",
  "/media/holding/desktop/0629 (1)_000404.webp",
  "/media/holding/desktop/0629 (1)_000405.webp",
  "/media/holding/desktop/0629 (1)_000406.webp",
  "/media/holding/desktop/0629 (1)_000407.webp",
  "/media/holding/desktop/0629 (1)_000408.webp",
  "/media/holding/desktop/0629 (1)_000409.webp",
  "/media/holding/desktop/0629 (1)_000410.webp",
  "/media/holding/desktop/0629 (1)_000411.webp",
  "/media/holding/desktop/0629 (1)_000412.webp",
  "/media/holding/desktop/0629 (1)_000413.webp",
  "/media/holding/desktop/0629 (1)_000414.webp",
  "/media/holding/desktop/0629 (1)_000415.webp",
  "/media/holding/desktop/0629 (1)_000416.webp",
  "/media/holding/desktop/0629 (1)_000417.webp",
  "/media/holding/desktop/0629 (1)_000418.webp",
  "/media/holding/desktop/0629 (1)_000419.webp",
  "/media/holding/desktop/0629 (1)_000420.webp",
  "/media/holding/desktop/0629 (1)_000421.webp",
  "/media/holding/desktop/0629 (1)_000422.webp",
  "/media/holding/desktop/0629 (1)_000423.webp",
  "/media/holding/desktop/0629 (1)_000424.webp",
  "/media/holding/desktop/0629 (1)_000425.webp",
  "/media/holding/desktop/0629 (1)_000426.webp",
  "/media/holding/desktop/0629 (1)_000427.webp",
  "/media/holding/desktop/0629 (1)_000428.webp",
  "/media/holding/desktop/0629 (1)_000429.webp",
  "/media/holding/desktop/0629 (1)_000430.webp",
  "/media/holding/desktop/0629 (1)_000431.webp",
  "/media/holding/desktop/0629 (1)_000432.webp",
  "/media/holding/desktop/0629 (1)_000433.webp",
  "/media/holding/desktop/0629 (1)_000434.webp",
  "/media/holding/desktop/0629 (1)_000435.webp",
  "/media/holding/desktop/0629 (1)_000436.webp",
  "/media/holding/desktop/0629 (1)_000437.webp",
  "/media/holding/desktop/0629 (1)_000438.webp",
  "/media/holding/desktop/0629 (1)_000439.webp",
  "/media/holding/desktop/0629 (1)_000440.webp",
  "/media/holding/desktop/0629 (1)_000441.webp",
  "/media/holding/desktop/0629 (1)_000442.webp",
  "/media/holding/desktop/0629 (1)_000443.webp",
  "/media/holding/desktop/0629 (1)_000444.webp",
  "/media/holding/desktop/0629 (1)_000445.webp",
  "/media/holding/desktop/0629 (1)_000446.webp",
  "/media/holding/desktop/0629 (1)_000447.webp",
  "/media/holding/desktop/0629 (1)_000448.webp",
  "/media/holding/desktop/0629 (1)_000449.webp",
  "/media/holding/desktop/0629 (1)_000450.webp",
  "/media/holding/desktop/0629 (1)_000451.webp",
  "/media/holding/desktop/0629 (1)_000452.webp",
  "/media/holding/desktop/0629 (1)_000453.webp",
  "/media/holding/desktop/0629 (1)_000454.webp",
  "/media/holding/desktop/0629 (1)_000455.webp",
  "/media/holding/desktop/0629 (1)_000456.webp",
  "/media/holding/desktop/0629 (1)_000457.webp",
  "/media/holding/desktop/0629 (1)_000458.webp",
  "/media/holding/desktop/0629 (1)_000459.webp",
  "/media/holding/desktop/0629 (1)_000460.webp",
  "/media/holding/desktop/0629 (1)_000461.webp",
  "/media/holding/desktop/0629 (1)_000462.webp",
  "/media/holding/desktop/0629 (1)_000463.webp",
  "/media/holding/desktop/0629 (1)_000464.webp",
  "/media/holding/desktop/0629 (1)_000465.webp",
  "/media/holding/desktop/0629 (1)_000466.webp",
  "/media/holding/desktop/0629 (1)_000467.webp"
];
export const holdingMobileFrames = [
  "/media/holding/mobile/0629 (1)_000001.webp",
  "/media/holding/mobile/0629 (1)_000003.webp",
  "/media/holding/mobile/0629 (1)_000005.webp",
  "/media/holding/mobile/0629 (1)_000007.webp",
  "/media/holding/mobile/0629 (1)_000009.webp",
  "/media/holding/mobile/0629 (1)_000011.webp",
  "/media/holding/mobile/0629 (1)_000013.webp",
  "/media/holding/mobile/0629 (1)_000015.webp",
  "/media/holding/mobile/0629 (1)_000017.webp",
  "/media/holding/mobile/0629 (1)_000019.webp",
  "/media/holding/mobile/0629 (1)_000021.webp",
  "/media/holding/mobile/0629 (1)_000023.webp",
  "/media/holding/mobile/0629 (1)_000025.webp",
  "/media/holding/mobile/0629 (1)_000027.webp",
  "/media/holding/mobile/0629 (1)_000029.webp",
  "/media/holding/mobile/0629 (1)_000031.webp",
  "/media/holding/mobile/0629 (1)_000033.webp",
  "/media/holding/mobile/0629 (1)_000035.webp",
  "/media/holding/mobile/0629 (1)_000039.webp",
  "/media/holding/mobile/0629 (1)_000041.webp",
  "/media/holding/mobile/0629 (1)_000043.webp",
  "/media/holding/mobile/0629 (1)_000045.webp",
  "/media/holding/mobile/0629 (1)_000047.webp",
  "/media/holding/mobile/0629 (1)_000049.webp",
  "/media/holding/mobile/0629 (1)_000051.webp",
  "/media/holding/mobile/0629 (1)_000053.webp",
  "/media/holding/mobile/0629 (1)_000055.webp",
  "/media/holding/mobile/0629 (1)_000057.webp",
  "/media/holding/mobile/0629 (1)_000059.webp",
  "/media/holding/mobile/0629 (1)_000061.webp",
  "/media/holding/mobile/0629 (1)_000063.webp",
  "/media/holding/mobile/0629 (1)_000065.webp",
  "/media/holding/mobile/0629 (1)_000067.webp",
  "/media/holding/mobile/0629 (1)_000069.webp",
  "/media/holding/mobile/0629 (1)_000071.webp",
  "/media/holding/mobile/0629 (1)_000073.webp",
  "/media/holding/mobile/0629 (1)_000075.webp",
  "/media/holding/mobile/0629 (1)_000077.webp",
  "/media/holding/mobile/0629 (1)_000079.webp",
  "/media/holding/mobile/0629 (1)_000081.webp",
  "/media/holding/mobile/0629 (1)_000083.webp",
  "/media/holding/mobile/0629 (1)_000085.webp",
  "/media/holding/mobile/0629 (1)_000087.webp",
  "/media/holding/mobile/0629 (1)_000089.webp",
  "/media/holding/mobile/0629 (1)_000091.webp",
  "/media/holding/mobile/0629 (1)_000093.webp",
  "/media/holding/mobile/0629 (1)_000095.webp",
  "/media/holding/mobile/0629 (1)_000097.webp",
  "/media/holding/mobile/0629 (1)_000099.webp",
  "/media/holding/mobile/0629 (1)_000101.webp",
  "/media/holding/mobile/0629 (1)_000103.webp",
  "/media/holding/mobile/0629 (1)_000105.webp",
  "/media/holding/mobile/0629 (1)_000107.webp",
  "/media/holding/mobile/0629 (1)_000109.webp",
  "/media/holding/mobile/0629 (1)_000111.webp",
  "/media/holding/mobile/0629 (1)_000113.webp",
  "/media/holding/mobile/0629 (1)_000115.webp",
  "/media/holding/mobile/0629 (1)_000117.webp",
  "/media/holding/mobile/0629 (1)_000119.webp",
  "/media/holding/mobile/0629 (1)_000121.webp",
  "/media/holding/mobile/0629 (1)_000123.webp",
  "/media/holding/mobile/0629 (1)_000125.webp",
  "/media/holding/mobile/0629 (1)_000127.webp",
  "/media/holding/mobile/0629 (1)_000129.webp",
  "/media/holding/mobile/0629 (1)_000131.webp",
  "/media/holding/mobile/0629 (1)_000133.webp",
  "/media/holding/mobile/0629 (1)_000135.webp",
  "/media/holding/mobile/0629 (1)_000137.webp",
  "/media/holding/mobile/0629 (1)_000139.webp",
  "/media/holding/mobile/0629 (1)_000141.webp",
  "/media/holding/mobile/0629 (1)_000143.webp",
  "/media/holding/mobile/0629 (1)_000145.webp",
  "/media/holding/mobile/0629 (1)_000147.webp",
  "/media/holding/mobile/0629 (1)_000149.webp",
  "/media/holding/mobile/0629 (1)_000151.webp",
  "/media/holding/mobile/0629 (1)_000153.webp",
  "/media/holding/mobile/0629 (1)_000155.webp",
  "/media/holding/mobile/0629 (1)_000157.webp",
  "/media/holding/mobile/0629 (1)_000159.webp",
  "/media/holding/mobile/0629 (1)_000161.webp",
  "/media/holding/mobile/0629 (1)_000163.webp",
  "/media/holding/mobile/0629 (1)_000165.webp",
  "/media/holding/mobile/0629 (1)_000167.webp",
  "/media/holding/mobile/0629 (1)_000169.webp",
  "/media/holding/mobile/0629 (1)_000171.webp",
  "/media/holding/mobile/0629 (1)_000173.webp",
  "/media/holding/mobile/0629 (1)_000175.webp",
  "/media/holding/mobile/0629 (1)_000177.webp",
  "/media/holding/mobile/0629 (1)_000179.webp",
  "/media/holding/mobile/0629 (1)_000181.webp",
  "/media/holding/mobile/0629 (1)_000183.webp",
  "/media/holding/mobile/0629 (1)_000185.webp",
  "/media/holding/mobile/0629 (1)_000187.webp",
  "/media/holding/mobile/0629 (1)_000189.webp",
  "/media/holding/mobile/0629 (1)_000191.webp",
  "/media/holding/mobile/0629 (1)_000193.webp",
  "/media/holding/mobile/0629 (1)_000195.webp",
  "/media/holding/mobile/0629 (1)_000197.webp",
  "/media/holding/mobile/0629 (1)_000199.webp",
  "/media/holding/mobile/0629 (1)_000201.webp",
  "/media/holding/mobile/0629 (1)_000203.webp",
  "/media/holding/mobile/0629 (1)_000205.webp",
  "/media/holding/mobile/0629 (1)_000207.webp",
  "/media/holding/mobile/0629 (1)_000209.webp",
  "/media/holding/mobile/0629 (1)_000211.webp",
  "/media/holding/mobile/0629 (1)_000213.webp",
  "/media/holding/mobile/0629 (1)_000215.webp",
  "/media/holding/mobile/0629 (1)_000217.webp",
  "/media/holding/mobile/0629 (1)_000219.webp",
  "/media/holding/mobile/0629 (1)_000221.webp",
  "/media/holding/mobile/0629 (1)_000223.webp",
  "/media/holding/mobile/0629 (1)_000225.webp",
  "/media/holding/mobile/0629 (1)_000227.webp",
  "/media/holding/mobile/0629 (1)_000229.webp",
  "/media/holding/mobile/0629 (1)_000231.webp",
  "/media/holding/mobile/0629 (1)_000233.webp",
  "/media/holding/mobile/0629 (1)_000235.webp",
  "/media/holding/mobile/0629 (1)_000237.webp",
  "/media/holding/mobile/0629 (1)_000239.webp",
  "/media/holding/mobile/0629 (1)_000256.webp",
  "/media/holding/mobile/0629 (1)_000258.webp",
  "/media/holding/mobile/0629 (1)_000260.webp",
  "/media/holding/mobile/0629 (1)_000262.webp",
  "/media/holding/mobile/0629 (1)_000264.webp",
  "/media/holding/mobile/0629 (1)_000266.webp",
  "/media/holding/mobile/0629 (1)_000268.webp",
  "/media/holding/mobile/0629 (1)_000270.webp",
  "/media/holding/mobile/0629 (1)_000272.webp",
  "/media/holding/mobile/0629 (1)_000274.webp",
  "/media/holding/mobile/0629 (1)_000276.webp",
  "/media/holding/mobile/0629 (1)_000278.webp",
  "/media/holding/mobile/0629 (1)_000280.webp",
  "/media/holding/mobile/0629 (1)_000282.webp",
  "/media/holding/mobile/0629 (1)_000284.webp",
  "/media/holding/mobile/0629 (1)_000286.webp",
  "/media/holding/mobile/0629 (1)_000288.webp",
  "/media/holding/mobile/0629 (1)_000290.webp",
  "/media/holding/mobile/0629 (1)_000292.webp",
  "/media/holding/mobile/0629 (1)_000294.webp",
  "/media/holding/mobile/0629 (1)_000296.webp",
  "/media/holding/mobile/0629 (1)_000298.webp",
  "/media/holding/mobile/0629 (1)_000300.webp",
  "/media/holding/mobile/0629 (1)_000302.webp",
  "/media/holding/mobile/0629 (1)_000304.webp",
  "/media/holding/mobile/0629 (1)_000306.webp",
  "/media/holding/mobile/0629 (1)_000308.webp",
  "/media/holding/mobile/0629 (1)_000310.webp",
  "/media/holding/mobile/0629 (1)_000312.webp",
  "/media/holding/mobile/0629 (1)_000314.webp",
  "/media/holding/mobile/0629 (1)_000316.webp",
  "/media/holding/mobile/0629 (1)_000318.webp",
  "/media/holding/mobile/0629 (1)_000320.webp",
  "/media/holding/mobile/0629 (1)_000322.webp",
  "/media/holding/mobile/0629 (1)_000324.webp",
  "/media/holding/mobile/0629 (1)_000326.webp",
  "/media/holding/mobile/0629 (1)_000328.webp",
  "/media/holding/mobile/0629 (1)_000330.webp",
  "/media/holding/mobile/0629 (1)_000332.webp",
  "/media/holding/mobile/0629 (1)_000334.webp",
  "/media/holding/mobile/0629 (1)_000336.webp",
  "/media/holding/mobile/0629 (1)_000338.webp",
  "/media/holding/mobile/0629 (1)_000340.webp",
  "/media/holding/mobile/0629 (1)_000342.webp",
  "/media/holding/mobile/0629 (1)_000344.webp",
  "/media/holding/mobile/0629 (1)_000346.webp",
  "/media/holding/mobile/0629 (1)_000348.webp",
  "/media/holding/mobile/0629 (1)_000350.webp",
  "/media/holding/mobile/0629 (1)_000352.webp",
  "/media/holding/mobile/0629 (1)_000354.webp",
  "/media/holding/mobile/0629 (1)_000356.webp",
  "/media/holding/mobile/0629 (1)_000358.webp",
  "/media/holding/mobile/0629 (1)_000360.webp",
  "/media/holding/mobile/0629 (1)_000362.webp",
  "/media/holding/mobile/0629 (1)_000364.webp",
  "/media/holding/mobile/0629 (1)_000366.webp",
  "/media/holding/mobile/0629 (1)_000368.webp",
  "/media/holding/mobile/0629 (1)_000370.webp",
  "/media/holding/mobile/0629 (1)_000372.webp",
  "/media/holding/mobile/0629 (1)_000374.webp",
  "/media/holding/mobile/0629 (1)_000376.webp",
  "/media/holding/mobile/0629 (1)_000378.webp",
  "/media/holding/mobile/0629 (1)_000380.webp",
  "/media/holding/mobile/0629 (1)_000382.webp",
  "/media/holding/mobile/0629 (1)_000384.webp",
  "/media/holding/mobile/0629 (1)_000386.webp",
  "/media/holding/mobile/0629 (1)_000388.webp",
  "/media/holding/mobile/0629 (1)_000390.webp",
  "/media/holding/mobile/0629 (1)_000392.webp",
  "/media/holding/mobile/0629 (1)_000394.webp",
  "/media/holding/mobile/0629 (1)_000396.webp",
  "/media/holding/mobile/0629 (1)_000398.webp",
  "/media/holding/mobile/0629 (1)_000400.webp",
  "/media/holding/mobile/0629 (1)_000402.webp",
  "/media/holding/mobile/0629 (1)_000404.webp",
  "/media/holding/mobile/0629 (1)_000406.webp",
  "/media/holding/mobile/0629 (1)_000408.webp",
  "/media/holding/mobile/0629 (1)_000410.webp",
  "/media/holding/mobile/0629 (1)_000412.webp",
  "/media/holding/mobile/0629 (1)_000414.webp",
  "/media/holding/mobile/0629 (1)_000416.webp",
  "/media/holding/mobile/0629 (1)_000418.webp",
  "/media/holding/mobile/0629 (1)_000420.webp",
  "/media/holding/mobile/0629 (1)_000422.webp",
  "/media/holding/mobile/0629 (1)_000424.webp",
  "/media/holding/mobile/0629 (1)_000426.webp",
  "/media/holding/mobile/0629 (1)_000428.webp",
  "/media/holding/mobile/0629 (1)_000430.webp",
  "/media/holding/mobile/0629 (1)_000432.webp",
  "/media/holding/mobile/0629 (1)_000434.webp",
  "/media/holding/mobile/0629 (1)_000436.webp",
  "/media/holding/mobile/0629 (1)_000438.webp",
  "/media/holding/mobile/0629 (1)_000440.webp",
  "/media/holding/mobile/0629 (1)_000442.webp",
  "/media/holding/mobile/0629 (1)_000444.webp",
  "/media/holding/mobile/0629 (1)_000446.webp",
  "/media/holding/mobile/0629 (1)_000448.webp",
  "/media/holding/mobile/0629 (1)_000450.webp",
  "/media/holding/mobile/0629 (1)_000452.webp",
  "/media/holding/mobile/0629 (1)_000454.webp",
  "/media/holding/mobile/0629 (1)_000456.webp",
  "/media/holding/mobile/0629 (1)_000458.webp",
  "/media/holding/mobile/0629 (1)_000460.webp",
  "/media/holding/mobile/0629 (1)_000462.webp",
  "/media/holding/mobile/0629 (1)_000464.webp",
  "/media/holding/mobile/0629 (1)_000466.webp"
];
````

## src\data\mediaManifest_backup.js

``js

// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = [
  "/public/media/earth/desktop/Без названия_000.webp",
  "/public/media/earth/desktop/Без названия_001.webp",
  "/public/media/earth/desktop/Без названия_002.webp",
  "/public/media/earth/desktop/Без названия_003.webp",
  "/public/media/earth/desktop/Без названия_004.webp",
  "/public/media/earth/desktop/Без названия_005.webp",
  "/public/media/earth/desktop/Без названия_006.webp",
  "/public/media/earth/desktop/Без названия_007.webp",
  "/public/media/earth/desktop/Без названия_008.webp",
  "/public/media/earth/desktop/Без названия_009.webp",
  "/public/media/earth/desktop/Без названия_010.webp",
  "/public/media/earth/desktop/Без названия_011.webp",
  "/public/media/earth/desktop/Без названия_012.webp",
  "/public/media/earth/desktop/Без названия_013.webp",
  "/public/media/earth/desktop/Без названия_014.webp",
  "/public/media/earth/desktop/Без названия_015.webp",
  "/public/media/earth/desktop/Без названия_016.webp",
  "/public/media/earth/desktop/Без названия_017.webp",
  "/public/media/earth/desktop/Без названия_018.webp",
  "/public/media/earth/desktop/Без названия_019.webp",
  "/public/media/earth/desktop/Без названия_020.webp",
  "/public/media/earth/desktop/Без названия_021.webp",
  "/public/media/earth/desktop/Без названия_022.webp",
  "/public/media/earth/desktop/Без названия_023.webp",
  "/public/media/earth/desktop/Без названия_024.webp",
  "/public/media/earth/desktop/Без названия_025.webp",
  "/public/media/earth/desktop/Без названия_026.webp",
  "/public/media/earth/desktop/Без названия_027.webp",
  "/public/media/earth/desktop/Без названия_028.webp",
  "/public/media/earth/desktop/Без названия_029.webp",
  "/public/media/earth/desktop/Без названия_030.webp",
  "/public/media/earth/desktop/Без названия_031.webp",
  "/public/media/earth/desktop/Без названия_032.webp",
  "/public/media/earth/desktop/Без названия_033.webp",
  "/public/media/earth/desktop/Без названия_034.webp",
  "/public/media/earth/desktop/Без названия_035.webp",
  "/public/media/earth/desktop/Без названия_036.webp",
  "/public/media/earth/desktop/Без названия_037.webp",
  "/public/media/earth/desktop/Без названия_038.webp",
  "/public/media/earth/desktop/Без названия_039.webp",
  "/public/media/earth/desktop/Без названия_040.webp",
  "/public/media/earth/desktop/Без названия_041.webp",
  "/public/media/earth/desktop/Без названия_042.webp",
  "/public/media/earth/desktop/Без названия_043.webp",
  "/public/media/earth/desktop/Без названия_044.webp",
  "/public/media/earth/desktop/Без названия_045.webp",
  "/public/media/earth/desktop/Без названия_046.webp",
  "/public/media/earth/desktop/Без названия_047.webp",
  "/public/media/earth/desktop/Без названия_048.webp",
  "/public/media/earth/desktop/Без названия_049.webp",
  "/public/media/earth/desktop/Без названия_050.webp",
  "/public/media/earth/desktop/Без названия_051.webp",
  "/public/media/earth/desktop/Без названия_052.webp",
  "/public/media/earth/desktop/Без названия_053.webp",
  "/public/media/earth/desktop/Без названия_054.webp",
  "/public/media/earth/desktop/Без названия_055.webp",
  "/public/media/earth/desktop/Без названия_056.webp",
  "/public/media/earth/desktop/Без названия_057.webp",
  "/public/media/earth/desktop/Без названия_058.webp",
  "/public/media/earth/desktop/Без названия_059.webp",
  "/public/media/earth/desktop/Без названия_060.webp",
  "/public/media/earth/desktop/Без названия_061.webp",
  "/public/media/earth/desktop/Без названия_062.webp",
  "/public/media/earth/desktop/Без названия_063.webp",
  "/public/media/earth/desktop/Без названия_064.webp",
  "/public/media/earth/desktop/Без названия_065.webp",
  "/public/media/earth/desktop/Без названия_066.webp",
  "/public/media/earth/desktop/Без названия_067.webp",
  "/public/media/earth/desktop/Без названия_068.webp",
  "/public/media/earth/desktop/Без названия_069.webp",
  "/public/media/earth/desktop/Без названия_070.webp",
  "/public/media/earth/desktop/Без названия_071.webp",
  "/public/media/earth/desktop/Без названия_072.webp",
  "/public/media/earth/desktop/Без названия_073.webp",
  "/public/media/earth/desktop/Без названия_074.webp",
  "/public/media/earth/desktop/Без названия_075.webp",
  "/public/media/earth/desktop/Без названия_076.webp",
  "/public/media/earth/desktop/Без названия_077.webp",
  "/public/media/earth/desktop/Без названия_078.webp",
  "/public/media/earth/desktop/Без названия_079.webp",
  "/public/media/earth/desktop/Без названия_080.webp",
  "/public/media/earth/desktop/Без названия_081.webp",
  "/public/media/earth/desktop/Без названия_082.webp",
  "/public/media/earth/desktop/Без названия_083.webp",
  "/public/media/earth/desktop/Без названия_084.webp",
  "/public/media/earth/desktop/Без названия_085.webp",
  "/public/media/earth/desktop/Без названия_086.webp",
  "/public/media/earth/desktop/Без названия_087.webp",
  "/public/media/earth/desktop/Без названия_088.webp",
  "/public/media/earth/desktop/Без названия_089.webp",
  "/public/media/earth/desktop/Без названия_090.webp",
  "/public/media/earth/desktop/Без названия_091.webp",
  "/public/media/earth/desktop/Без названия_092.webp",
  "/public/media/earth/desktop/Без названия_093.webp",
  "/public/media/earth/desktop/Без названия_094.webp",
  "/public/media/earth/desktop/Без названия_095.webp",
  "/public/media/earth/desktop/Без названия_096.webp",
  "/public/media/earth/desktop/Без названия_097.webp",
  "/public/media/earth/desktop/Без названия_098.webp",
  "/public/media/earth/desktop/Без названия_099.webp",
  "/public/media/earth/desktop/Без названия_100.webp",
  "/public/media/earth/desktop/Без названия_101.webp",
  "/public/media/earth/desktop/Без названия_102.webp",
  "/public/media/earth/desktop/Без названия_103.webp",
  "/public/media/earth/desktop/Без названия_104.webp",
  "/public/media/earth/desktop/Без названия_105.webp",
  "/public/media/earth/desktop/Без названия_106.webp",
  "/public/media/earth/desktop/Без названия_107.webp",
  "/public/media/earth/desktop/Без названия_108.webp",
  "/public/media/earth/desktop/Без названия_109.webp",
  "/public/media/earth/desktop/Без названия_110.webp",
  "/public/media/earth/desktop/Без названия_111.webp",
  "/public/media/earth/desktop/Без названия_112.webp",
  "/public/media/earth/desktop/Без названия_113.webp",
  "/public/media/earth/desktop/Без названия_114.webp",
  "/public/media/earth/desktop/Без названия_115.webp",
  "/public/media/earth/desktop/Без названия_116.webp",
  "/public/media/earth/desktop/Без названия_117.webp",
  "/public/media/earth/desktop/Без названия_118.webp",
  "/public/media/earth/desktop/Без названия_119.webp",
  "/public/media/earth/desktop/Без названия_120.webp",
  "/public/media/earth/desktop/Без названия_121.webp",
  "/public/media/earth/desktop/Без названия_122.webp",
  "/public/media/earth/desktop/Без названия_123.webp",
  "/public/media/earth/desktop/Без названия_124.webp",
  "/public/media/earth/desktop/Без названия_125.webp",
  "/public/media/earth/desktop/Без названия_126.webp",
  "/public/media/earth/desktop/Без названия_127.webp",
  "/public/media/earth/desktop/Без названия_128.webp",
  "/public/media/earth/desktop/Без названия_129.webp",
  "/public/media/earth/desktop/Без названия_130.webp",
  "/public/media/earth/desktop/Без названия_131.webp",
  "/public/media/earth/desktop/Без названия_132.webp",
  "/public/media/earth/desktop/Без названия_133.webp",
  "/public/media/earth/desktop/Без названия_134.webp",
  "/public/media/earth/desktop/Без названия_135.webp",
  "/public/media/earth/desktop/Без названия_136.webp",
  "/public/media/earth/desktop/Без названия_137.webp",
  "/public/media/earth/desktop/Без названия_138.webp",
  "/public/media/earth/desktop/Без названия_139.webp",
  "/public/media/earth/desktop/Без названия_140.webp",
  "/public/media/earth/desktop/Без названия_141.webp",
  "/public/media/earth/desktop/Без названия_142.webp",
  "/public/media/earth/desktop/Без названия_143.webp",
  "/public/media/earth/desktop/Без названия_144.webp",
  "/public/media/earth/desktop/Без названия_145.webp",
  "/public/media/earth/desktop/Без названия_146.webp",
  "/public/media/earth/desktop/Без названия_147.webp",
  "/public/media/earth/desktop/Без названия_148.webp",
  "/public/media/earth/desktop/Без названия_149.webp",
  "/public/media/earth/desktop/Без названия_150.webp",
  "/public/media/earth/desktop/Без названия_151.webp",
  "/public/media/earth/desktop/Без названия_152.webp",
  "/public/media/earth/desktop/Без названия_153.webp",
  "/public/media/earth/desktop/Без названия_154.webp",
  "/public/media/earth/desktop/Без названия_155.webp",
  "/public/media/earth/desktop/Без названия_156.webp",
  "/public/media/earth/desktop/Без названия_157.webp",
  "/public/media/earth/desktop/Без названия_158.webp",
  "/public/media/earth/desktop/Без названия_159.webp",
  "/public/media/earth/desktop/Без названия_160.webp",
  "/public/media/earth/desktop/Без названия_161.webp",
  "/public/media/earth/desktop/Без названия_162.webp",
  "/public/media/earth/desktop/Без названия_163.webp",
  "/public/media/earth/desktop/Без названия_164.webp",
  "/public/media/earth/desktop/Без названия_165.webp",
  "/public/media/earth/desktop/Без названия_166.webp",
  "/public/media/earth/desktop/Без названия_167.webp",
  "/public/media/earth/desktop/Без названия_168.webp",
  "/public/media/earth/desktop/Без названия_169.webp",
  "/public/media/earth/desktop/Без названия_170.webp",
  "/public/media/earth/desktop/Без названия_171.webp",
  "/public/media/earth/desktop/Без названия_172.webp",
  "/public/media/earth/desktop/Без названия_173.webp",
  "/public/media/earth/desktop/Без названия_174.webp",
  "/public/media/earth/desktop/Без названия_175.webp",
  "/public/media/earth/desktop/Без названия_176.webp",
  "/public/media/earth/desktop/Без названия_177.webp",
  "/public/media/earth/desktop/Без названия_178.webp",
  "/public/media/earth/desktop/Без названия_179.webp",
  "/public/media/earth/desktop/Без названия_180.webp",
  "/public/media/earth/desktop/Без названия_181.webp",
  "/public/media/earth/desktop/Без названия_182.webp",
  "/public/media/earth/desktop/Без названия_183.webp",
  "/public/media/earth/desktop/Без названия_184.webp",
  "/public/media/earth/desktop/Без названия_185.webp",
  "/public/media/earth/desktop/Без названия_186.webp",
  "/public/media/earth/desktop/Без названия_187.webp",
  "/public/media/earth/desktop/Без названия_188.webp",
  "/public/media/earth/desktop/Без названия_189.webp",
  "/public/media/earth/desktop/Без названия_190.webp",
  "/public/media/earth/desktop/Без названия_191.webp",
  "/public/media/earth/desktop/Без названия_192.webp",
  "/public/media/earth/desktop/Без названия_193.webp",
  "/public/media/earth/desktop/Без названия_194.webp",
  "/public/media/earth/desktop/Без названия_195.webp",
  "/public/media/earth/desktop/Без названия_196.webp",
  "/public/media/earth/desktop/Без названия_197.webp",
  "/public/media/earth/desktop/Без названия_198.webp",
  "/public/media/earth/desktop/Без названия_199.webp",
  "/public/media/earth/desktop/Без названия_200.webp",
  "/public/media/earth/desktop/Без названия_201.webp",
  "/public/media/earth/desktop/Без названия_202.webp",
  "/public/media/earth/desktop/Без названия_203.webp",
  "/public/media/earth/desktop/Без названия_204.webp",
  "/public/media/earth/desktop/Без названия_205.webp",
  "/public/media/earth/desktop/Без названия_206.webp",
  "/public/media/earth/desktop/Без названия_207.webp",
  "/public/media/earth/desktop/Без названия_208.webp",
  "/public/media/earth/desktop/Без названия_209.webp",
  "/public/media/earth/desktop/Без названия_210.webp",
  "/public/media/earth/desktop/Без названия_211.webp",
  "/public/media/earth/desktop/Без названия_212.webp",
  "/public/media/earth/desktop/Без названия_213.webp",
  "/public/media/earth/desktop/Без названия_214.webp",
  "/public/media/earth/desktop/Без названия_215.webp",
  "/public/media/earth/desktop/Без названия_216.webp",
  "/public/media/earth/desktop/Без названия_217.webp",
  "/public/media/earth/desktop/Без названия_218.webp",
  "/public/media/earth/desktop/Без названия_219.webp",
  "/public/media/earth/desktop/Без названия_220.webp",
  "/public/media/earth/desktop/Без названия_221.webp",
  "/public/media/earth/desktop/Без названия_222.webp",
  "/public/media/earth/desktop/Без названия_223.webp",
  "/public/media/earth/desktop/Без названия_224.webp",
  "/public/media/earth/desktop/Без названия_225.webp",
  "/public/media/earth/desktop/Без названия_226.webp",
  "/public/media/earth/desktop/Без названия_227.webp",
  "/public/media/earth/desktop/Без названия_228.webp",
  "/public/media/earth/desktop/Без названия_229.webp",
  "/public/media/earth/desktop/Без названия_230.webp",
  "/public/media/earth/desktop/Без названия_231.webp",
  "/public/media/earth/desktop/Без названия_232.webp",
  "/public/media/earth/desktop/Без названия_233.webp",
  "/public/media/earth/desktop/Без названия_234.webp",
  "/public/media/earth/desktop/Без названия_235.webp",
  "/public/media/earth/desktop/Без названия_236.webp",
  "/public/media/earth/desktop/Без названия_237.webp",
  "/public/media/earth/desktop/Без названия_238.webp",
  "/public/media/earth/desktop/Без названия_239.webp",
  "/public/media/earth/desktop/Без названия_240.webp"
];
export const earthMobileFrames = [
  "/public/media/earth/mobile/Без названия_000.webp",
  "/public/media/earth/mobile/Без названия_002.webp",
  "/public/media/earth/mobile/Без названия_004.webp",
  "/public/media/earth/mobile/Без названия_006.webp",
  "/public/media/earth/mobile/Без названия_008.webp",
  "/public/media/earth/mobile/Без названия_010.webp",
  "/public/media/earth/mobile/Без названия_012.webp",
  "/public/media/earth/mobile/Без названия_014.webp",
  "/public/media/earth/mobile/Без названия_016.webp",
  "/public/media/earth/mobile/Без названия_018.webp",
  "/public/media/earth/mobile/Без названия_020.webp",
  "/public/media/earth/mobile/Без названия_022.webp",
  "/public/media/earth/mobile/Без названия_024.webp",
  "/public/media/earth/mobile/Без названия_026.webp",
  "/public/media/earth/mobile/Без названия_028.webp",
  "/public/media/earth/mobile/Без названия_030.webp",
  "/public/media/earth/mobile/Без названия_032.webp",
  "/public/media/earth/mobile/Без названия_034.webp",
  "/public/media/earth/mobile/Без названия_036.webp",
  "/public/media/earth/mobile/Без названия_038.webp",
  "/public/media/earth/mobile/Без названия_040.webp",
  "/public/media/earth/mobile/Без названия_042.webp",
  "/public/media/earth/mobile/Без названия_044.webp",
  "/public/media/earth/mobile/Без названия_046.webp",
  "/public/media/earth/mobile/Без названия_048.webp",
  "/public/media/earth/mobile/Без названия_050.webp",
  "/public/media/earth/mobile/Без названия_052.webp",
  "/public/media/earth/mobile/Без названия_054.webp",
  "/public/media/earth/mobile/Без названия_056.webp",
  "/public/media/earth/mobile/Без названия_058.webp",
  "/public/media/earth/mobile/Без названия_060.webp",
  "/public/media/earth/mobile/Без названия_062.webp",
  "/public/media/earth/mobile/Без названия_064.webp",
  "/public/media/earth/mobile/Без названия_066.webp",
  "/public/media/earth/mobile/Без названия_068.webp",
  "/public/media/earth/mobile/Без названия_070.webp",
  "/public/media/earth/mobile/Без названия_072.webp",
  "/public/media/earth/mobile/Без названия_074.webp",
  "/public/media/earth/mobile/Без названия_076.webp",
  "/public/media/earth/mobile/Без названия_078.webp",
  "/public/media/earth/mobile/Без названия_080.webp",
  "/public/media/earth/mobile/Без названия_082.webp",
  "/public/media/earth/mobile/Без названия_084.webp",
  "/public/media/earth/mobile/Без названия_086.webp",
  "/public/media/earth/mobile/Без названия_088.webp",
  "/public/media/earth/mobile/Без названия_090.webp",
  "/public/media/earth/mobile/Без названия_092.webp",
  "/public/media/earth/mobile/Без названия_094.webp",
  "/public/media/earth/mobile/Без названия_096.webp",
  "/public/media/earth/mobile/Без названия_098.webp",
  "/public/media/earth/mobile/Без названия_100.webp",
  "/public/media/earth/mobile/Без названия_102.webp",
  "/public/media/earth/mobile/Без названия_104.webp",
  "/public/media/earth/mobile/Без названия_106.webp",
  "/public/media/earth/mobile/Без названия_108.webp",
  "/public/media/earth/mobile/Без названия_110.webp",
  "/public/media/earth/mobile/Без названия_112.webp",
  "/public/media/earth/mobile/Без названия_114.webp",
  "/public/media/earth/mobile/Без названия_116.webp",
  "/public/media/earth/mobile/Без названия_118.webp",
  "/public/media/earth/mobile/Без названия_120.webp",
  "/public/media/earth/mobile/Без названия_122.webp",
  "/public/media/earth/mobile/Без названия_124.webp",
  "/public/media/earth/mobile/Без названия_126.webp",
  "/public/media/earth/mobile/Без названия_128.webp",
  "/public/media/earth/mobile/Без названия_130.webp",
  "/public/media/earth/mobile/Без названия_132.webp",
  "/public/media/earth/mobile/Без названия_134.webp",
  "/public/media/earth/mobile/Без названия_136.webp",
  "/public/media/earth/mobile/Без названия_138.webp",
  "/public/media/earth/mobile/Без названия_140.webp",
  "/public/media/earth/mobile/Без названия_142.webp",
  "/public/media/earth/mobile/Без названия_144.webp",
  "/public/media/earth/mobile/Без названия_146.webp",
  "/public/media/earth/mobile/Без названия_148.webp",
  "/public/media/earth/mobile/Без названия_150.webp",
  "/public/media/earth/mobile/Без названия_152.webp",
  "/public/media/earth/mobile/Без названия_154.webp",
  "/public/media/earth/mobile/Без названия_156.webp",
  "/public/media/earth/mobile/Без названия_158.webp",
  "/public/media/earth/mobile/Без названия_160.webp",
  "/public/media/earth/mobile/Без названия_162.webp",
  "/public/media/earth/mobile/Без названия_164.webp",
  "/public/media/earth/mobile/Без названия_166.webp",
  "/public/media/earth/mobile/Без названия_168.webp",
  "/public/media/earth/mobile/Без названия_170.webp",
  "/public/media/earth/mobile/Без названия_172.webp",
  "/public/media/earth/mobile/Без названия_174.webp",
  "/public/media/earth/mobile/Без названия_176.webp",
  "/public/media/earth/mobile/Без названия_178.webp",
  "/public/media/earth/mobile/Без названия_180.webp",
  "/public/media/earth/mobile/Без названия_182.webp",
  "/public/media/earth/mobile/Без названия_184.webp",
  "/public/media/earth/mobile/Без названия_186.webp",
  "/public/media/earth/mobile/Без названия_188.webp",
  "/public/media/earth/mobile/Без названия_190.webp",
  "/public/media/earth/mobile/Без названия_192.webp",
  "/public/media/earth/mobile/Без названия_194.webp",
  "/public/media/earth/mobile/Без названия_196.webp",
  "/public/media/earth/mobile/Без названия_198.webp",
  "/public/media/earth/mobile/Без названия_200.webp",
  "/public/media/earth/mobile/Без названия_202.webp",
  "/public/media/earth/mobile/Без названия_204.webp",
  "/public/media/earth/mobile/Без названия_206.webp",
  "/public/media/earth/mobile/Без названия_208.webp",
  "/public/media/earth/mobile/Без названия_210.webp",
  "/public/media/earth/mobile/Без названия_212.webp",
  "/public/media/earth/mobile/Без названия_214.webp",
  "/public/media/earth/mobile/Без названия_216.webp",
  "/public/media/earth/mobile/Без названия_218.webp",
  "/public/media/earth/mobile/Без названия_220.webp",
  "/public/media/earth/mobile/Без названия_222.webp",
  "/public/media/earth/mobile/Без названия_224.webp",
  "/public/media/earth/mobile/Без названия_226.webp",
  "/public/media/earth/mobile/Без названия_228.webp",
  "/public/media/earth/mobile/Без названия_230.webp",
  "/public/media/earth/mobile/Без названия_232.webp",
  "/public/media/earth/mobile/Без названия_234.webp",
  "/public/media/earth/mobile/Без названия_236.webp",
  "/public/media/earth/mobile/Без названия_238.webp",
  "/public/media/earth/mobile/Без названия_240.webp"
];
export const holdingDesktopFrames = [
  "/public/media/holding/desktop/0629 (1)_000001.webp",
  "/public/media/holding/desktop/0629 (1)_000002.webp",
  "/public/media/holding/desktop/0629 (1)_000003.webp",
  "/public/media/holding/desktop/0629 (1)_000004.webp",
  "/public/media/holding/desktop/0629 (1)_000005.webp",
  "/public/media/holding/desktop/0629 (1)_000006.webp",
  "/public/media/holding/desktop/0629 (1)_000007.webp",
  "/public/media/holding/desktop/0629 (1)_000008.webp",
  "/public/media/holding/desktop/0629 (1)_000009.webp",
  "/public/media/holding/desktop/0629 (1)_000010.webp",
  "/public/media/holding/desktop/0629 (1)_000011.webp",
  "/public/media/holding/desktop/0629 (1)_000012.webp",
  "/public/media/holding/desktop/0629 (1)_000013.webp",
  "/public/media/holding/desktop/0629 (1)_000014.webp",
  "/public/media/holding/desktop/0629 (1)_000015.webp",
  "/public/media/holding/desktop/0629 (1)_000016.webp",
  "/public/media/holding/desktop/0629 (1)_000017.webp",
  "/public/media/holding/desktop/0629 (1)_000018.webp",
  "/public/media/holding/desktop/0629 (1)_000019.webp",
  "/public/media/holding/desktop/0629 (1)_000020.webp",
  "/public/media/holding/desktop/0629 (1)_000021.webp",
  "/public/media/holding/desktop/0629 (1)_000022.webp",
  "/public/media/holding/desktop/0629 (1)_000023.webp",
  "/public/media/holding/desktop/0629 (1)_000024.webp",
  "/public/media/holding/desktop/0629 (1)_000025.webp",
  "/public/media/holding/desktop/0629 (1)_000026.webp",
  "/public/media/holding/desktop/0629 (1)_000027.webp",
  "/public/media/holding/desktop/0629 (1)_000028.webp",
  "/public/media/holding/desktop/0629 (1)_000029.webp",
  "/public/media/holding/desktop/0629 (1)_000030.webp",
  "/public/media/holding/desktop/0629 (1)_000031.webp",
  "/public/media/holding/desktop/0629 (1)_000032.webp",
  "/public/media/holding/desktop/0629 (1)_000033.webp",
  "/public/media/holding/desktop/0629 (1)_000034.webp",
  "/public/media/holding/desktop/0629 (1)_000035.webp",
  "/public/media/holding/desktop/0629 (1)_000036.webp",
  "/public/media/holding/desktop/0629 (1)_000039.webp",
  "/public/media/holding/desktop/0629 (1)_000040.webp",
  "/public/media/holding/desktop/0629 (1)_000041.webp",
  "/public/media/holding/desktop/0629 (1)_000042.webp",
  "/public/media/holding/desktop/0629 (1)_000043.webp",
  "/public/media/holding/desktop/0629 (1)_000044.webp",
  "/public/media/holding/desktop/0629 (1)_000045.webp",
  "/public/media/holding/desktop/0629 (1)_000046.webp",
  "/public/media/holding/desktop/0629 (1)_000047.webp",
  "/public/media/holding/desktop/0629 (1)_000048.webp",
  "/public/media/holding/desktop/0629 (1)_000049.webp",
  "/public/media/holding/desktop/0629 (1)_000050.webp",
  "/public/media/holding/desktop/0629 (1)_000051.webp",
  "/public/media/holding/desktop/0629 (1)_000052.webp",
  "/public/media/holding/desktop/0629 (1)_000053.webp",
  "/public/media/holding/desktop/0629 (1)_000054.webp",
  "/public/media/holding/desktop/0629 (1)_000055.webp",
  "/public/media/holding/desktop/0629 (1)_000056.webp",
  "/public/media/holding/desktop/0629 (1)_000057.webp",
  "/public/media/holding/desktop/0629 (1)_000058.webp",
  "/public/media/holding/desktop/0629 (1)_000059.webp",
  "/public/media/holding/desktop/0629 (1)_000060.webp",
  "/public/media/holding/desktop/0629 (1)_000061.webp",
  "/public/media/holding/desktop/0629 (1)_000062.webp",
  "/public/media/holding/desktop/0629 (1)_000063.webp",
  "/public/media/holding/desktop/0629 (1)_000064.webp",
  "/public/media/holding/desktop/0629 (1)_000065.webp",
  "/public/media/holding/desktop/0629 (1)_000066.webp",
  "/public/media/holding/desktop/0629 (1)_000067.webp",
  "/public/media/holding/desktop/0629 (1)_000068.webp",
  "/public/media/holding/desktop/0629 (1)_000069.webp",
  "/public/media/holding/desktop/0629 (1)_000070.webp",
  "/public/media/holding/desktop/0629 (1)_000071.webp",
  "/public/media/holding/desktop/0629 (1)_000072.webp",
  "/public/media/holding/desktop/0629 (1)_000073.webp",
  "/public/media/holding/desktop/0629 (1)_000074.webp",
  "/public/media/holding/desktop/0629 (1)_000075.webp",
  "/public/media/holding/desktop/0629 (1)_000076.webp",
  "/public/media/holding/desktop/0629 (1)_000077.webp",
  "/public/media/holding/desktop/0629 (1)_000078.webp",
  "/public/media/holding/desktop/0629 (1)_000079.webp",
  "/public/media/holding/desktop/0629 (1)_000080.webp",
  "/public/media/holding/desktop/0629 (1)_000081.webp",
  "/public/media/holding/desktop/0629 (1)_000082.webp",
  "/public/media/holding/desktop/0629 (1)_000083.webp",
  "/public/media/holding/desktop/0629 (1)_000084.webp",
  "/public/media/holding/desktop/0629 (1)_000085.webp",
  "/public/media/holding/desktop/0629 (1)_000086.webp",
  "/public/media/holding/desktop/0629 (1)_000087.webp",
  "/public/media/holding/desktop/0629 (1)_000088.webp",
  "/public/media/holding/desktop/0629 (1)_000089.webp",
  "/public/media/holding/desktop/0629 (1)_000090.webp",
  "/public/media/holding/desktop/0629 (1)_000091.webp",
  "/public/media/holding/desktop/0629 (1)_000092.webp",
  "/public/media/holding/desktop/0629 (1)_000093.webp",
  "/public/media/holding/desktop/0629 (1)_000094.webp",
  "/public/media/holding/desktop/0629 (1)_000095.webp",
  "/public/media/holding/desktop/0629 (1)_000096.webp",
  "/public/media/holding/desktop/0629 (1)_000097.webp",
  "/public/media/holding/desktop/0629 (1)_000098.webp",
  "/public/media/holding/desktop/0629 (1)_000099.webp",
  "/public/media/holding/desktop/0629 (1)_000100.webp",
  "/public/media/holding/desktop/0629 (1)_000101.webp",
  "/public/media/holding/desktop/0629 (1)_000102.webp",
  "/public/media/holding/desktop/0629 (1)_000103.webp",
  "/public/media/holding/desktop/0629 (1)_000104.webp",
  "/public/media/holding/desktop/0629 (1)_000105.webp",
  "/public/media/holding/desktop/0629 (1)_000106.webp",
  "/public/media/holding/desktop/0629 (1)_000107.webp",
  "/public/media/holding/desktop/0629 (1)_000108.webp",
  "/public/media/holding/desktop/0629 (1)_000109.webp",
  "/public/media/holding/desktop/0629 (1)_000110.webp",
  "/public/media/holding/desktop/0629 (1)_000111.webp",
  "/public/media/holding/desktop/0629 (1)_000112.webp",
  "/public/media/holding/desktop/0629 (1)_000113.webp",
  "/public/media/holding/desktop/0629 (1)_000114.webp",
  "/public/media/holding/desktop/0629 (1)_000115.webp",
  "/public/media/holding/desktop/0629 (1)_000116.webp",
  "/public/media/holding/desktop/0629 (1)_000117.webp",
  "/public/media/holding/desktop/0629 (1)_000118.webp",
  "/public/media/holding/desktop/0629 (1)_000119.webp",
  "/public/media/holding/desktop/0629 (1)_000120.webp",
  "/public/media/holding/desktop/0629 (1)_000121.webp",
  "/public/media/holding/desktop/0629 (1)_000122.webp",
  "/public/media/holding/desktop/0629 (1)_000123.webp",
  "/public/media/holding/desktop/0629 (1)_000124.webp",
  "/public/media/holding/desktop/0629 (1)_000125.webp",
  "/public/media/holding/desktop/0629 (1)_000126.webp",
  "/public/media/holding/desktop/0629 (1)_000127.webp",
  "/public/media/holding/desktop/0629 (1)_000128.webp",
  "/public/media/holding/desktop/0629 (1)_000129.webp",
  "/public/media/holding/desktop/0629 (1)_000130.webp",
  "/public/media/holding/desktop/0629 (1)_000131.webp",
  "/public/media/holding/desktop/0629 (1)_000132.webp",
  "/public/media/holding/desktop/0629 (1)_000133.webp",
  "/public/media/holding/desktop/0629 (1)_000134.webp",
  "/public/media/holding/desktop/0629 (1)_000135.webp",
  "/public/media/holding/desktop/0629 (1)_000136.webp",
  "/public/media/holding/desktop/0629 (1)_000137.webp",
  "/public/media/holding/desktop/0629 (1)_000138.webp",
  "/public/media/holding/desktop/0629 (1)_000139.webp",
  "/public/media/holding/desktop/0629 (1)_000140.webp",
  "/public/media/holding/desktop/0629 (1)_000141.webp",
  "/public/media/holding/desktop/0629 (1)_000142.webp",
  "/public/media/holding/desktop/0629 (1)_000143.webp",
  "/public/media/holding/desktop/0629 (1)_000144.webp",
  "/public/media/holding/desktop/0629 (1)_000145.webp",
  "/public/media/holding/desktop/0629 (1)_000146.webp",
  "/public/media/holding/desktop/0629 (1)_000147.webp",
  "/public/media/holding/desktop/0629 (1)_000148.webp",
  "/public/media/holding/desktop/0629 (1)_000149.webp",
  "/public/media/holding/desktop/0629 (1)_000150.webp",
  "/public/media/holding/desktop/0629 (1)_000151.webp",
  "/public/media/holding/desktop/0629 (1)_000152.webp",
  "/public/media/holding/desktop/0629 (1)_000153.webp",
  "/public/media/holding/desktop/0629 (1)_000154.webp",
  "/public/media/holding/desktop/0629 (1)_000155.webp",
  "/public/media/holding/desktop/0629 (1)_000156.webp",
  "/public/media/holding/desktop/0629 (1)_000157.webp",
  "/public/media/holding/desktop/0629 (1)_000158.webp",
  "/public/media/holding/desktop/0629 (1)_000159.webp",
  "/public/media/holding/desktop/0629 (1)_000160.webp",
  "/public/media/holding/desktop/0629 (1)_000161.webp",
  "/public/media/holding/desktop/0629 (1)_000162.webp",
  "/public/media/holding/desktop/0629 (1)_000163.webp",
  "/public/media/holding/desktop/0629 (1)_000164.webp",
  "/public/media/holding/desktop/0629 (1)_000165.webp",
  "/public/media/holding/desktop/0629 (1)_000166.webp",
  "/public/media/holding/desktop/0629 (1)_000167.webp",
  "/public/media/holding/desktop/0629 (1)_000168.webp",
  "/public/media/holding/desktop/0629 (1)_000169.webp",
  "/public/media/holding/desktop/0629 (1)_000170.webp",
  "/public/media/holding/desktop/0629 (1)_000171.webp",
  "/public/media/holding/desktop/0629 (1)_000172.webp",
  "/public/media/holding/desktop/0629 (1)_000173.webp",
  "/public/media/holding/desktop/0629 (1)_000174.webp",
  "/public/media/holding/desktop/0629 (1)_000175.webp",
  "/public/media/holding/desktop/0629 (1)_000176.webp",
  "/public/media/holding/desktop/0629 (1)_000177.webp",
  "/public/media/holding/desktop/0629 (1)_000178.webp",
  "/public/media/holding/desktop/0629 (1)_000179.webp",
  "/public/media/holding/desktop/0629 (1)_000180.webp",
  "/public/media/holding/desktop/0629 (1)_000181.webp",
  "/public/media/holding/desktop/0629 (1)_000182.webp",
  "/public/media/holding/desktop/0629 (1)_000183.webp",
  "/public/media/holding/desktop/0629 (1)_000184.webp",
  "/public/media/holding/desktop/0629 (1)_000185.webp",
  "/public/media/holding/desktop/0629 (1)_000186.webp",
  "/public/media/holding/desktop/0629 (1)_000187.webp",
  "/public/media/holding/desktop/0629 (1)_000188.webp",
  "/public/media/holding/desktop/0629 (1)_000189.webp",
  "/public/media/holding/desktop/0629 (1)_000190.webp",
  "/public/media/holding/desktop/0629 (1)_000191.webp",
  "/public/media/holding/desktop/0629 (1)_000192.webp",
  "/public/media/holding/desktop/0629 (1)_000193.webp",
  "/public/media/holding/desktop/0629 (1)_000194.webp",
  "/public/media/holding/desktop/0629 (1)_000195.webp",
  "/public/media/holding/desktop/0629 (1)_000196.webp",
  "/public/media/holding/desktop/0629 (1)_000197.webp",
  "/public/media/holding/desktop/0629 (1)_000198.webp",
  "/public/media/holding/desktop/0629 (1)_000199.webp",
  "/public/media/holding/desktop/0629 (1)_000200.webp",
  "/public/media/holding/desktop/0629 (1)_000201.webp",
  "/public/media/holding/desktop/0629 (1)_000202.webp",
  "/public/media/holding/desktop/0629 (1)_000203.webp",
  "/public/media/holding/desktop/0629 (1)_000204.webp",
  "/public/media/holding/desktop/0629 (1)_000205.webp",
  "/public/media/holding/desktop/0629 (1)_000206.webp",
  "/public/media/holding/desktop/0629 (1)_000207.webp",
  "/public/media/holding/desktop/0629 (1)_000208.webp",
  "/public/media/holding/desktop/0629 (1)_000209.webp",
  "/public/media/holding/desktop/0629 (1)_000210.webp",
  "/public/media/holding/desktop/0629 (1)_000211.webp",
  "/public/media/holding/desktop/0629 (1)_000212.webp",
  "/public/media/holding/desktop/0629 (1)_000213.webp",
  "/public/media/holding/desktop/0629 (1)_000214.webp",
  "/public/media/holding/desktop/0629 (1)_000215.webp",
  "/public/media/holding/desktop/0629 (1)_000216.webp",
  "/public/media/holding/desktop/0629 (1)_000217.webp",
  "/public/media/holding/desktop/0629 (1)_000218.webp",
  "/public/media/holding/desktop/0629 (1)_000219.webp",
  "/public/media/holding/desktop/0629 (1)_000220.webp",
  "/public/media/holding/desktop/0629 (1)_000221.webp",
  "/public/media/holding/desktop/0629 (1)_000222.webp",
  "/public/media/holding/desktop/0629 (1)_000223.webp",
  "/public/media/holding/desktop/0629 (1)_000224.webp",
  "/public/media/holding/desktop/0629 (1)_000225.webp",
  "/public/media/holding/desktop/0629 (1)_000226.webp",
  "/public/media/holding/desktop/0629 (1)_000227.webp",
  "/public/media/holding/desktop/0629 (1)_000228.webp",
  "/public/media/holding/desktop/0629 (1)_000229.webp",
  "/public/media/holding/desktop/0629 (1)_000230.webp",
  "/public/media/holding/desktop/0629 (1)_000231.webp",
  "/public/media/holding/desktop/0629 (1)_000232.webp",
  "/public/media/holding/desktop/0629 (1)_000233.webp",
  "/public/media/holding/desktop/0629 (1)_000234.webp",
  "/public/media/holding/desktop/0629 (1)_000235.webp",
  "/public/media/holding/desktop/0629 (1)_000236.webp",
  "/public/media/holding/desktop/0629 (1)_000237.webp",
  "/public/media/holding/desktop/0629 (1)_000238.webp",
  "/public/media/holding/desktop/0629 (1)_000239.webp",
  "/public/media/holding/desktop/0629 (1)_000255.webp",
  "/public/media/holding/desktop/0629 (1)_000256.webp",
  "/public/media/holding/desktop/0629 (1)_000257.webp",
  "/public/media/holding/desktop/0629 (1)_000258.webp",
  "/public/media/holding/desktop/0629 (1)_000259.webp",
  "/public/media/holding/desktop/0629 (1)_000260.webp",
  "/public/media/holding/desktop/0629 (1)_000261.webp",
  "/public/media/holding/desktop/0629 (1)_000262.webp",
  "/public/media/holding/desktop/0629 (1)_000263.webp",
  "/public/media/holding/desktop/0629 (1)_000264.webp",
  "/public/media/holding/desktop/0629 (1)_000265.webp",
  "/public/media/holding/desktop/0629 (1)_000266.webp",
  "/public/media/holding/desktop/0629 (1)_000267.webp",
  "/public/media/holding/desktop/0629 (1)_000268.webp",
  "/public/media/holding/desktop/0629 (1)_000269.webp",
  "/public/media/holding/desktop/0629 (1)_000270.webp",
  "/public/media/holding/desktop/0629 (1)_000271.webp",
  "/public/media/holding/desktop/0629 (1)_000272.webp",
  "/public/media/holding/desktop/0629 (1)_000273.webp",
  "/public/media/holding/desktop/0629 (1)_000274.webp",
  "/public/media/holding/desktop/0629 (1)_000275.webp",
  "/public/media/holding/desktop/0629 (1)_000276.webp",
  "/public/media/holding/desktop/0629 (1)_000277.webp",
  "/public/media/holding/desktop/0629 (1)_000278.webp",
  "/public/media/holding/desktop/0629 (1)_000279.webp",
  "/public/media/holding/desktop/0629 (1)_000280.webp",
  "/public/media/holding/desktop/0629 (1)_000281.webp",
  "/public/media/holding/desktop/0629 (1)_000282.webp",
  "/public/media/holding/desktop/0629 (1)_000283.webp",
  "/public/media/holding/desktop/0629 (1)_000284.webp",
  "/public/media/holding/desktop/0629 (1)_000285.webp",
  "/public/media/holding/desktop/0629 (1)_000286.webp",
  "/public/media/holding/desktop/0629 (1)_000287.webp",
  "/public/media/holding/desktop/0629 (1)_000288.webp",
  "/public/media/holding/desktop/0629 (1)_000289.webp",
  "/public/media/holding/desktop/0629 (1)_000290.webp",
  "/public/media/holding/desktop/0629 (1)_000291.webp",
  "/public/media/holding/desktop/0629 (1)_000292.webp",
  "/public/media/holding/desktop/0629 (1)_000293.webp",
  "/public/media/holding/desktop/0629 (1)_000294.webp",
  "/public/media/holding/desktop/0629 (1)_000295.webp",
  "/public/media/holding/desktop/0629 (1)_000296.webp",
  "/public/media/holding/desktop/0629 (1)_000297.webp",
  "/public/media/holding/desktop/0629 (1)_000298.webp",
  "/public/media/holding/desktop/0629 (1)_000299.webp",
  "/public/media/holding/desktop/0629 (1)_000300.webp",
  "/public/media/holding/desktop/0629 (1)_000301.webp",
  "/public/media/holding/desktop/0629 (1)_000302.webp",
  "/public/media/holding/desktop/0629 (1)_000303.webp",
  "/public/media/holding/desktop/0629 (1)_000304.webp",
  "/public/media/holding/desktop/0629 (1)_000305.webp",
  "/public/media/holding/desktop/0629 (1)_000306.webp",
  "/public/media/holding/desktop/0629 (1)_000307.webp",
  "/public/media/holding/desktop/0629 (1)_000308.webp",
  "/public/media/holding/desktop/0629 (1)_000309.webp",
  "/public/media/holding/desktop/0629 (1)_000310.webp",
  "/public/media/holding/desktop/0629 (1)_000311.webp",
  "/public/media/holding/desktop/0629 (1)_000312.webp",
  "/public/media/holding/desktop/0629 (1)_000313.webp",
  "/public/media/holding/desktop/0629 (1)_000314.webp",
  "/public/media/holding/desktop/0629 (1)_000315.webp",
  "/public/media/holding/desktop/0629 (1)_000316.webp",
  "/public/media/holding/desktop/0629 (1)_000317.webp",
  "/public/media/holding/desktop/0629 (1)_000318.webp",
  "/public/media/holding/desktop/0629 (1)_000319.webp",
  "/public/media/holding/desktop/0629 (1)_000320.webp",
  "/public/media/holding/desktop/0629 (1)_000321.webp",
  "/public/media/holding/desktop/0629 (1)_000322.webp",
  "/public/media/holding/desktop/0629 (1)_000323.webp",
  "/public/media/holding/desktop/0629 (1)_000324.webp",
  "/public/media/holding/desktop/0629 (1)_000325.webp",
  "/public/media/holding/desktop/0629 (1)_000326.webp",
  "/public/media/holding/desktop/0629 (1)_000327.webp",
  "/public/media/holding/desktop/0629 (1)_000328.webp",
  "/public/media/holding/desktop/0629 (1)_000329.webp",
  "/public/media/holding/desktop/0629 (1)_000330.webp",
  "/public/media/holding/desktop/0629 (1)_000331.webp",
  "/public/media/holding/desktop/0629 (1)_000332.webp",
  "/public/media/holding/desktop/0629 (1)_000333.webp",
  "/public/media/holding/desktop/0629 (1)_000334.webp",
  "/public/media/holding/desktop/0629 (1)_000335.webp",
  "/public/media/holding/desktop/0629 (1)_000336.webp",
  "/public/media/holding/desktop/0629 (1)_000337.webp",
  "/public/media/holding/desktop/0629 (1)_000338.webp",
  "/public/media/holding/desktop/0629 (1)_000339.webp",
  "/public/media/holding/desktop/0629 (1)_000340.webp",
  "/public/media/holding/desktop/0629 (1)_000341.webp",
  "/public/media/holding/desktop/0629 (1)_000342.webp",
  "/public/media/holding/desktop/0629 (1)_000343.webp",
  "/public/media/holding/desktop/0629 (1)_000344.webp",
  "/public/media/holding/desktop/0629 (1)_000345.webp",
  "/public/media/holding/desktop/0629 (1)_000346.webp",
  "/public/media/holding/desktop/0629 (1)_000347.webp",
  "/public/media/holding/desktop/0629 (1)_000348.webp",
  "/public/media/holding/desktop/0629 (1)_000349.webp",
  "/public/media/holding/desktop/0629 (1)_000350.webp",
  "/public/media/holding/desktop/0629 (1)_000351.webp",
  "/public/media/holding/desktop/0629 (1)_000352.webp",
  "/public/media/holding/desktop/0629 (1)_000353.webp",
  "/public/media/holding/desktop/0629 (1)_000354.webp",
  "/public/media/holding/desktop/0629 (1)_000355.webp",
  "/public/media/holding/desktop/0629 (1)_000356.webp",
  "/public/media/holding/desktop/0629 (1)_000357.webp",
  "/public/media/holding/desktop/0629 (1)_000358.webp",
  "/public/media/holding/desktop/0629 (1)_000359.webp",
  "/public/media/holding/desktop/0629 (1)_000360.webp",
  "/public/media/holding/desktop/0629 (1)_000361.webp",
  "/public/media/holding/desktop/0629 (1)_000362.webp",
  "/public/media/holding/desktop/0629 (1)_000363.webp",
  "/public/media/holding/desktop/0629 (1)_000364.webp",
  "/public/media/holding/desktop/0629 (1)_000365.webp",
  "/public/media/holding/desktop/0629 (1)_000366.webp",
  "/public/media/holding/desktop/0629 (1)_000367.webp",
  "/public/media/holding/desktop/0629 (1)_000368.webp",
  "/public/media/holding/desktop/0629 (1)_000369.webp",
  "/public/media/holding/desktop/0629 (1)_000370.webp",
  "/public/media/holding/desktop/0629 (1)_000371.webp",
  "/public/media/holding/desktop/0629 (1)_000372.webp",
  "/public/media/holding/desktop/0629 (1)_000373.webp",
  "/public/media/holding/desktop/0629 (1)_000374.webp",
  "/public/media/holding/desktop/0629 (1)_000375.webp",
  "/public/media/holding/desktop/0629 (1)_000376.webp",
  "/public/media/holding/desktop/0629 (1)_000377.webp",
  "/public/media/holding/desktop/0629 (1)_000378.webp",
  "/public/media/holding/desktop/0629 (1)_000379.webp",
  "/public/media/holding/desktop/0629 (1)_000380.webp",
  "/public/media/holding/desktop/0629 (1)_000381.webp",
  "/public/media/holding/desktop/0629 (1)_000382.webp",
  "/public/media/holding/desktop/0629 (1)_000383.webp",
  "/public/media/holding/desktop/0629 (1)_000384.webp",
  "/public/media/holding/desktop/0629 (1)_000385.webp",
  "/public/media/holding/desktop/0629 (1)_000386.webp",
  "/public/media/holding/desktop/0629 (1)_000387.webp",
  "/public/media/holding/desktop/0629 (1)_000388.webp",
  "/public/media/holding/desktop/0629 (1)_000389.webp",
  "/public/media/holding/desktop/0629 (1)_000390.webp",
  "/public/media/holding/desktop/0629 (1)_000391.webp",
  "/public/media/holding/desktop/0629 (1)_000392.webp",
  "/public/media/holding/desktop/0629 (1)_000393.webp",
  "/public/media/holding/desktop/0629 (1)_000394.webp",
  "/public/media/holding/desktop/0629 (1)_000395.webp",
  "/public/media/holding/desktop/0629 (1)_000396.webp",
  "/public/media/holding/desktop/0629 (1)_000397.webp",
  "/public/media/holding/desktop/0629 (1)_000398.webp",
  "/public/media/holding/desktop/0629 (1)_000399.webp",
  "/public/media/holding/desktop/0629 (1)_000400.webp",
  "/public/media/holding/desktop/0629 (1)_000401.webp",
  "/public/media/holding/desktop/0629 (1)_000402.webp",
  "/public/media/holding/desktop/0629 (1)_000403.webp",
  "/public/media/holding/desktop/0629 (1)_000404.webp",
  "/public/media/holding/desktop/0629 (1)_000405.webp",
  "/public/media/holding/desktop/0629 (1)_000406.webp",
  "/public/media/holding/desktop/0629 (1)_000407.webp",
  "/public/media/holding/desktop/0629 (1)_000408.webp",
  "/public/media/holding/desktop/0629 (1)_000409.webp",
  "/public/media/holding/desktop/0629 (1)_000410.webp",
  "/public/media/holding/desktop/0629 (1)_000411.webp",
  "/public/media/holding/desktop/0629 (1)_000412.webp",
  "/public/media/holding/desktop/0629 (1)_000413.webp",
  "/public/media/holding/desktop/0629 (1)_000414.webp",
  "/public/media/holding/desktop/0629 (1)_000415.webp",
  "/public/media/holding/desktop/0629 (1)_000416.webp",
  "/public/media/holding/desktop/0629 (1)_000417.webp",
  "/public/media/holding/desktop/0629 (1)_000418.webp",
  "/public/media/holding/desktop/0629 (1)_000419.webp",
  "/public/media/holding/desktop/0629 (1)_000420.webp",
  "/public/media/holding/desktop/0629 (1)_000421.webp",
  "/public/media/holding/desktop/0629 (1)_000422.webp",
  "/public/media/holding/desktop/0629 (1)_000423.webp",
  "/public/media/holding/desktop/0629 (1)_000424.webp",
  "/public/media/holding/desktop/0629 (1)_000425.webp",
  "/public/media/holding/desktop/0629 (1)_000426.webp",
  "/public/media/holding/desktop/0629 (1)_000427.webp",
  "/public/media/holding/desktop/0629 (1)_000428.webp",
  "/public/media/holding/desktop/0629 (1)_000429.webp",
  "/public/media/holding/desktop/0629 (1)_000430.webp",
  "/public/media/holding/desktop/0629 (1)_000431.webp",
  "/public/media/holding/desktop/0629 (1)_000432.webp",
  "/public/media/holding/desktop/0629 (1)_000433.webp",
  "/public/media/holding/desktop/0629 (1)_000434.webp",
  "/public/media/holding/desktop/0629 (1)_000435.webp",
  "/public/media/holding/desktop/0629 (1)_000436.webp",
  "/public/media/holding/desktop/0629 (1)_000437.webp",
  "/public/media/holding/desktop/0629 (1)_000438.webp",
  "/public/media/holding/desktop/0629 (1)_000439.webp",
  "/public/media/holding/desktop/0629 (1)_000440.webp",
  "/public/media/holding/desktop/0629 (1)_000441.webp",
  "/public/media/holding/desktop/0629 (1)_000442.webp",
  "/public/media/holding/desktop/0629 (1)_000443.webp",
  "/public/media/holding/desktop/0629 (1)_000444.webp",
  "/public/media/holding/desktop/0629 (1)_000445.webp",
  "/public/media/holding/desktop/0629 (1)_000446.webp",
  "/public/media/holding/desktop/0629 (1)_000447.webp",
  "/public/media/holding/desktop/0629 (1)_000448.webp",
  "/public/media/holding/desktop/0629 (1)_000449.webp",
  "/public/media/holding/desktop/0629 (1)_000450.webp",
  "/public/media/holding/desktop/0629 (1)_000451.webp",
  "/public/media/holding/desktop/0629 (1)_000452.webp",
  "/public/media/holding/desktop/0629 (1)_000453.webp",
  "/public/media/holding/desktop/0629 (1)_000454.webp",
  "/public/media/holding/desktop/0629 (1)_000455.webp",
  "/public/media/holding/desktop/0629 (1)_000456.webp",
  "/public/media/holding/desktop/0629 (1)_000457.webp",
  "/public/media/holding/desktop/0629 (1)_000458.webp",
  "/public/media/holding/desktop/0629 (1)_000459.webp",
  "/public/media/holding/desktop/0629 (1)_000460.webp",
  "/public/media/holding/desktop/0629 (1)_000461.webp",
  "/public/media/holding/desktop/0629 (1)_000462.webp",
  "/public/media/holding/desktop/0629 (1)_000463.webp",
  "/public/media/holding/desktop/0629 (1)_000464.webp",
  "/public/media/holding/desktop/0629 (1)_000465.webp",
  "/public/media/holding/desktop/0629 (1)_000466.webp",
  "/public/media/holding/desktop/0629 (1)_000467.webp"
];
export const holdingMobileFrames = [
  "/public/media/holding/mobile/0629 (1)_000001.webp",
  "/public/media/holding/mobile/0629 (1)_000003.webp",
  "/public/media/holding/mobile/0629 (1)_000005.webp",
  "/public/media/holding/mobile/0629 (1)_000007.webp",
  "/public/media/holding/mobile/0629 (1)_000009.webp",
  "/public/media/holding/mobile/0629 (1)_000011.webp",
  "/public/media/holding/mobile/0629 (1)_000013.webp",
  "/public/media/holding/mobile/0629 (1)_000015.webp",
  "/public/media/holding/mobile/0629 (1)_000017.webp",
  "/public/media/holding/mobile/0629 (1)_000019.webp",
  "/public/media/holding/mobile/0629 (1)_000021.webp",
  "/public/media/holding/mobile/0629 (1)_000023.webp",
  "/public/media/holding/mobile/0629 (1)_000025.webp",
  "/public/media/holding/mobile/0629 (1)_000027.webp",
  "/public/media/holding/mobile/0629 (1)_000029.webp",
  "/public/media/holding/mobile/0629 (1)_000031.webp",
  "/public/media/holding/mobile/0629 (1)_000033.webp",
  "/public/media/holding/mobile/0629 (1)_000035.webp",
  "/public/media/holding/mobile/0629 (1)_000039.webp",
  "/public/media/holding/mobile/0629 (1)_000041.webp",
  "/public/media/holding/mobile/0629 (1)_000043.webp",
  "/public/media/holding/mobile/0629 (1)_000045.webp",
  "/public/media/holding/mobile/0629 (1)_000047.webp",
  "/public/media/holding/mobile/0629 (1)_000049.webp",
  "/public/media/holding/mobile/0629 (1)_000051.webp",
  "/public/media/holding/mobile/0629 (1)_000053.webp",
  "/public/media/holding/mobile/0629 (1)_000055.webp",
  "/public/media/holding/mobile/0629 (1)_000057.webp",
  "/public/media/holding/mobile/0629 (1)_000059.webp",
  "/public/media/holding/mobile/0629 (1)_000061.webp",
  "/public/media/holding/mobile/0629 (1)_000063.webp",
  "/public/media/holding/mobile/0629 (1)_000065.webp",
  "/public/media/holding/mobile/0629 (1)_000067.webp",
  "/public/media/holding/mobile/0629 (1)_000069.webp",
  "/public/media/holding/mobile/0629 (1)_000071.webp",
  "/public/media/holding/mobile/0629 (1)_000073.webp",
  "/public/media/holding/mobile/0629 (1)_000075.webp",
  "/public/media/holding/mobile/0629 (1)_000077.webp",
  "/public/media/holding/mobile/0629 (1)_000079.webp",
  "/public/media/holding/mobile/0629 (1)_000081.webp",
  "/public/media/holding/mobile/0629 (1)_000083.webp",
  "/public/media/holding/mobile/0629 (1)_000085.webp",
  "/public/media/holding/mobile/0629 (1)_000087.webp",
  "/public/media/holding/mobile/0629 (1)_000089.webp",
  "/public/media/holding/mobile/0629 (1)_000091.webp",
  "/public/media/holding/mobile/0629 (1)_000093.webp",
  "/public/media/holding/mobile/0629 (1)_000095.webp",
  "/public/media/holding/mobile/0629 (1)_000097.webp",
  "/public/media/holding/mobile/0629 (1)_000099.webp",
  "/public/media/holding/mobile/0629 (1)_000101.webp",
  "/public/media/holding/mobile/0629 (1)_000103.webp",
  "/public/media/holding/mobile/0629 (1)_000105.webp",
  "/public/media/holding/mobile/0629 (1)_000107.webp",
  "/public/media/holding/mobile/0629 (1)_000109.webp",
  "/public/media/holding/mobile/0629 (1)_000111.webp",
  "/public/media/holding/mobile/0629 (1)_000113.webp",
  "/public/media/holding/mobile/0629 (1)_000115.webp",
  "/public/media/holding/mobile/0629 (1)_000117.webp",
  "/public/media/holding/mobile/0629 (1)_000119.webp",
  "/public/media/holding/mobile/0629 (1)_000121.webp",
  "/public/media/holding/mobile/0629 (1)_000123.webp",
  "/public/media/holding/mobile/0629 (1)_000125.webp",
  "/public/media/holding/mobile/0629 (1)_000127.webp",
  "/public/media/holding/mobile/0629 (1)_000129.webp",
  "/public/media/holding/mobile/0629 (1)_000131.webp",
  "/public/media/holding/mobile/0629 (1)_000133.webp",
  "/public/media/holding/mobile/0629 (1)_000135.webp",
  "/public/media/holding/mobile/0629 (1)_000137.webp",
  "/public/media/holding/mobile/0629 (1)_000139.webp",
  "/public/media/holding/mobile/0629 (1)_000141.webp",
  "/public/media/holding/mobile/0629 (1)_000143.webp",
  "/public/media/holding/mobile/0629 (1)_000145.webp",
  "/public/media/holding/mobile/0629 (1)_000147.webp",
  "/public/media/holding/mobile/0629 (1)_000149.webp",
  "/public/media/holding/mobile/0629 (1)_000151.webp",
  "/public/media/holding/mobile/0629 (1)_000153.webp",
  "/public/media/holding/mobile/0629 (1)_000155.webp",
  "/public/media/holding/mobile/0629 (1)_000157.webp",
  "/public/media/holding/mobile/0629 (1)_000159.webp",
  "/public/media/holding/mobile/0629 (1)_000161.webp",
  "/public/media/holding/mobile/0629 (1)_000163.webp",
  "/public/media/holding/mobile/0629 (1)_000165.webp",
  "/public/media/holding/mobile/0629 (1)_000167.webp",
  "/public/media/holding/mobile/0629 (1)_000169.webp",
  "/public/media/holding/mobile/0629 (1)_000171.webp",
  "/public/media/holding/mobile/0629 (1)_000173.webp",
  "/public/media/holding/mobile/0629 (1)_000175.webp",
  "/public/media/holding/mobile/0629 (1)_000177.webp",
  "/public/media/holding/mobile/0629 (1)_000179.webp",
  "/public/media/holding/mobile/0629 (1)_000181.webp",
  "/public/media/holding/mobile/0629 (1)_000183.webp",
  "/public/media/holding/mobile/0629 (1)_000185.webp",
  "/public/media/holding/mobile/0629 (1)_000187.webp",
  "/public/media/holding/mobile/0629 (1)_000189.webp",
  "/public/media/holding/mobile/0629 (1)_000191.webp",
  "/public/media/holding/mobile/0629 (1)_000193.webp",
  "/public/media/holding/mobile/0629 (1)_000195.webp",
  "/public/media/holding/mobile/0629 (1)_000197.webp",
  "/public/media/holding/mobile/0629 (1)_000199.webp",
  "/public/media/holding/mobile/0629 (1)_000201.webp",
  "/public/media/holding/mobile/0629 (1)_000203.webp",
  "/public/media/holding/mobile/0629 (1)_000205.webp",
  "/public/media/holding/mobile/0629 (1)_000207.webp",
  "/public/media/holding/mobile/0629 (1)_000209.webp",
  "/public/media/holding/mobile/0629 (1)_000211.webp",
  "/public/media/holding/mobile/0629 (1)_000213.webp",
  "/public/media/holding/mobile/0629 (1)_000215.webp",
  "/public/media/holding/mobile/0629 (1)_000217.webp",
  "/public/media/holding/mobile/0629 (1)_000219.webp",
  "/public/media/holding/mobile/0629 (1)_000221.webp",
  "/public/media/holding/mobile/0629 (1)_000223.webp",
  "/public/media/holding/mobile/0629 (1)_000225.webp",
  "/public/media/holding/mobile/0629 (1)_000227.webp",
  "/public/media/holding/mobile/0629 (1)_000229.webp",
  "/public/media/holding/mobile/0629 (1)_000231.webp",
  "/public/media/holding/mobile/0629 (1)_000233.webp",
  "/public/media/holding/mobile/0629 (1)_000235.webp",
  "/public/media/holding/mobile/0629 (1)_000237.webp",
  "/public/media/holding/mobile/0629 (1)_000239.webp",
  "/public/media/holding/mobile/0629 (1)_000256.webp",
  "/public/media/holding/mobile/0629 (1)_000258.webp",
  "/public/media/holding/mobile/0629 (1)_000260.webp",
  "/public/media/holding/mobile/0629 (1)_000262.webp",
  "/public/media/holding/mobile/0629 (1)_000264.webp",
  "/public/media/holding/mobile/0629 (1)_000266.webp",
  "/public/media/holding/mobile/0629 (1)_000268.webp",
  "/public/media/holding/mobile/0629 (1)_000270.webp",
  "/public/media/holding/mobile/0629 (1)_000272.webp",
  "/public/media/holding/mobile/0629 (1)_000274.webp",
  "/public/media/holding/mobile/0629 (1)_000276.webp",
  "/public/media/holding/mobile/0629 (1)_000278.webp",
  "/public/media/holding/mobile/0629 (1)_000280.webp",
  "/public/media/holding/mobile/0629 (1)_000282.webp",
  "/public/media/holding/mobile/0629 (1)_000284.webp",
  "/public/media/holding/mobile/0629 (1)_000286.webp",
  "/public/media/holding/mobile/0629 (1)_000288.webp",
  "/public/media/holding/mobile/0629 (1)_000290.webp",
  "/public/media/holding/mobile/0629 (1)_000292.webp",
  "/public/media/holding/mobile/0629 (1)_000294.webp",
  "/public/media/holding/mobile/0629 (1)_000296.webp",
  "/public/media/holding/mobile/0629 (1)_000298.webp",
  "/public/media/holding/mobile/0629 (1)_000300.webp",
  "/public/media/holding/mobile/0629 (1)_000302.webp",
  "/public/media/holding/mobile/0629 (1)_000304.webp",
  "/public/media/holding/mobile/0629 (1)_000306.webp",
  "/public/media/holding/mobile/0629 (1)_000308.webp",
  "/public/media/holding/mobile/0629 (1)_000310.webp",
  "/public/media/holding/mobile/0629 (1)_000312.webp",
  "/public/media/holding/mobile/0629 (1)_000314.webp",
  "/public/media/holding/mobile/0629 (1)_000316.webp",
  "/public/media/holding/mobile/0629 (1)_000318.webp",
  "/public/media/holding/mobile/0629 (1)_000320.webp",
  "/public/media/holding/mobile/0629 (1)_000322.webp",
  "/public/media/holding/mobile/0629 (1)_000324.webp",
  "/public/media/holding/mobile/0629 (1)_000326.webp",
  "/public/media/holding/mobile/0629 (1)_000328.webp",
  "/public/media/holding/mobile/0629 (1)_000330.webp",
  "/public/media/holding/mobile/0629 (1)_000332.webp",
  "/public/media/holding/mobile/0629 (1)_000334.webp",
  "/public/media/holding/mobile/0629 (1)_000336.webp",
  "/public/media/holding/mobile/0629 (1)_000338.webp",
  "/public/media/holding/mobile/0629 (1)_000340.webp",
  "/public/media/holding/mobile/0629 (1)_000342.webp",
  "/public/media/holding/mobile/0629 (1)_000344.webp",
  "/public/media/holding/mobile/0629 (1)_000346.webp",
  "/public/media/holding/mobile/0629 (1)_000348.webp",
  "/public/media/holding/mobile/0629 (1)_000350.webp",
  "/public/media/holding/mobile/0629 (1)_000352.webp",
  "/public/media/holding/mobile/0629 (1)_000354.webp",
  "/public/media/holding/mobile/0629 (1)_000356.webp",
  "/public/media/holding/mobile/0629 (1)_000358.webp",
  "/public/media/holding/mobile/0629 (1)_000360.webp",
  "/public/media/holding/mobile/0629 (1)_000362.webp",
  "/public/media/holding/mobile/0629 (1)_000364.webp",
  "/public/media/holding/mobile/0629 (1)_000366.webp",
  "/public/media/holding/mobile/0629 (1)_000368.webp",
  "/public/media/holding/mobile/0629 (1)_000370.webp",
  "/public/media/holding/mobile/0629 (1)_000372.webp",
  "/public/media/holding/mobile/0629 (1)_000374.webp",
  "/public/media/holding/mobile/0629 (1)_000376.webp",
  "/public/media/holding/mobile/0629 (1)_000378.webp",
  "/public/media/holding/mobile/0629 (1)_000380.webp",
  "/public/media/holding/mobile/0629 (1)_000382.webp",
  "/public/media/holding/mobile/0629 (1)_000384.webp",
  "/public/media/holding/mobile/0629 (1)_000386.webp",
  "/public/media/holding/mobile/0629 (1)_000388.webp",
  "/public/media/holding/mobile/0629 (1)_000390.webp",
  "/public/media/holding/mobile/0629 (1)_000392.webp",
  "/public/media/holding/mobile/0629 (1)_000394.webp",
  "/public/media/holding/mobile/0629 (1)_000396.webp",
  "/public/media/holding/mobile/0629 (1)_000398.webp",
  "/public/media/holding/mobile/0629 (1)_000400.webp",
  "/public/media/holding/mobile/0629 (1)_000402.webp",
  "/public/media/holding/mobile/0629 (1)_000404.webp",
  "/public/media/holding/mobile/0629 (1)_000406.webp",
  "/public/media/holding/mobile/0629 (1)_000408.webp",
  "/public/media/holding/mobile/0629 (1)_000410.webp",
  "/public/media/holding/mobile/0629 (1)_000412.webp",
  "/public/media/holding/mobile/0629 (1)_000414.webp",
  "/public/media/holding/mobile/0629 (1)_000416.webp",
  "/public/media/holding/mobile/0629 (1)_000418.webp",
  "/public/media/holding/mobile/0629 (1)_000420.webp",
  "/public/media/holding/mobile/0629 (1)_000422.webp",
  "/public/media/holding/mobile/0629 (1)_000424.webp",
  "/public/media/holding/mobile/0629 (1)_000426.webp",
  "/public/media/holding/mobile/0629 (1)_000428.webp",
  "/public/media/holding/mobile/0629 (1)_000430.webp",
  "/public/media/holding/mobile/0629 (1)_000432.webp",
  "/public/media/holding/mobile/0629 (1)_000434.webp",
  "/public/media/holding/mobile/0629 (1)_000436.webp",
  "/public/media/holding/mobile/0629 (1)_000438.webp",
  "/public/media/holding/mobile/0629 (1)_000440.webp",
  "/public/media/holding/mobile/0629 (1)_000442.webp",
  "/public/media/holding/mobile/0629 (1)_000444.webp",
  "/public/media/holding/mobile/0629 (1)_000446.webp",
  "/public/media/holding/mobile/0629 (1)_000448.webp",
  "/public/media/holding/mobile/0629 (1)_000450.webp",
  "/public/media/holding/mobile/0629 (1)_000452.webp",
  "/public/media/holding/mobile/0629 (1)_000454.webp",
  "/public/media/holding/mobile/0629 (1)_000456.webp",
  "/public/media/holding/mobile/0629 (1)_000458.webp",
  "/public/media/holding/mobile/0629 (1)_000460.webp",
  "/public/media/holding/mobile/0629 (1)_000462.webp",
  "/public/media/holding/mobile/0629 (1)_000464.webp",
  "/public/media/holding/mobile/0629 (1)_000466.webp"
];
````

## src\data\projectContent.js

``js
export const buildingCallouts = [
  {
    id: 1,
    eyebrow: "Локация",
    title: "Центр городской жизни",
    description: "Комплекс расположен в новом центре притяжения, обеспечивая удобный доступ ко всем ключевым точкам города.",
    startProgress: 0.1,
    endProgress: 0.4
  },
  {
    id: 2,
    eyebrow: "Пространство",
    title: "Продуманные планировки",
    description: "Каждый метр спроектирован с учетом современных требований к комфорту и функциональности.",
    startProgress: 0.3,
    endProgress: 0.6
  },
  {
    id: 3,
    eyebrow: "Комфорт",
    title: "Инфраструктура рядом",
    description: "Всё необходимое для жизни, отдыха и работы находится в шаговой доступности.",
    startProgress: 0.5,
    endProgress: 0.8
  }
];

export const projectInfo = {
  about: "Уникальный архитектурный проект, объединяющий современный дизайн, передовые технологии строительства и премиальный уровень сервиса. Это не просто дом, это пространство для жизни, которое вдохновляет.",
  benefits: [
    { title: "Панорамные окна", description: "Наслаждайтесь потрясающими видами на город каждый день." },
    { title: "Приватная территория", description: "Закрытый двор без машин, охрана 24/7 и система видеонаблюдения." },
    { title: "Премиальные материалы", description: "В отделке фасадов и лобби использованы только натуральные и экологичные материалы." }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
  ]
};
````

## src\index.css

``css
@import "tailwindcss";

@theme {
  --color-brand-bg: #0B0D10;
  --color-brand-light: #F3F0EA;
  --color-brand-gold: #C7A36A;
  --color-brand-gold-light: #E0C18A;
  --color-brand-gray: #A6A19A;
  --font-sans: "Inter", "Roboto", sans-serif;
}

body {
  background-color: var(--color-brand-bg);
  color: var(--color-brand-light);
  margin: 0;
  font-family: var(--font-sans);
  overscroll-behavior: none;
}

/* Custom utility for glassmorphism */
.glass {
  background: rgba(243, 240, 234, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(243, 240, 234, 0.1);
}

.text-gold {
  color: var(--color-brand-gold);
}

.text-gray {
  color: var(--color-brand-gray);
}
````

## src\main.jsx

``jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## vite.config.js

``js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
````

