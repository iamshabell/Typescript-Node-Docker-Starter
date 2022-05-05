### Typescript, Node, Docker Starter

A real-world baseline Node setup running in Docker that’s developer-friendly and ready for production-level applications

- **Compiler**: [SWC](https://swc.rs/) for compiling JavaScript to TypeScript
- **Web Server**: [Express](https://expressjs.com/) for backend
- **TypeScript**: [TypeScript](https://www.typescriptlang.org/) for type-safng JavaScript
- **Node Version Manager**: [Volta](https://volta.sh/) for managing node versions
- **Docker**: [Docker](https://www.docker.com/) for the devops
- **Prisma**: [Prisma](https://www.prisma.io/) for orm and migration to DB

### Environment and Prerequisities

You’ll want to make sure you have the following components installed on your machine:

- **Docker**(Desktop download [here](https://www.docker.com/products/docker-desktop/) --- Apple users: be sure to pick the right download for your processor, Intel vs. Apple)
- **Node v17**(I recommend using [Volta](https://volta.sh/) to manage your node versions locally)
- **Yarn v1**
- **VSCode**

_Note_: I would normally use the latest Node LTS version (v16 as of this writing) for production-level applications, but SWC seems to work better with v17 right now. So we’ll go with it!
