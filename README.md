# FashionHub QA Automation Framework
Automated end-to-end testing framework built with Playwright + TypeScript, supporting multi-environment execution, Docker integration, and CI/CD pipelines.
Focus is mostly on quality, maintainability, scalability, and real-world production readiness.

# Key Skills & Tools Demonstrated
Category	            Tools / Skills
Programming	            JavaScript, TypeScript, Node.js
Automation Framework	Playwright, Page Object Model (POM)
Testing Types	        Functional, End-to-End, Cross-Browser, API
Version Control	        Git, GitHub
Reporting	            Playwright HTML Reports, CSV export
Environments	        Local, Staging, Production

# Supported Environments
Environment   	URL
Local	        http://localhost:4000/fashionhub/
Staging	(dummy) https://staging-env/fashionhub/
Production	    https://pocketaces2.github.io/fashionhub/

# Test Cases Implemented
1.  As a tester, I want to make sure there are no console errors when you visit
2.  As a tester, I want to check if a page is returning the expected status code
3.  As a customer, I want to verify I can log in to: https://pocketaces2.github.io/fashionhub/login.html
4.  As a product owner, I want to see how many open pull requests are there for our product. You
    can use https://github.com/appwrite/appwrite/pulls as an example product.
    Output is a list of PR in CSV format with PR name, created date and author.

# Install dependencies
npm install
npx playwright install --with-deps

# Run all tests
npx playwright test

# Run in specific environment
**Local**
set TEST_ENV=local && npx playwright test
**Staging**
set TEST_ENV=staging && npx playwright test
**Production**
npx playwright test
or
npx playwright test --env=production

# Docker Integration

**Build and run tests in Docker container:**
docker compose up --build

**Run only tests container:**
docker build -t fashionhub-tests .
docker run --rm fashionhub-tests

# Reporting
HTML reports for all test runs: npx playwright show-report
CSV output of open GitHub PRs: open_prs.csv


# Instructions to run as docker container

## Pull the image from dockerhub using below command:
docker pull pocketaces2/fashionhub-demo-app 

## Run the docker container below command:
docker run -p 4000:4000 pocketaces2/fashionhub-demo-app:latest

## Navigate to the homepage locally using below link on any browser:
http://localhost:4000/fashionhub/ 
