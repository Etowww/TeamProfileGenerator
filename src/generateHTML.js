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
    <header>My Team</header>
    <main>
    ${buildTeam(data)}
    </main>
</body>
</html>
`
}

function buildTeam(team){
    function managerHtml(managerObj){
        return`
        <div class = 'personCard'>
            <div class = 'titleInfo'>
                <h2>${managerObj.getName()}</h2>
                <h3>${managerObj.getRole()}</h3>
            </div>
            <div class = 'personalInfo'>
                <h3>ID: ${managerObj.getId()}</h3>
                <h3>Email: <a href="mailto:${managerObj.getEmail()}">${managerObj.getEmail()}</a></h3>
                <h3>Office Number: ${managerObj.getOfficeNumber()}</h3>
            </div>
        </div>`
    };

    function engineerHtml(engineerObj){
        return`
        <div class = 'personCard'>
            <div class = 'titleInfo'>
                <h2>${engineerObj.getName()}</h2>
                <h3>${engineerObj.getRole()}</h3>
            </div>
            <div class = 'personalInfo'>
                <h3>ID: ${engineerObj.getId()}</h3>
                <h3>Email: <a href="mailto:${engineerObj.getEmail()}">${engineerObj.getEmail()}</a></h3>
                <h3>Github Account: <a href="https://github.com/${engineerObj.getGithub()}">${engineerObj.getGithub()}</a></h3>
            </div>
        </div>`
    };

    function internHtml(internObj){
        return`
        <div class = 'personCard'>
            <div class = 'titleInfo'>
                <h2>${internObj.getName()}</h2>
                <h3>${internObj.getRole()}</h3>
            </div>
            <div class = 'personalInfo'>
                <h3>ID: ${internObj.getId()}</h3>
                <h3>Email: <a href="mailto:${internObj.getEmail()}">${internObj.getEmail()}</a></h3>
                <h3>School: ${internObj.getSchool()}</h3>
            </div>
        </div>`
    };
    

    const html = []

    html.push(
        team.filter((item) => item.getRole() === 'Manager')
        .map((manager)=> managerHtml(manager)));

    html.push(
        team.filter((item) => item.getRole() === 'Engineer')
        .map((engineer)=> engineerHtml(engineer)));

    html.push(
        team.filter((item) => item.getRole() === 'Intern')
        .map((intern)=> internHtml(intern)));

    return html.join('')
};




module.exports= generateHTML;