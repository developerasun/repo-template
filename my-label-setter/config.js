const path = require('path')

const Setup = new Map()

const ShowInstruction = () => {
    // change this to terminal interaction
    console.log(`
    1. Add your labels in labels.json
    2. Enter your repository, secret token, username in order in updateLabel.js
    3. Execute program with command: node updateLabel
    `)
}

const UpdateSetup = (repoName, token, userName) => {
    if (typeof(repoName, token, userName) == "string") {
        Setup.set("repoName", repoName)
        Setup.set("secretToken", token)
        Setup.set("userName", userName)
        Setup.set("labels", "labels.json") // fixed value
    } else {
        console.log("Enter info in string")
    }
}

const LogCommand = () => {
    // destructuring map values in array
    let [repoName, token, userName, labels] = [...Setup.values()]

    const labelCommand =`copy and paste this to terminal: npx github-label-sync --access-token ${token} --labels ${labels} ${userName}/${repoName}`
    console.log(`${labelCommand}\n`)
}

module.exports = {
    UpdateSetup,
    LogCommand, 
    ShowInstruction
}