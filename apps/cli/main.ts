#!/usr/bin/env node

import { UserRepository } from "../../packages/infrastructure/repositories/UserRepository.ts";

const app = () => {

  const name = process.argv[2];
  const lastName = process.argv[3];
  const age = parseInt(process.argv[4]);

  if (!name || !lastName || isNaN(age)) {
    console.error("Usage: mycli <name> <lastName> <age>");
    process.exit(1);
  }

  const userRepository = new UserRepository();
  const user = userRepository.createUser(name, lastName, age);

  console.log(`User created:`, user);

};

app();
