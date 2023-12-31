//import react
const React = require('react')

function Def (html) {
  const currentYear = new Date().toLocaleDateString();
    return (
<html>
<head>
<title>Title</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
<link rel="stylesheet" href="/css/style.css"/>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
    crossorigin="anonymous"/>
</head>
<meta charset="UTF-8"></meta>
<body>
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/places">Places</a>
    </li>
    <li>
      <a href="/places/new">Add Place</a>
    </li>
  </ul>
</nav>
    {html.children}
  {/* <div class="content">
    <div class="content-inside">
   
    </div>
  </div> */}
  <footer class="footer"> Copyright &copy; {currentYear} by Thilini Dharmawardhana
  </footer>
</body>
</html>
    )
  }
  module.exports = Def


