function generateHTML(data) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <main>
${buildTeam(data)}
</main>
</body>
</html>
`
}

function buildTeam(team){
    function managerHtml(managerObj){
        return`<h1 class="">${managerObj.getName()}</h1>`
    }

    function internHtml() {

    }
    const html = []

    html.push(
        team.filter((item) => item.getRole() === 'Manager')
        .map((manager)=> managerHtml(manager)));



    return html.join('')
}




module.exports= generateHTML;