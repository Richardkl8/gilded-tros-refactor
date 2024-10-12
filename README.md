# Gilded Tros - How to Use the Project

## Getting Started

### Install Dependencies
First, install all the project dependencies by running:
```sh
npm install
```

## Running the Application

### Run the Simulation
You can run a simulation of the Gilded Tros inventory update process. By default, the simulation runs for **4 days**. If you'd like to run it for a different number of days, provide that number as an argument:
```sh
npm run start
```
For example, to run a simulation for **10 days**, use:
```sh
npm run start 10
```

## Running Unit Tests
To run all unit tests for the project and view the coverage report, use:
```sh
npm run test
```
This will execute all tests and provide a summary of the test results along with code coverage metrics.

## Project Structure
- **src**: Contains all source code, organized into the following folders:
    - **models**: Defines the core data structures, such as `Item`.
    - **constants**: Stores constant values used throughout the project, such as item names and quality limits, to maintain consistency and avoid magic numbers.
    - **services**: Contains the business logic of the application, including functions that update item properties based on different rules. 
- **test**: Contains the text test for the whole project.

