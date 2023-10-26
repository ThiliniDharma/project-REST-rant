//import react
const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"/>

            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  module.exports = Def


