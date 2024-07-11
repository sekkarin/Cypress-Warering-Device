const cypress = require('cypress')
const yargs = require('yargs')
const { merge } = require('mochawesome-merge')
const marge = require('mochawesome-report-generator')
const rm = require('rimraf')
const fs = require('fs')
const cypressConfig = require('./cypress.config')
const ls = require('ls')
const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron']
    },
    'spec': {
        alias: 's',
        describe: 'run test with specific spec file',
        default: 'cypress/e2e/Auth'
    }
}).help()
  .argv

const reportDir = cypressConfig.reporterOptions.reportDir
const reportFiles = `${reportDir}/*.json`
// list all of existing report files
ls(reportFiles, { recurse: true }, file => console.log(`removing ${file.full}`))

// delete all existing report files
// rm(reportFiles, (error) => {
//     if (error) {
//         console.error(`Error while removing existing report files: ${error}`)
//         process.exit(1)
//     }
//     console.log('Removing all existing report files successfully!')
// })

fs.readdir(reportDir, (err, files) => {
    if (err) {
        console.error(`Error while reading existing report files: ${err}`)
        process.exit(1)
    }

    files.forEach(file => {
        fs.unlinkSync(`${reportDir}/${file}`)
    })

    console.log('Removing all existing report files successfully!')
})

cypress.run({
    browser: argv.browser,
    spec: argv.spec
}).then((results) => {
    if (results.config) {
        const reporterOptions = {
            reportDir: results.config.reporterOptions.reportDir,
        }
        generateReport(reporterOptions)
    } else {
        console.error('Cypress run failed: results.config is undefined.')
        process.exit(1)
    }
}).catch((error) => {
    console.error('errors: ', error)
    process.exit(1)
})

cypress.run({
    browser: argv.browser,
    spec: argv.spec
}).then((results) => {
    const reporterOptions = {
        reportDir: results.config.reporterOptions.reportDir,
    }
    generateReport(reporterOptions)
}).catch((error) => {
    console.error('errors: ', error)
    process.exit(1)
})

function generateReport(options) {
    return merge(options).then((report) => {
        marge.create(report, options)
    })
}