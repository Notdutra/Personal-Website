#!/bin/bash

# Create the skills directory if it doesn't exist
mkdir -p public/skills
cd public/skills

# Download all the skill icons
echo "Downloading skill icons..."

# Languages
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" -o java.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" -o javascript.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" -o python.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" -o dart.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" -o csharp.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" -o html5.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" -o css3.svg

# Frameworks & Tools
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" -o spring.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" -o react.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" -o flutter.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" -o dotnet.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" -o nodejs.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" -o github.svg
curl -s "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" -o postman.svg
curl -s "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" -o salesforce.svg

# Databases
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" -o mongodb.svg

# Testing & Integration
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" -o jest.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" -o graphql.svg
curl -s "https://www.vectorlogo.zone/logos/cypressio/cypressio-icon.svg" -o cypress.svg

# Operating Systems
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" -o windows.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" -o linux.svg
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" -o macos.svg

echo "✅ All skill icons downloaded successfully!"
ls -la
