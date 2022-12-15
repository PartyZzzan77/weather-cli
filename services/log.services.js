import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(chalk.bgRed(' ERROR: '), error);
};

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen(' SUCCESS: '), msg);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
		No parameters - weather output
		-s [CITY] to set the city
		-h to display help
		-t [API_KEY] to save token
		`
  );
};
