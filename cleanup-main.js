'use strict'

const { app } = require('electron')

const window = require('./window')

function main() {
  let mainWindow = new window({
    file: 'index.html'
  })
}

app.on('ready', main)

app.on('window-all-closed', function() {
  app.quit()
})
