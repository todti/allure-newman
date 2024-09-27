# Allure Mocha

> This is an example of how to use Allure Report with Mocha, a JavaScript test framework.

[<img src="https://allurereport.org/public/img/allure-report.svg" height="85px" alt="Allure Report logo" align="right" />](https://allurereport.org "Allure Report")

- Learn more about Allure Report at https://allurereport.org
- 📚 [Documentation](https://allurereport.org/docs/) – discover official documentation for Allure Report
- ❓ [Questions and Support](https://github.com/orgs/allure-framework/discussions/categories/questions-support) – get help from the team and community
- 📢 [Official annoucements](https://github.com/orgs/allure-framework/discussions/categories/announcements) – be in touch with the latest updates
- 💬 [General Discussion ](https://github.com/orgs/allure-framework/discussions/categories/general-discussion) – engage in casual conversations, share insights and ideas with the community

## Requirements

The following software must be installed to run this project:

  - [Node.js](#nodejs) (version 14 or greater) - a JavaScript runtime environment.

You will also need [Allure Report](#allure-report) to generate and open test reports.

### Node.js

You can download Node.js at [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
Allure Mocha requires Node.js version 14 or greater.

To validate if Node.js is installed and to check its version, run:

```shell
node --version
```

Additionally, you might want to update npm to the latest version:

```shell
npm install -g npm@latest
```

### Allure Report

Allure Report must be installed to generate and open test reports.

Refer to
[https://allurereport.org/docs/gettingstarted-installation/](https://allurereport.org/docs/gettingstarted-installation/)
for the installation instructions.

To verify if Allure Report is available, run:

```shell
allure --version
```

If Allure Report is installed, the command will print its version.

## How to run the tests?

You need to prepare the project before the first use. Then, you may run the
tests as many times as you want.

### Perform one-time setup

Install the project's dependencies with npm:

```shell
npm install
```

### Execute the tests

Run the tests with npm:

```shell
npm run test
```

### Use run.sh, or run.bat

We've included script files to make the whole process more convenient for you.
Run the file that corresponds to your OS to prepare the project and run the
tests in a single step.

#### Linux, Mac OS

If you're using Linux or Mac OS, run:

```shell
./run.sh
```

> [!NOTE]
> Make sure the script file can be executed. If it's not, run the following:
> ```shell
> chmod +x run.sh
> ```

#### Windows

On Windows, run the following:

```shell
.\run.bat
```

## What's next?

### How to create and view the Allure report?

Each test run accumulates the result files in the `allure-results` directory.
Use the following command to generate the report from those files:

```shell
allure generate --single-file allure-results
```

Once the report is generated, open `./allure-report/index.html` in a browser.

> [!NOTE]
> `--single-file` requires Allure Report version 2.24.0 or greater.
> If you use an older version, please, consider upgrading. Alternatively, you
> may generate the full report by omitting `--single-file`. See
> [How to view a report](https://allurereport.org/docs/gettingstarted-view-report/)
> for how to view such a report.

> [!NOTE]
> Sometimes you might want to create a new report from scratch.
> In that case, delete the `allure-results` directory before running the tests.

### How to make the report even better?

There're lots of things to improve on the report you've just generated. Allure Report has a
rich set of features to help you with that! To get familiar with these features,
please visit Allure Report Documentation at
[https://allurereport.org/docs/](https://allurereport.org/docs/).

We also advise you to visit
[https://allurereport.org/docs/mocha/#writing-tests](https://allurereport.org/docs/mocha/#writing-tests)
for more information about how to utilize those features with Allure Mocha.

### How to enable the history of runs?

Do you know that Allure Report can help you to analyze the history of your test runs?

Visit
[History and retries](https://allurereport.org/docs/history-and-retries/)
to learn more about that feature and how to enable it.

## Generated with Allure Start

This project was created with Allure Start. Create more projects at
[https://allurereport.org/start/](https://allurereport.org/start/).

Generated on 27 September 2024.